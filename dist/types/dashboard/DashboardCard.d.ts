import type { ReactNode } from 'react';
import type { DashboardColorMode } from './types';
type DashboardCardProps = {
    children: ReactNode;
    mode: DashboardColorMode;
};
export declare function DashboardCard({ children, mode }: DashboardCardProps): import("react").JSX.Element;
export {};
