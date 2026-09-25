const TONES = {
  gold: { face: '#FFC800', lip: '#E7A601' },
  purple: { face: '#CE82FF', lip: '#A568CC' },
};

const SCALLOPS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

/**
 * Award rosette: a scalloped medal with two ribbon tails. The centre holds either
 * a short letter (`letter`) or an icon passed as children.
 */
const Rosette = ({ tone = 'gold', size = 44, letter, label, className = '', children }) => {
  const { face, lip } = TONES[tone] || TONES.gold;
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' };

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 44 44" focusable="false" {...a11y}>
        {/* ribbon tails */}
        <path d="M14 26h7v16l-3.5-4-3.5 4V26Z" fill={lip} />
        <path d="M23 26h7v16l-3.5-4-3.5 4V26Z" fill={face} />
        {/* scalloped edge */}
        {SCALLOPS.map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle key={deg} cx={22 + 13 * Math.cos(rad)} cy={20 + 13 * Math.sin(rad)} r="3.4" fill={lip} />
          );
        })}
        <circle cx="22" cy="20" r="14" fill={lip} />
        <circle cx="22" cy="20" r="11.5" fill={face} />
        {letter && (
          <text
            x="22"
            y="20"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="13"
            fontWeight="800"
            fill="#FFFFFF"
            className="font-sans"
          >
            {letter}
          </text>
        )}
      </svg>
      {children && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 text-white"
          style={{ top: (size * 20) / 44, transform: 'translate(-50%, -50%)' }}
        >
          {children}
        </span>
      )}
    </span>
  );
};

export default Rosette;
