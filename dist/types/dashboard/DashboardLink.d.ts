import type { ReactNode } from 'react';
import type { DashboardLinkRenderer } from './types';
type DashboardLinkProps = {
    href: string;
    children: ReactNode;
    className: string;
    renderLink?: DashboardLinkRenderer | undefined;
    ariaLabel?: string | undefined;
};
export declare function DashboardLink({ href, children, className, renderLink, ariaLabel, }: DashboardLinkProps): string | number | bigint | boolean | import("react").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export {};
