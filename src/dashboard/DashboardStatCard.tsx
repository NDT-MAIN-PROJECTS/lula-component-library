import { DashboardCard } from './DashboardCard';
import { DashboardLink } from './DashboardLink';
import type { DashboardColorMode, DashboardLinkRenderer } from './types';

type DashboardStatCardProps = {
  title: string;
  value: number;
  caption?: string | undefined;
  href?: string | undefined;
  mode?: DashboardColorMode | undefined;
  renderLink?: DashboardLinkRenderer | undefined;
};

export function DashboardStatCard({
  title,
  value,
  caption,
  href,
  mode = 'light',
  renderLink,
}: DashboardStatCardProps) {
  const card = (
    <DashboardCard mode={mode}>
      <div className="hcl-dashboard-stat">
        <div className="hcl-dashboard-stat__topline">
          <h2 className="hcl-dashboard-stat__title">{title}</h2>
          {href && (
            <span className="hcl-dashboard-stat__arrow" aria-hidden="true">
              ›
            </span>
          )}
        </div>
        <p className="hcl-dashboard-stat__value">{value.toLocaleString()}</p>
        {caption && <p className="hcl-dashboard-stat__caption">{caption}</p>}
      </div>
    </DashboardCard>
  );

  if (!href) return card;

  return (
    <DashboardLink
      href={href}
      className="hcl-dashboard-link hcl-dashboard-stat-link"
      renderLink={renderLink}
    >
      {card}
    </DashboardLink>
  );
}
