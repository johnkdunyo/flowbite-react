"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.FooterComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterBrand_1 = require("./FooterBrand");
const FooterCopyright_1 = require("./FooterCopyright");
const FooterDivider_1 = require("./FooterDivider");
const FooterIcon_1 = require("./FooterIcon");
const FooterLink_1 = require("./FooterLink");
const FooterLinkGroup_1 = require("./FooterLinkGroup");
const FooterTitle_1 = require("./FooterTitle");
const FooterComponent = ({ children, bgDark = false, container = false }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer;
    return ((0, jsx_runtime_1.jsx)("footer", { "data-testid": "footer-element", className: (0, classnames_1.default)(theme.base, bgDark && theme.bgDark, container && theme.container), children: children }));
};
exports.FooterComponent = FooterComponent;
exports.FooterComponent.displayName = 'Footer';
FooterCopyright_1.FooterCopyright.displayName = 'Footer.Copyright';
FooterLink_1.FooterLink.displayName = 'Footer.Link';
FooterBrand_1.FooterBrand.displayName = 'Footer.Brand';
FooterLinkGroup_1.FooterLinkGroup.displayName = 'Footer.LinkGroup';
FooterIcon_1.FooterIcon.displayName = 'Footer.Icon';
FooterTitle_1.FooterTitle.displayName = 'Footer.Title';
FooterDivider_1.FooterDivider.displayName = 'Footer.Divider';
exports.Footer = Object.assign(exports.FooterComponent, {
    Copyright: FooterCopyright_1.FooterCopyright,
    Link: FooterLink_1.FooterLink,
    LinkGroup: FooterLinkGroup_1.FooterLinkGroup,
    Brand: FooterBrand_1.FooterBrand,
    Icon: FooterIcon_1.FooterIcon,
    Title: FooterTitle_1.FooterTitle,
    Divider: FooterDivider_1.FooterDivider,
});