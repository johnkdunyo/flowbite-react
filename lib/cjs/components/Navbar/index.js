"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const NavbarBrand_1 = require("./NavbarBrand");
const NavbarCollapse_1 = require("./NavbarCollapse");
const NavbarContext_1 = require("./NavbarContext");
const NavbarLink_1 = require("./NavbarLink");
const NavbarToggle_1 = require("./NavbarToggle");
;
const NavbarComponent = ({ children, menuOpen, fluid = false, rounded, border, ...props }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(menuOpen);
    const theme = (0, ThemeContext_1.useTheme)().theme.navbar;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)(NavbarContext_1.NavbarContext.Provider, { value: { isOpen, setIsOpen }, children: (0, jsx_runtime_1.jsx)("nav", { className: (0, classnames_1.default)(theme.base, theme.bordered[border ? 'on' : 'off'], theme.rounded[rounded ? 'on' : 'off']), ...theirProps, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.inner.base, theme.inner.fuild[fluid ? 'on' : 'off']), children: children }) }) }));
};
NavbarComponent.displayName = 'Navbar';
NavbarBrand_1.NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse_1.NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink_1.NavbarLink.displayName = 'Navbar.Link';
NavbarToggle_1.NavbarToggle.displayName = 'Navbar.Toggle';
exports.Navbar = Object.assign(NavbarComponent, {
    Brand: NavbarBrand_1.NavbarBrand,
    Collapse: NavbarCollapse_1.NavbarCollapse,
    Link: NavbarLink_1.NavbarLink,
    Toggle: NavbarToggle_1.NavbarToggle,
});