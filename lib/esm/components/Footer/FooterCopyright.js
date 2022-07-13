import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterCopyright = ({ href, by, year }) => {
    const theme = useTheme().theme.footer.copyright;
    return (_jsx("div", { "data-testid": "footer-copyright", children: _jsxs("span", { className: theme.base, children: ["\u00A9 ", year, href ? (_jsx("a", { href: href, className: theme.base, children: by })) : (_jsx("span", { className: theme.span, children: by })), ". All Rights Reserved."] }) }));
};