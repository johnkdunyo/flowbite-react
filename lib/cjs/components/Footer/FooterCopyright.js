"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCopyright = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterCopyright = ({ href, by, year }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.copyright;
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "footer-copyright", children: (0, jsx_runtime_1.jsxs)("span", { className: theme.base, children: ["\u00A9 ", year, href ? ((0, jsx_runtime_1.jsx)("a", { href: href, className: theme.base, children: by })) : ((0, jsx_runtime_1.jsx)("span", { className: theme.span, children: by })), ". All Rights Reserved."] }) }));
};
exports.FooterCopyright = FooterCopyright;