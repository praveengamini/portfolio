import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useReducedMotion } from 'motion/react';
import { profile } from '../data/content';
import { celebrateSend } from '../lib/celebrate';
import identity from '../lib/identity';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FeedbackBar from '../components/ui/FeedbackBar';
import PageSection from '../components/ui/PageSection';
import ContactField from '../components/contact/ContactField';
import ContactTile from '../components/contact/ContactTile';
import SentPanel from '../components/contact/SentPanel';

// /contact — a form that works, plus the direct links. The send logic below
// (constants, encode, the EmailJS branch, the DEV error, the Netlify Forms
// fallback and the status machine) is unchanged; only the presentation is new.

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
const FORM_NAME = 'contact';

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');

const FIELDS = ['name', 'email', 'message'];

const HINTS = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email.',
  message: 'Please write a message.',
};

const EMPTY = { name: '', email: '', message: '' };
const NONE = { name: false, email: false, message: false };

const DIRECT = [identity.email, identity.linkedin, identity.github, identity.location];

const LEAD = 'Have a role, a project, or just want to talk shop? I usually reply within a day.';

const Contact = () => {
  const reduce = useReducedMotion();

  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorText, setErrorText] = useState('');

  const [valid, setValid] = useState(NONE);
  const [touched, setTouched] = useState(NONE);
  const [attempted, setAttempted] = useState(false);
  const [shake, setShake] = useState({ name: 0, email: 0, message: 0 });
  const [cardShake, setCardShake] = useState(0);
  const [cardShaking, setCardShaking] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const refs = { name: nameRef, email: emailRef, message: messageRef };

  const allValid = FIELDS.every((field) => valid[field]);

  // Re-trigger the shake on the form card after a failed send.
  useEffect(() => {
    if (!cardShake || reduce) return undefined;
    setCardShaking(false);
    const frame = requestAnimationFrame(() => setCardShaking(true));
    const timer = setTimeout(() => setCardShaking(false), 440);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [cardShake, reduce]);

  const onChange = (e) => {
    const { name, value } = e.target;
    const ok = value.trim() !== '' && e.target.checkValidity();
    setForm((f) => ({ ...f, [name]: value }));
    setValid((v) => ({ ...v, [name]: ok }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const focusFirstInvalid = () => {
    setAttempted(true);
    const first = FIELDS.find((field) => !valid[field]);
    if (!first) return;
    refs[first].current?.focus();
    setShake((s) => ({ ...s, [first]: s[first] + 1 }));
  };

  const onFormKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.requestSubmit();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!allValid) {
      focusFirstInvalid();
      return;
    }
    setStatus('sending');
    setErrorText('');
    try {
      if (emailjsConfigured) {
        console.info('[contact] sending via EmailJS');
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { name: form.name, email: form.email, message: form.message },
          { publicKey: PUBLIC_KEY }
        );
      } else if (import.meta.env.DEV) {
        throw new Error(
          'EmailJS keys not found. Create a .env file in the project root with VITE_SERVICE_ID, VITE_TEMPLATE_ID and VITE_PUBLIC_API_KEY, then restart `npm run dev`.'
        );
      } else {
        // Netlify Forms: POST the url-encoded fields to any path on the site.
        console.info('[contact] sending via Netlify Forms');
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': FORM_NAME, ...form }),
        });
        if (!res.ok) throw new Error(`Netlify form responded ${res.status}`);
      }
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setValid(NONE);
      setTouched(NONE);
      setAttempted(false);
      celebrateSend();
    } catch (err) {
      console.error('[contact] error', err);
      const detail = err?.text || err?.message || (typeof err === 'string' ? err : 'Unknown error');
      setErrorText(detail);
      setStatus('error');
      setCardShake((count) => count + 1);
    }
  };

  const restart = () => {
    setStatus('idle');
    setErrorText('');
  };

  const hintFor = (field) => (touched[field] || attempted) && !valid[field];

  const sent = status === 'sent';
  const failed = status === 'error';

  return (
    <div
      className={
        failed
          ? 'flex min-w-0 flex-col gap-10 pb-[240px] md:gap-12 lg:gap-14'
          : 'flex min-w-0 flex-col gap-10 md:gap-12 lg:gap-14'
      }
    >
      <header className="min-w-0">
        <h1 className="t-h1 text-fg">Contact</h1>
        {sent ? null : <p className="t-body-lg mt-2 max-w-[58ch] text-muted">{LEAD}</p>}
      </header>

      {/* One row: the form on cols 1–7, the direct links on 8–12. Stacked below
          1024 with the form first. `SentPanel` replaces the form card in place,
          in the same slot, so the page never reflows around it. Both columns
          wear the same section band, so their cards start on the same line. */}
      <div className="grid-12 min-w-0 items-start gap-y-10 md:gap-y-12 lg:gap-y-6">
        <PageSection
          titleId="contact-form-title"
          title="Send a message"
          className="col-span-4 sm:col-span-8 lg:col-span-7"
        >
          {sent ? (
            <SentPanel onRestart={restart} />
          ) : (
            <Card padding={24} className={cardShaking ? 'animate-shake' : undefined}>
              <form
                id="contact-form"
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                noValidate
                onSubmit={onSubmit}
                onKeyDown={onFormKeyDown}
                className="grid gap-4 sm:grid-cols-2"
              >
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" onChange={() => {}} />
                  </label>
                </p>

                <ContactField
                  ref={nameRef}
                  id="contact-name"
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  valid={valid.name}
                  invalid={hintFor('name')}
                  hint={HINTS.name}
                  shakeKey={shake.name}
                />

                <ContactField
                  ref={emailRef}
                  id="contact-email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  valid={valid.email}
                  invalid={hintFor('email')}
                  hint={HINTS.email}
                  shakeKey={shake.email}
                />

                <ContactField
                  ref={messageRef}
                  textarea
                  id="contact-message"
                  name="message"
                  label="Message"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  valid={valid.message}
                  invalid={hintFor('message')}
                  hint={HINTS.message}
                  shakeKey={shake.message}
                  rows={5}
                  className="sm:col-span-2"
                />

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === 'sending'}
                    aria-disabled={allValid ? undefined : 'true'}
                    onClick={(event) => {
                      if (status === 'sending') {
                        event.preventDefault();
                        return;
                      }
                      if (!allValid) {
                        event.preventDefault();
                        focusFirstInvalid();
                      }
                    }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </PageSection>

        {/* Four facts, one uniform set, from the same definitions Home and
            /about use. Location folds into the list, so it is not an orphan
            line under the grid and renders exactly once on this page. */}
        <PageSection
          titleId="contact-direct"
          title="Reach me directly"
          className="col-span-4 sm:col-span-8 lg:col-span-5"
        >
          <Card padding={0}>
            <ul aria-label="Direct contact details" className="divide-y-2 divide-line">
              {DIRECT.map((row) => (
                <ContactTile
                  key={row.key}
                  href={row.href}
                  label={row.label}
                  value={row.value}
                  icon={row.icon}
                  hue={row.hue}
                />
              ))}
            </ul>
          </Card>
        </PageSection>
      </div>

      {failed ? (
        <FeedbackBar
          status={status}
          title="Couldn’t send your message."
          body={
            <p>
              Email me directly at{' '}
              <a href={profile.mailUrl} target="_blank" rel="noreferrer">
                {profile.email}
              </a>
              .
            </p>
          }
          detail={errorText}
          secondary={
            <Button as="a" href={profile.mailUrl} external variant="secondary" size="lg">
              Email instead
            </Button>
          }
          primary={
            <Button
              variant="danger"
              size="lg"
              onClick={() => {
                setErrorText('');
                setStatus('idle');
              }}
            >
              Try again
            </Button>
          }
        />
      ) : null}
    </div>
  );
};

export default Contact;
