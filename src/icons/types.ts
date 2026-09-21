import type { ComponentType } from 'react';

export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

/** Platform-neutral icon properties owned by this package. */
export type IconProps = {
  size?: number;
  color?: string;
  weight?: IconWeight;
  mirrored?: boolean;
  accessibilityLabel?: string;
  testID?: string;
};

export type IconComponent = ComponentType<IconProps>;
