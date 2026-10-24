import type { ReactNode } from 'react';

import { DashboardCard } from './DashboardCard';
import type { DashboardColorMode } from './types';

export type DashboardRecentActivityItem = {
  id: string;
  actor: ReactNode;
  action: string;
  entity?: string | undefined;
  time: string;
  timeLabel: string;
  timeTitle?: string | undefined;
};

type DashboardRecentActivityCardProps = {
  items: readonly DashboardRecentActivityItem[];
  loading: boolean;
  errorMessage?: string | undefined;
  loadingText?: string | undefined;
  emptyText?: string | undefined;
  action?: ReactNode | undefined;
  mode?: DashboardColorMode | undefined;
};

export function DashboardRecentActivityCard({
  items,
  loading,
  errorMessage,
  loadingText = 'Loading activity…',
  emptyText = 'No activity recorded yet.',
  action,
  mode = 'light',
}: DashboardRecentActivityCardProps) {
  return (
    <DashboardCard mode={mode}>
      <div className="hcl-dashboard-card__heading hcl-dashboard-card__heading--action">
        <div>
          <h2 className="hcl-dashboard-card__title">Recent activity</h2>
          <p className="hcl-dashboard-card__subtitle">Latest entries in the audit trail.</p>
        </div>
        {action && <div className="hcl-dashboard-card__action">{action}</div>}
      </div>
      {errorMessage && (
        <p className="hcl-dashboard-error" role="alert">
          {errorMessage}
        </p>
      )}
      {loading && items.length === 0 && (
        <p className="hcl-dashboard-empty" role="status">
          {loadingText}
        </p>
      )}
      {!loading && !errorMessage && items.length === 0 && (
        <p className="hcl-dashboard-empty">{emptyText}</p>
      )}
      {items.length > 0 && (
        <div className="hcl-dashboard-recent__rows">
          {items.map((item) => (
            <div className="hcl-dashboard-recent__row" key={item.id}>
              <p className="hcl-dashboard-recent__description">
                {item.actor}
                {' · '}
                <strong>{item.action}</strong>
                {item.entity && (
                  <span className="hcl-dashboard-recent__entity"> {item.entity}</span>
                )}
              </p>
              <time
                className="hcl-dashboard-recent__time"
                dateTime={item.time}
                title={item.timeTitle}
              >
                {item.timeLabel}
              </time>
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
}
