import type { ReactNode } from 'react';
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
export declare function DashboardSignupsChart({ signups, action, mode, }: DashboardSignupsChartProps): import("react").JSX.Element;
export {};
