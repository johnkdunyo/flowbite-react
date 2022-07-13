import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface StarSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}
export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
    size?: keyof StarSizes;
}
export declare const Rating: FC<RatingProps> & {
    Star: FC<import("./RatingStar").RatingStarProps>;
    Advanced: FC<import("./RatingAdvanced").RatingAdvancedProps>;
};