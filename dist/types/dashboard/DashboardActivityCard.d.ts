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
export declare function DashboardActivityCard({ title, subtitle, rows, mode, renderLink, }: DashboardActivityCardProps): import("react").JSX.Element;
export {};
