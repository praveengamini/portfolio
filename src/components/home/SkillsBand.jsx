import Card from '../ui/Card';
import IconBadge from '../ui/IconBadge';
import WordTile from '../ui/WordTile';
import { groupMeta, skillGroups } from '../../data/skills';

// Layout spec §2.2 — all 33 skills, in five rows of one card, in under half a
// screen. No tabs, no filter, no "+n more": everything is visible at once.
//
// Languages renders at `md` (44px tiles, 18px brand marks, the WordTile hop)
// on a subtle wash, so the five languages are the heaviest thing on the page
// right under the masthead. The other four groups render at `sm`.

const cx = (...parts) => parts.filter(Boolean).join(' ');

const SkillsBand = ({ className = '' }) => (
  <Card padding={0} className={cx('overflow-hidden', className)}>
    <div className="divide-y-2 divide-line">
      {skillGroups.map((group, index) => {
        const meta = groupMeta[group.group] || {};
        const lead = index === 0;

        return (
          <div
            key={group.group}
            className={cx(
              'grid min-w-0 gap-3 p-4 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-x-6',
              lead && 'bg-subtle'
            )}
          >
            <div className="flex min-w-0 items-center gap-3 lg:items-start">
              <IconBadge icon={meta.icon} hue={meta.hue || 'neutral'} size={28} style="tint" />

              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5 lg:block">
                <h3 className="t-h4 text-fg">{group.group}</h3>
                <p className="t-micro text-muted">{group.items.length} skills</p>
              </div>
            </div>

            <ul className="flex min-w-0 flex-wrap gap-2" aria-label={`${group.group} skills`}>
              {group.items.map((item) => (
                <WordTile
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  color={item.color}
                  size={lead ? 'md' : 'sm'}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </Card>
);

export default SkillsBand;
