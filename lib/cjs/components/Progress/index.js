"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Progress = ({ color = 'blue', label = 'progressbar', labelPosition = 'none', labelProgress = false, progress, size = 'md', ...props }) => {
    const id = (0, react_1.useId)();
    const theme = (0, ThemeContext_1.useTheme)().theme.progress;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { id: id, "aria-label": label, "aria-valuenow": progress, role: "progressbar", ...theirProps, children: [label && labelPosition === 'outside' && ((0, jsx_runtime_1.jsxs)("div", { className: theme.label, children: [(0, jsx_runtime_1.jsx)("span", { children: label }), labelProgress && (0, jsx_runtime_1.jsxs)("span", { children: [progress, "%"] })] })), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.base, theme.size[size]), children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.bar, theme.color[color], theme.size[size]), style: { width: `${progress}%` }, children: label && labelPosition === 'inside' && label }) })] }) }));
};
exports.Progress = Progress;