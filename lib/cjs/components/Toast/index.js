"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ToastContext_1 = require("./ToastContext");
const ToastToggle_1 = require("./ToastToggle");
const durationClasses = {
    75: 'duration-75',
    100: 'duration-100',
    150: 'duration-150',
    200: 'duration-200',
    300: 'duration-300',
    500: 'duration-500',
    700: 'duration-700',
    1000: 'duration-1000',
};
const ToastComponent = ({ children, duration = 300, ...props }) => {
    const [isClosed, setIsClosed] = (0, react_1.useState)(false);
    const [isRemoved, setIsRemoved] = (0, react_1.useState)(false);
    const theme = (0, ThemeContext_1.useTheme)().theme.toast;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)(ToastContext_1.ToastContext.Provider, { value: { duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: (0, jsx_runtime_1.jsx)("div", { "data-testid": "toast-element", className: (0, classnames_1.default)(theme.base, durationClasses[duration], { [theme.closed]: isClosed }, { [theme.removed]: isRemoved }), ...theirProps, children: children }) }));
};
ToastComponent.displayName = 'Toast';
ToastToggle_1.ToastToggle.displayName = 'Toast.Toggle';
exports.Toast = Object.assign(ToastComponent, {
    Toggle: ToastToggle_1.ToastToggle,
});