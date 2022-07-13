"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleSwitch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ToggleSwitch = ({ checked, disabled, label, name, onChange, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.formControls.toggleSwitch;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const id = (0, react_1.useId)();
    const toggle = () => onChange(!checked);
    const handleClick = (event) => {
        event.preventDefault();
        toggle();
    };
    const handleKeyPress = (event) => {
        event.preventDefault();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [name && checked && (0, jsx_runtime_1.jsx)("input", { checked: checked, hidden: true, name: name, readOnly: true, type: "checkbox", className: "sr-only" }), (0, jsx_runtime_1.jsxs)("button", { "aria-checked": checked, "aria-labelledby": `${id}-flowbite-toggleswitch-label`, disabled: disabled, id: `${id}-flowbite-toggleswitch`, onClick: handleClick, onKeyPress: handleKeyPress, role: "switch", tabIndex: 0, type: "button", className: (0, classnames_1.default)(theme.base, theme.active[disabled ? 'off' : 'on']), ...theirProps, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.toggle.base, theme.toggle.checked[checked ? 'on' : 'off']) }), (0, jsx_runtime_1.jsx)("span", { "data-testid": "flowbite-toggleswitch-label", id: `${id}-flowbite-toggleswitch-label`, className: theme.label, children: label })] })] }));
};
exports.ToggleSwitch = ToggleSwitch;