import type { ReactNode } from 'react';

import { dashboardThemeStyle } from './theme';
import type { DashboardColorMode } from './types';

type DashboardCardProps = {
  children: ReactNode;
  mode: DashboardColorMode;
};

export function DashboardCard({ children, mode }: DashboardCardProps) {
  return (
    <article className="hcl-dashboard-card" style={dashboardThemeStyle(mode)}>
      {children}
    </article>
  );
}
