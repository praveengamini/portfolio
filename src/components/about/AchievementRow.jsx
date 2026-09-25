import { useReducedMotion } from 'motion/react';
import { springPop, stagger } from '../../lib/motion';
import AchievementBadge from '../ui/AchievementBadge';
import Card from '../ui/Card';
import Chip from '../ui/Chip';

// Layout spec 3.2 — one achievement as a card in the 3-up grid.
//
// Every card carries all four parts in the same order — badge, title, detail,
// rank chip — so the three siblings are structurally identical. `h-full` plus
// `auto-rows-fr` on the grid equalises the heights, and `mt-auto` pins the rank
// chip to the bottom, so no title or detail line is ever clamped to keep the
// row level.

const AchievementRow = ({ achievement, index = 0, className = '' }) => {
  const reduce = useReducedMotion();
  const { title, detail, badge } = achievement;

  return (
    <Card as="li" padding={20} className={`flex h-full flex-col ${className}`}>
      <AchievementBadge
        tone={badge.tone}
        label={badge.label}
        glyph={badge.glyph}
        size={48}
        transition={reduce ? { duration: 0 } : { ...springPop, delay: index * stagger.badge }}
      />

      <h3 className="t-h4 mt-3 text-fg">{title}</h3>
      <p className="t-body-sm mt-2 max-w-[62ch] text-muted">{detail}</p>

      {/* `style` lands after the component's own, so the chip sits at the 26px spec height. */}
      <Chip tone="gold" className="mt-auto self-start" style={{ height: 26 }}>
        {badge.rank}
      </Chip>
    </Card>
  );
};

export default AchievementRow;
