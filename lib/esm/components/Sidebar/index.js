import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import SidebarCTA from './SidebarCTA';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
const SidebarComponent = ({ children, collapseBehavior = 'collapse', collapsed: isCollapsed = false, ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.sidebar;
    return (_jsx(SidebarContext.Provider, { value: { isCollapsed }, children: _jsx("aside", { "aria-label": "Sidebar", className: classNames(theme.base, theme.collapsed[isCollapsed ? 'on' : 'off']), hidden: isCollapsed && collapseBehavior === 'hide', ...theirProps, children: _jsx("div", { className: theme.inner, children: children }) }) }));
};
SidebarComponent.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
    Collapse: SidebarCollapse,
    CTA: SidebarCTA,
    Item: SidebarItem,
    Items: SidebarItems,
    ItemGroup: SidebarItemGroup,
    Logo: SidebarLogo,
});