import png from '../../assets/images/praveen-profile.png';
import w240 from '../../assets/images/praveen-profile-240.webp';
import w480 from '../../assets/images/praveen-profile-480.webp';
import w960 from '../../assets/images/praveen-profile-960.webp';

// Layout spec §8 — replaces ui/Avatar. An aspect-boxed plate, not a ring-bordered
// circle: the circle plus its green ring is half of why the old hero read cheap.
//
// The aspect box means the image can never distort — `object-cover` crops to the
// declared ratio at the stored focal point. WebP first with the original PNG as
// the fallback source, so the picture still renders if a WebP is missing.
//
// Pass `aspect={null}` to drop the inline ratio and size the box from classes
// instead — the About plate does that so its image cell can take the slack in a
// flex column.
//
//   <Portrait className="w-36" sizes="144px" priority />          Home masthead
//   <Portrait framed={false} className="w-full" aspect="3 / 2" /> inside a Card

const cx = (...parts) => parts.filter(Boolean).join(' ');

const Portrait = ({
  aspect = '4 / 5',
  width,
  sizes = '100vw',
  priority = false,
  framed = true,
  alt = 'Praveen Gamini',
  className = '',
  style,
  ...rest
}) => (
  <picture
    className={cx(
      'block shrink-0 overflow-hidden bg-subtle',
      framed && 'rounded-sheet border-2 border-line',
      className
    )}
    style={{ width, ...(aspect ? { aspectRatio: aspect } : null), ...style }}
    {...rest}
  >
    <source type="image/webp" srcSet={`${w240} 240w, ${w480} 480w, ${w960} 960w`} sizes={sizes} />
    <img
      src={png}
      alt={alt}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      // React 18 passes only the lowercase DOM attribute through; camelCase warns.
      // eslint-disable-next-line react/no-unknown-property
      fetchpriority={priority ? 'high' : undefined}
      className="h-full w-full object-cover"
      style={{ objectPosition: '50% 22%' }}
    />
  </picture>
);

export default Portrait;
