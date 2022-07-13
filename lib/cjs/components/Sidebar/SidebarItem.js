"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const Badge_1 = require("../Badge");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Tooltip_1 = require("../Tooltip");
const SidebarContext_1 = require("./SidebarContext");
const SidebarItemContext_1 = require("./SidebarItemContext");
const SidebarItem = ({ as: Component = 'a', children, icon: Icon, active: isActive, label, labelColor = 'info', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const id = (0, react_1.useId)();
    const { isCollapsed } = (0, SidebarContext_1.useSidebarContext)();
    const { isInsideCollapse } = (0, SidebarItemContext_1.useSidebarItemContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.item;
    const Wrapper = ({ children }) => ((0, jsx_runtime_1.jsx)("li", { children: isCollapsed ? ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, { content: children, placement: "right", children: children })) : (children) }));
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsxs)(Component, { "aria-labelledby": `flowbite-sidebar-item-${id}`, className: (0, classnames_1.default)(theme.base, isActive && theme.active, !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse), ...theirProps, children: [Icon && ((0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: (0, classnames_1.default)(theme.icon.base, isActive && theme.icon.active), "data-testid": "flowbite-sidebar-item-icon" })), (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(theme.content.base, isCollapsed && theme.content.collapsed), "data-testid": "flowbite-sidebar-item-content", id: `flowbite-sidebar-item-${id}`, children: children }), label && ((0, jsx_runtime_1.jsx)(Badge_1.Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, children: label }))] }) }));
};
SidebarItem.displayName = 'Sidebar.Item';
exports.default = SidebarItem;