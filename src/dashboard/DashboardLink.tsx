import type { ReactNode } from 'react';

import type { DashboardLinkRenderer } from './types';

type DashboardLinkProps = {
  href: string;
  children: ReactNode;
  className: string;
  renderLink?: DashboardLinkRenderer | undefined;
  ariaLabel?: string | undefined;
};

export function DashboardLink({
  href,
  children,
  className,
  renderLink,
  ariaLabel,
}: DashboardLinkProps) {
  const props = { href, children, className, ariaLabel };

  if (renderLink) return renderLink(props);

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
