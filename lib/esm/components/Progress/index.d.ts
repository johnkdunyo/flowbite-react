import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface ProgressProps extends PropsWithChildren<ComponentProps<'div'>> {
    size?: keyof ProgressSizes;
    label?: string;
    labelPosition?: 'inside' | 'outside' | 'none';
    labelProgress?: boolean;
    progress: number;
}
export interface ProgressColor extends Pick<FlowbiteColors, 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'> {
    [key: string]: string;
}
export interface ProgressSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export declare const Progress: FC<ProgressProps>;
