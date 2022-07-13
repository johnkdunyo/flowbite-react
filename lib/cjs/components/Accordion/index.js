"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const AccordionContent_1 = require("./AccordionContent");
const AccordionPanel_1 = require("./AccordionPanel");
const AccordionTitle_1 = require("./AccordionTitle");
const AccordionComponent = ({ alwaysOpen = false, arrowIcon = hi_1.HiChevronDown, children, flush = false, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const [isOpen, setOpen] = (0, react_1.useState)(0);
    const panels = (0, react_1.useMemo)(() => react_1.Children.map(children, (child, i) => (0, react_1.cloneElement)(child, { alwaysOpen, arrowIcon, flush, isOpen: isOpen === i, setOpen: () => setOpen(i) })), [alwaysOpen, arrowIcon, children, flush, isOpen]);
    const theme = (0, ThemeContext_1.useTheme)().theme.accordion;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.base, theme.flush[flush ? 'on' : 'off']), "data-testid": "flowbite-accordion", ...theirProps, children: panels }));
};
AccordionComponent.displayName = 'Accordion';
AccordionPanel_1.AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle_1.AccordionTitle.displayName = 'Accordion.Title';
AccordionContent_1.AccordionContent.displayName = 'Accordion.Content';
exports.Accordion = Object.assign(AccordionComponent, {
    Panel: AccordionPanel_1.AccordionPanel,
    Title: AccordionTitle_1.AccordionTitle,
    Content: AccordionContent_1.AccordionContent,
});