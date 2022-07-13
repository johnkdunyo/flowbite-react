"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Floating = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const floating_1 = require("../../helpers/floating");
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
const Floating = ({ children, content, theme, animation = 'duration-300', arrow = true, placement = 'top', style = 'dark', trigger = 'hover', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const arrowRef = (0, react_1.useRef)(null);
    const [open, setOpen] = (0, react_1.useState)(false);
    const floatingTooltip = (0, react_dom_interactions_1.useFloating)({
        middleware: (0, floating_1.getMiddleware)({ arrowRef, placement }),
        onOpenChange: setOpen,
        open,
        placement: (0, floating_1.getPlacement)({ placement }),
    });
    const { context, floating, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }, reference, refs, strategy, update, x, y, } = floatingTooltip;
    const { getFloatingProps, getReferenceProps } = (0, react_dom_interactions_1.useInteractions)([
        (0, react_dom_interactions_1.useClick)(context, { enabled: trigger === 'click' }),
        (0, react_dom_interactions_1.useFocus)(context),
        (0, react_dom_interactions_1.useHover)(context, { enabled: trigger === 'hover' }),
        (0, react_dom_interactions_1.useRole)(context, { role: 'tooltip' }),
    ]);
    (0, react_1.useEffect)(() => {
        if (refs.reference.current && refs.floating.current && open) {
            return (0, react_dom_interactions_1.autoUpdate)(refs.reference.current, refs.floating.current, update);
        }
    }, [open, refs.floating, refs.reference, update]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: theme.target, ...getReferenceProps({ ref: reference }), "data-testid": "tooltip-target", children: children }), (0, jsx_runtime_1.jsxs)("div", { "data-testid": "tooltip", ...getFloatingProps({
                    className: (0, classnames_1.default)(theme.base, animation && `${theme.animation} ${animation}`, !open && theme.hidden, theme.style[style]),
                    ref: floating,
                    style: {
                        position: strategy,
                        top: y ?? ' ',
                        left: x ?? ' ',
                    },
                    ...theirProps,
                }), children: [(0, jsx_runtime_1.jsx)("div", { className: theme.content, children: content }), arrow && ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.arrow.base, {
                            [theme.arrow.style.dark]: style === 'dark',
                            [theme.arrow.style.light]: style === 'light',
                            [theme.arrow.style.auto]: style === 'auto',
                        }), "data-testid": "tooltip-arrow", ref: arrowRef, style: {
                            top: arrowY ?? ' ',
                            left: arrowX ?? ' ',
                            right: ' ',
                            bottom: ' ',
                            [(0, floating_1.getArrowPlacement)({ placement: floatingTooltip.placement })]: theme.arrow.placement,
                        }, children: "\u00A0" }))] })] }));
};
exports.Floating = Floating;