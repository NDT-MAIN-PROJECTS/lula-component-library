import { semanticColors } from '../themes/lulafi';

import type { DashboardColorMode, DashboardThemeStyle } from './types';

export function dashboardThemeStyle(mode: DashboardColorMode): DashboardThemeStyle {
  const colors = semanticColors[mode];

  return {
    '--hcl-dashboard-surface': colors.surface.elevated,
    '--hcl-dashboard-text': colors.content.primary,
    '--hcl-dashboard-muted': colors.content.secondary,
    '--hcl-dashboard-border': colors.stroke.default,
    '--hcl-dashboard-soft': colors.surface.strong,
    '--hcl-dashboard-hover-surface': colors.surface.interactive,
    '--hcl-dashboard-hover-border': colors.stroke.selected,
    '--hcl-dashboard-accent': colors.surface.interactiveStrong,
    '--hcl-dashboard-danger-surface': colors.status.danger.surface,
    '--hcl-dashboard-danger-text': colors.status.danger.content,
    '--hcl-dashboard-focus': colors.stroke.focus,
  };
}
