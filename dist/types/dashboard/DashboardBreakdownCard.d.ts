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
export declare function DashboardBreakdownCard({ title, subtitle, rows, emptyText, mode, renderLink, }: DashboardBreakdownCardProps): import("react").JSX.Element;
export {};
