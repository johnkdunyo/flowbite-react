"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ModalContext_1 = require("./ModalContext");
const ModalHeader = ({ children, ...props }) => {
    const { popup, onClose } = (0, ModalContext_1.useModalContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.modal.header;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(theme.base, {
            [theme.popup]: popup,
        }), ...theirProps, children: [(0, jsx_runtime_1.jsx)("h3", { className: theme.title, children: children }), (0, jsx_runtime_1.jsx)("button", { "aria-label": "Close", className: theme.close.base, type: "button", onClick: onClose, children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineX, { "aria-hidden": true, className: theme.close.icon }) })] }));
};
exports.ModalHeader = ModalHeader;