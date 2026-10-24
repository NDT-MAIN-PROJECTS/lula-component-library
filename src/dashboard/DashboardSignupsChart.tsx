import type { CSSProperties, ReactNode } from 'react';

import { DashboardCard } from './DashboardCard';
import type { DashboardColorMode } from './types';

export type DashboardSignupPoint = {
  date: string;
  dateLabel: string;
  count: number;
  tooltipLabel: string;
};

export type DashboardSignupSeries = readonly [DashboardSignupPoint, ...DashboardSignupPoint[]];

type DashboardSignupsChartProps = {
  signups: DashboardSignupSeries;
  action?: ReactNode | undefined;
  mode?: DashboardColorMode | undefined;
};

export function DashboardSignupsChart({
  signups,
  action,
  mode = 'light',
}: DashboardSignupsChartProps) {
  const total = signups.reduce((sum, day) => sum + day.count, 0);
  const peak = signups.reduce((best, day) => (day.count > best.count ? day : best), signups[0]);
  const first = signups[0];
  const last = signups.reduce((_previous, day) => day, signups[0]);
  const peakLabel = `${peak.dateLabel} (${peak.count.toLocaleString()})`;
  const chartLabel =
    `Daily signups from ${first.dateLabel} to ${last.dateLabel}: ` +
    `${total.toLocaleString()} in total, peaking at ${peak.count.toLocaleString()} on ${peak.dateLabel}.`;

  return (
    <DashboardCard mode={mode}>
      <div className="hcl-dashboard-card__heading hcl-dashboard-card__heading--action">
        <div>
          <h2 className="hcl-dashboard-card__title">Signups</h2>
          <p className="hcl-dashboard-card__subtitle">
            {total === 0
              ? 'No new users in this period.'
              : `${total.toLocaleString()} new users · busiest day ${peakLabel}`}
          </p>
        </div>
        {action && <div className="hcl-dashboard-card__action">{action}</div>}
      </div>
      <div className="hcl-dashboard-signups-chart" role="img" aria-label={chartLabel}>
        {signups.map((day) => {
          const height = peak.count ? (day.count / peak.count) * 100 : 0;
          const barStyle = {
            '--hcl-dashboard-bar-height': `${height}%`,
            '--hcl-dashboard-bar-min-height': day.count > 0 ? '2px' : '0',
          } as CSSProperties;

          return (
            <div
              className="hcl-dashboard-signups-chart__slot"
              key={day.date}
              title={day.tooltipLabel}
            >
              <div className="hcl-dashboard-signups-chart__bar" style={barStyle} />
            </div>
          );
        })}
      </div>
      <div className="hcl-dashboard-signups-chart__dates" aria-hidden="true">
        <span>{first.dateLabel}</span>
        <span>{last.dateLabel}</span>
      </div>
    </DashboardCard>
  );
}
