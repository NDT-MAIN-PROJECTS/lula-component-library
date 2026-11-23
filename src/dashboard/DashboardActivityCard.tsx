import { DashboardCard } from './DashboardCard';
import { DashboardLink } from './DashboardLink';
import type { DashboardColorMode, DashboardLinkRenderer } from './types';

export type DashboardActivityRow = {
  label: string;
  value: number;
  href?: string | undefined;
};

type DashboardActivityCardProps = {
  title?: string | undefined;
  subtitle?: string | undefined;
  rows: readonly DashboardActivityRow[];
  mode?: DashboardColorMode | undefined;
  renderLink?: DashboardLinkRenderer | undefined;
};

export function DashboardActivityCard({
  title = 'Activity',
  subtitle = 'Product usage in this period.',
  rows,
  mode = 'light',
  renderLink,
}: DashboardActivityCardProps) {
  return (
    <DashboardCard mode={mode}>
      <div className="hcl-dashboard-card__heading">
        <h2 className="hcl-dashboard-card__title">{title}</h2>
        {subtitle && <p className="hcl-dashboard-card__subtitle">{subtitle}</p>}
      </div>
      <div className="hcl-dashboard-activity__rows">
        {rows.map((row) => {
          const content = (
            <div className="hcl-dashboard-activity__row">
              <span className="hcl-dashboard-activity__label">{row.label}</span>
              <span className="hcl-dashboard-activity__value">{row.value.toLocaleString()}</span>
            </div>
          );

          return row.href ? (
            <DashboardLink
              key={row.label}
              href={row.href}
              className="hcl-dashboard-link hcl-dashboard-row-link"
              renderLink={renderLink}
              ariaLabel={`${row.label}: ${row.value.toLocaleString()}`}
            >
              {content}
            </DashboardLink>
          ) : (
            <div className="hcl-dashboard-activity__item" key={row.label}>
              {content}
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}
