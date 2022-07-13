"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const react_indiana_drag_scroll_1 = __importDefault(require("react-indiana-drag-scroll"));
const exclude_1 = require("../../helpers/exclude");
const window_exists_1 = __importDefault(require("../../helpers/window-exists"));
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Carousel = ({ children, indicators = true, leftControl, rightControl, slide = true, slideInterval, ...props }) => {
    const isDeviceMobile = (0, window_exists_1.default)() && navigator.userAgent.indexOf('IEMobile') !== -1;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const carouselContainer = (0, react_1.useRef)(null);
    const [activeItem, setActiveItem] = (0, react_1.useState)(0);
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const theme = (0, ThemeContext_1.useTheme)().theme.carousel;
    const items = (0, react_1.useMemo)(() => react_1.Children.map(children, (child) => (0, react_1.cloneElement)(child, {
        className: (0, classnames_1.default)(theme.item.base, child.props.className),
    })), [children, theme.item.base]);
    const navigateTo = (0, react_1.useCallback)((item) => () => {
        item = (item + items.length) % items.length;
        if (carouselContainer.current) {
            carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
        }
        setActiveItem(item);
    }, [items.length]);
    (0, react_1.useEffect)(() => {
        if (carouselContainer.current && !isDragging) {
            setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
        }
    }, [isDragging]);
    (0, react_1.useEffect)(() => {
        if (slide) {
            const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);
            return () => clearInterval(intervalId);
        }
    }, [activeItem, isDragging, navigateTo, slide, slideInterval]);
    const handleDragging = (dragging) => () => setIsDragging(dragging);
    return ((0, jsx_runtime_1.jsxs)("div", { className: theme.base, "data-testid": "carousel", ...theirProps, children: [(0, jsx_runtime_1.jsx)(react_indiana_drag_scroll_1.default, { className: (0, classnames_1.default)(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap), draggingClassName: "cursor-grab", innerRef: carouselContainer, onEndScroll: handleDragging(false), onStartScroll: handleDragging(true), vertical: false, children: items?.map((item, index) => ((0, jsx_runtime_1.jsx)("div", { className: theme.item.wrapper, "data-active": activeItem === index, "data-testid": "carousel-item", children: item }, index))) }), indicators && ((0, jsx_runtime_1.jsx)("div", { className: theme.indicators.wrapper, children: items.map((_, index) => ((0, jsx_runtime_1.jsx)("button", { className: (0, classnames_1.default)(theme.indicators.base, theme.indicators.active[index === activeItem ? 'on' : 'off']), onClick: navigateTo(index), "data-testid": "carousel-indicator" }, index))) })), (0, jsx_runtime_1.jsx)("div", { className: theme.leftControl, children: (0, jsx_runtime_1.jsx)("button", { className: "group", "data-testid": "carousel-left-control", onClick: navigateTo(activeItem - 1), type: "button", children: leftControl ? leftControl : (0, jsx_runtime_1.jsx)(DefaultLeftControl, {}) }) }), (0, jsx_runtime_1.jsx)("div", { className: theme.rightControl, children: (0, jsx_runtime_1.jsx)("button", { className: "group", "data-testid": "carousel-right-control", onClick: navigateTo(activeItem + 1), type: "button", children: rightControl ? rightControl : (0, jsx_runtime_1.jsx)(DefaultRightControl, {}) }) })] }));
};
exports.Carousel = Carousel;
const DefaultLeftControl = () => {
    const theme = (0, ThemeContext_1.useTheme)().theme.carousel;
    return ((0, jsx_runtime_1.jsx)("span", { className: theme.control.base, children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineChevronLeft, { className: theme.control.icon }) }));
};
const DefaultRightControl = () => {
    const theme = (0, ThemeContext_1.useTheme)().theme.carousel;
    return ((0, jsx_runtime_1.jsx)("span", { className: theme.control.base, children: (0, jsx_runtime_1.jsx)(hi_1.HiOutlineChevronRight, { className: theme.control.icon }) }));
};