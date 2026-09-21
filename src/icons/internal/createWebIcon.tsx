import type { ElementType } from 'react';

import type { IconComponent } from '../types';

export function createWebIcon(VendorIcon: ElementType, displayName: string): IconComponent {
  const Icon: IconComponent = ({ accessibilityLabel, testID, ...props }) => (
    <VendorIcon
      {...props}
      {...(accessibilityLabel
        ? { role: 'img', 'aria-label': accessibilityLabel }
        : { 'aria-hidden': true })}
      {...(testID ? { 'data-testid': testID } : {})}
    />
  );

  Icon.displayName = displayName;
  return Icon;
}
