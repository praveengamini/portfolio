import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck,
  FaCircleExclamation,
} from 'react-icons/fa6';
import { profile } from '../data/content';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const emailjsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
const FORM_NAME = 'contact';

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');

const inputClass =
  'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorText, setErrorText] = useState('');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
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
    } catch (err) {
      console.error('[contact] error', err);
      const detail = err?.text || err?.message || (typeof err === 'string' ? err : 'Unknown error');
      setErrorText(detail);
      setStatus('error');
    }
  };

  return (
    <section className="container-narrow pb-20 pt-14 sm:pt-20">
      <p className="eyebrow">Get in touch</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-fg sm:text-4xl">Contact</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Have a role, a project, or just want to talk shop? Send a message — I usually reply within a day.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <div className="space-y-5">
          <a
            href={profile.mailUrl}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-4 p-4 transition-colors hover:border-fg/30"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <FaEnvelope size={16} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted">Email</p>
              <p className="truncate text-sm font-medium text-fg">{profile.email}</p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-4 p-4 transition-colors hover:border-fg/30"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <FaLinkedinIn size={16} />
            </span>
            <div>
              <p className="text-xs text-muted">LinkedIn</p>
              <p className="text-sm font-medium text-fg">praveen-gamini</p>
            </div>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-4 p-4 transition-colors hover:border-fg/30"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <FaGithub size={16} />
            </span>
            <div>
              <p className="text-xs text-muted">GitHub</p>
              <p className="text-sm font-medium text-fg">praveengamini</p>
            </div>
          </a>
          <p className="flex items-center gap-2 px-1 text-sm text-muted">
            <FaLocationDot size={12} className="text-accent" /> {profile.location}
          </p>
        </div>

        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="card p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="hidden">
            <label>
              Don&apos;t fill this out: <input name="bot-field" onChange={() => {}} />
            </label>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={6}
              placeholder="What's on your mind?"
              className={`${inputClass} resize-y`}
            />
          </label>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
              <FaPaperPlane size={12} /> {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </div>

          <div aria-live="polite" className="mt-4 empty:hidden">
            {status === 'sent' && (
              <p className="flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 text-sm text-emerald-700 dark:text-emerald-300">
                <FaCircleCheck className="mt-0.5 shrink-0" /> Sent — thanks, I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-700 dark:text-red-300">
                <p className="flex items-start gap-2">
                  <FaCircleExclamation className="mt-0.5 shrink-0" /> Couldn&apos;t send your message. Email
                  me directly at{' '}
                  <a className="underline" href={profile.mailUrl} target="_blank" rel="noreferrer">
                    {profile.email}
                  </a>
                  .
                </p>
                {errorText && <p className="mt-1.5 break-words font-mono text-xs opacity-80">{errorText}</p>}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
