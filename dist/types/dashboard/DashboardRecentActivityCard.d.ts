import type { ReactNode } from 'react';
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
export declare function DashboardRecentActivityCard({ items, loading, errorMessage, loadingText, emptyText, action, mode, }: DashboardRecentActivityCardProps): import("react").JSX.Element;
export {};
