import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { autoUpdate, useClick, useFloating, useFocus, useHover, useInteractions, useRole, } from '@floating-ui/react-dom-interactions';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { getArrowPlacement, getMiddleware, getPlacement } from '../../helpers/floating';
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Floating = ({ children, content, theme, animation = 'duration-300', arrow = true, placement = 'top', style = 'dark', trigger = 'hover', ...props }) => {
    const theirProps = excludeClassName(props);
    const arrowRef = useRef(null);
    const [open, setOpen] = useState(false);
    const floatingTooltip = useFloating({
        middleware: getMiddleware({ arrowRef, placement }),
        onOpenChange: setOpen,
        open,
        placement: getPlacement({ placement }),
    });
    const { context, floating, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }, reference, refs, strategy, update, x, y, } = floatingTooltip;
    const { getFloatingProps, getReferenceProps } = useInteractions([
        useClick(context, { enabled: trigger === 'click' }),
        useFocus(context),
        useHover(context, { enabled: trigger === 'hover' }),
        useRole(context, { role: 'tooltip' }),
    ]);
    useEffect(() => {
        if (refs.reference.current && refs.floating.current && open) {
            return autoUpdate(refs.reference.current, refs.floating.current, update);
        }
    }, [open, refs.floating, refs.reference, update]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: theme.target, ...getReferenceProps({ ref: reference }), "data-testid": "tooltip-target", children: children }), _jsxs("div", { "data-testid": "tooltip", ...getFloatingProps({
                    className: classNames(theme.base, animation && `${theme.animation} ${animation}`, !open && theme.hidden, theme.style[style]),
                    ref: floating,
                    style: {
                        position: strategy,
                        top: y ?? ' ',
                        left: x ?? ' ',
                    },
                    ...theirProps,
                }), children: [_jsx("div", { className: theme.content, children: content }), arrow && (_jsx("div", { className: classNames(theme.arrow.base, {
                            [theme.arrow.style.dark]: style === 'dark',
                            [theme.arrow.style.light]: style === 'light',
                            [theme.arrow.style.auto]: style === 'auto',
                        }), "data-testid": "tooltip-arrow", ref: arrowRef, style: {
                            top: arrowY ?? ' ',
                            left: arrowX ?? ' ',
                            right: ' ',
                            bottom: ' ',
                            [getArrowPlacement({ placement: floatingTooltip.placement })]: theme.arrow.placement,
                        }, children: "\u00A0" }))] })] }));
};