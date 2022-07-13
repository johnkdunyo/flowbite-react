import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const ToggleSwitch = ({ checked, disabled, label, name, onChange, ...props }) => {
    const theme = useTheme().theme.formControls.toggleSwitch;
    const theirProps = excludeClassName(props);
    const id = useId();
    const toggle = () => onChange(!checked);
    const handleClick = (event) => {
        event.preventDefault();
        toggle();
    };
    const handleKeyPress = (event) => {
        event.preventDefault();
    };
    return (_jsxs(_Fragment, { children: [name && checked && _jsx("input", { checked: checked, hidden: true, name: name, readOnly: true, type: "checkbox", className: "sr-only" }), _jsxs("button", { "aria-checked": checked, "aria-labelledby": `${id}-flowbite-toggleswitch-label`, disabled: disabled, id: `${id}-flowbite-toggleswitch`, onClick: handleClick, onKeyPress: handleKeyPress, role: "switch", tabIndex: 0, type: "button", className: classNames(theme.base, theme.active[disabled ? 'off' : 'on']), ...theirProps, children: [_jsx("div", { className: classNames(theme.toggle.base, theme.toggle.checked[checked ? 'on' : 'off']) }), _jsx("span", { "data-testid": "flowbite-toggleswitch-label", id: `${id}-flowbite-toggleswitch-label`, className: theme.label, children: label })] })] }));
};