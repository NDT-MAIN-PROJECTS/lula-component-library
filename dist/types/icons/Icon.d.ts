import type { ComponentType } from 'react';
import { type IconName } from './catalog';
import type { IconProps as BaseIconProps } from './types';
export type IconProps = BaseIconProps & {
    name: IconName;
};
declare const Icon: ComponentType<IconProps>;
export default Icon;
