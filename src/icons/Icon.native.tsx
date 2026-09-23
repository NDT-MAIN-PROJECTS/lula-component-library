import type { ComponentType, ElementType } from 'react';

import { iconDefinitions, type IconName } from './catalog';
import { phosphorIcons } from './internal/phosphorIcons.native';
import type { IconProps as BaseIconProps } from './types';

export type IconProps = BaseIconProps & {
  name: IconName;
};

const Icon: ComponentType<IconProps> = ({ name, weight, accessibilityLabel, testID, ...props }) => {
  const definition = iconDefinitions[name];
  const VendorIcon: ElementType = phosphorIcons[definition.icon];

  return (
    <VendorIcon
      {...props}
      weight={weight ?? definition.weight}
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
};

Icon.displayName = 'Icon';

export default Icon;
