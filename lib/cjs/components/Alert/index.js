"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Alert = ({ additionalContent, children, color = 'info', icon: Icon, onDismiss, rounded = true, withBorderAccent, }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.alert;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(theme.base, theme.color[color], rounded && theme.rounded, withBorderAccent && theme.borderAccent), role: "alert", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { className: theme.icon }), (0, jsx_runtime_1.jsx)("div", { children: children }), typeof onDismiss === 'function' && ((0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.default)(theme.closeButton.base, theme.closeButton.color[color]), "data-testid": "alert-dismiss", onClick: onDismiss, type: "button", children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" }), (0, jsx_runtime_1.jsx)(hi_1.HiX, { "aria-hidden": "true", className: "h-5 w-5" })] }))] }), additionalContent && (0, jsx_runtime_1.jsx)("div", { children: additionalContent })] }));
};
exports.Alert = Alert;