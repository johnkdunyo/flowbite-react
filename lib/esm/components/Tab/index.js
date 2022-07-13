import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Children, useEffect, useId, useMemo, useRef, useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { TabItem } from './TabItem';
export const TabsComponent = ({ children, style = 'default', ...rest }) => {
    const theme = useTheme().theme.tab;
    const theirProps = excludeClassName(rest);
    const id = useId();
    const tabs = useMemo(() => Children.map(children, ({ props }) => props), [children]);
    const tabRefs = useRef([]);
    const [activeTab, setActiveTab] = useState(Math.max(0, tabs.findIndex((tab) => tab.active)));
    const [focusedTab, setFocusedTab] = useState(Math.max(0, tabs.findIndex((tab) => tab.active)));
    const handleClick = ({ target }) => {
        setActiveTab(target);
        setFocusedTab(target);
    };
    const handleKeyboard = ({ event, target }) => {
        if (event.key === 'ArrowLeft') {
            setFocusedTab(Math.max(0, focusedTab - 1));
        }
        if (event.key === 'ArrowRight') {
            setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
        }
        if (event.key === 'Enter') {
            setActiveTab(target);
            setFocusedTab(target);
        }
    };
    useEffect(() => {
        tabRefs.current[focusedTab]?.focus();
    }, [focusedTab]);
    return (_jsxs("div", { className: theme.base, children: [_jsx("div", { "aria-label": "Tabs", role: "tablist", className: classNames(theme.tablist.base, theme.tablist.styles[style]), ...theirProps, children: tabs.map((tab, index) => (_jsxs("button", { type: "button", "aria-controls": `${id}-tabpanel-${index}`, "aria-selected": index === activeTab, className: classNames(theme.tablist.tabitem.base, theme.tablist.tabitem.styles[style], {
                        [theme.tablist.tabitem.styles[style].active.on]: index === activeTab,
                        [theme.tablist.tabitem.styles[style].active.off]: index !== activeTab && !tab.disabled,
                    }), disabled: tab.disabled, id: `${id}-tab-${index}`, onClick: () => handleClick({ target: index }), onKeyDown: (event) => handleKeyboard({ event, target: index }), ref: (element) => (tabRefs.current[index] = element), role: "tab", tabIndex: index === focusedTab ? 0 : -1, children: [tab.icon && _jsx(tab.icon, { className: theme.tablist.tabitem.icon }), tab.title] }, index))) }), _jsx("div", { children: tabs.map((tab, index) => (_jsx("div", { "aria-labelledby": `${id}-tab-${index}`, className: theme.tabpanel, hidden: index !== activeTab, id: `${id}-tabpanel-${index}`, role: "tabpanel", tabIndex: 0, children: tab.children }, index))) })] }));
};
TabsComponent.displayName = 'Tabs.Group';
TabItem.displayName = 'Tabs.Item';
export const Tabs = { Group: TabsComponent, Item: TabItem };