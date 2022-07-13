import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
export interface SidebarCTAProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'color'>> {
    color?: keyof SidebarCTAColors;
}
export interface SidebarCTAColors extends Pick<FlowbiteColors, 'blue' | 'dark' | 'failure' | 'gray' | 'green' | 'light' | 'purple' | 'red' | 'success' | 'warning' | 'yellow'> {
    [key: string]: string;
}
declare const SidebarCTA: FC<SidebarCTAProps>;
export default SidebarCTA;