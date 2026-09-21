import type { ElementType } from 'react';

import type { IconComponent } from '../types';

export function createNativeIcon(VendorIcon: ElementType, displayName: string): IconComponent {
  const Icon: IconComponent = ({ accessibilityLabel, testID, ...props }) => (
    <VendorIcon
      {...props}
      {...(accessibilityLabel
        ? {
            accessible: true,
            accessibilityLabel,
            accessibilityRole: 'image',
          }
        : {
            accessible: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: 'no-hide-descendants',
          })}
      {...(testID ? { testID } : {})}
    />
  );

  Icon.displayName = displayName;
  return Icon;
}
