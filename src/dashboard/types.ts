import type { CSSProperties, ReactNode } from 'react';

import type { ColorMode } from '../themes/lulafi';

export type DashboardColorMode = ColorMode;

export type DashboardLinkProps = {
  href: string;
  children: ReactNode;
  className?: string | undefined;
  ariaLabel?: string | undefined;
};

export type DashboardLinkRenderer = (props: DashboardLinkProps) => ReactNode;

export type DashboardThemeStyle = CSSProperties & {
  '--hcl-dashboard-surface': string;
  '--hcl-dashboard-text': string;
  '--hcl-dashboard-muted': string;
  '--hcl-dashboard-border': string;
  '--hcl-dashboard-soft': string;
  '--hcl-dashboard-hover-surface': string;
  '--hcl-dashboard-hover-border': string;
  '--hcl-dashboard-accent': string;
  '--hcl-dashboard-danger-surface': string;
  '--hcl-dashboard-danger-text': string;
  '--hcl-dashboard-focus': string;
};
