// Spec 4.22 / 4.6 — the white tile a company logo sits on. The face stays
// #FFFFFF in both themes, because brand marks are drawn for a white background.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const LogoTile = ({ src, alt = '', size = 56, radius = 14, pad = 4, className = '', ...rest }) => (
  <span
    className={cx('inline-flex shrink-0 items-center justify-center overflow-hidden bg-white', className)}
    style={{
      width: size,
      height: size,
      borderRadius: radius,
      border: '2px solid rgb(0 0 0 / 0.08)',
      boxShadow: '0 3px 0 rgb(0 0 0 / 0.18)',
    }}
    {...rest}
  >
    <img
      src={src}
      alt={alt}
      width={size - pad * 2}
      height={size - pad * 2}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain"
      style={{ padding: pad }}
    />
  </span>
);

export default LogoTile;
