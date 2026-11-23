import type { DashboardColorMode, DashboardLinkRenderer } from './types';
type DashboardStatCardProps = {
    title: string;
    value: number;
    caption?: string | undefined;
    href?: string | undefined;
    mode?: DashboardColorMode | undefined;
    renderLink?: DashboardLinkRenderer | undefined;
};
export declare function DashboardStatCard({ title, value, caption, href, mode, renderLink, }: DashboardStatCardProps): import("react").JSX.Element;
export {};
