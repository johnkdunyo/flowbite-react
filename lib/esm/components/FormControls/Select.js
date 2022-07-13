import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';
;
export const Select = forwardRef(({ children, sizing = 'md', shadow, helperText, addon, icon: Icon, color = 'gray', ...props }, ref) => {
    const theme = useTheme().theme.formControls.select;
    const theirProps = excludeClassName(props);
    return (_jsxs("div", { className: theme.base, children: [addon && (_jsx("span", { className: theme.addon, children: addon })), _jsxs("div", { className: theme.field.base, children: [Icon && (_jsx("div", { className: theme.field.icon.base, children: _jsx(Icon, { className: theme.field.icon.svg }) })), _jsx("select", { className: classNames(theme.field.select.base, theme.field.select.colors[color], theme.field.select.withIcon[Icon ? 'on' : 'off'], theme.field.select.withAddon[addon ? 'on' : 'off'], theme.field.select.withShadow[shadow ? 'on' : 'off'], theme.field.select.sizes[sizing]), ...theirProps, ref: ref, children: children }), helperText && _jsx(HelperText, { color: color, children: helperText })] })] }));
});