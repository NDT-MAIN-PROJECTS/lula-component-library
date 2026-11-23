import type { CSSProperties } from 'react';

import { DashboardCard } from './DashboardCard';
import { DashboardLink } from './DashboardLink';
import type { DashboardColorMode, DashboardLinkRenderer } from './types';

export type DashboardBreakdownRow = {
  label: string;
  count: number;
  href?: string | undefined;
};

type DashboardBreakdownCardProps = {
  title: string;
  subtitle?: string | undefined;
  rows: readonly DashboardBreakdownRow[];
  emptyText: string;
  mode?: DashboardColorMode | undefined;
  renderLink?: DashboardLinkRenderer | undefined;
};

function formatShare(percent: number) {
  return percent > 0 && percent < 1 ? '<1%' : `${Math.round(percent)}%`;
}

export function DashboardBreakdownCard({
  title,
  subtitle,
  rows,
  emptyText,
  mode = 'light',
  renderLink,
}: DashboardBreakdownCardProps) {
  const total = rows.reduce((sum, row) => sum + row.count, 0);

  return (
    <DashboardCard mode={mode}>
      <div className="hcl-dashboard-card__heading">
        <h2 className="hcl-dashboard-card__title">{title}</h2>
        {subtitle && <p className="hcl-dashboard-card__subtitle">{subtitle}</p>}
      </div>
      {total === 0 ? (
        <p className="hcl-dashboard-empty">{emptyText}</p>
      ) : (
        <div className="hcl-dashboard-breakdown__rows">
          {rows.map((row) => {
            const percent = (row.count / total) * 100;
            const content = (
              <div className="hcl-dashboard-breakdown__row">
                <div className="hcl-dashboard-breakdown__labels">
                  <span>{row.label}</span>
                  <span className="hcl-dashboard-breakdown__count">
                    {row.count.toLocaleString()} ({formatShare(percent)})
                  </span>
                </div>
                <div className="hcl-dashboard-breakdown__track" aria-hidden="true">
                  <div
                    className="hcl-dashboard-breakdown__fill"
                    style={{ '--hcl-dashboard-row-width': `${percent}%` } as CSSProperties}
                  />
                </div>
              </div>
            );

            return row.href ? (
              <DashboardLink
                key={row.label}
                href={row.href}
                className="hcl-dashboard-link hcl-dashboard-row-link"
                renderLink={renderLink}
                ariaLabel={`${row.label}: ${row.count.toLocaleString()} (${formatShare(percent)})`}
              >
                {content}
              </DashboardLink>
            ) : (
              <div key={row.label}>{content}</div>
            );
          })}
        </div>
      )}
    </DashboardCard>
  );
}
