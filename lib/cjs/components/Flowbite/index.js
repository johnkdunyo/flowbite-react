"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flowbite = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const mergeDeep_1 = require("../../helpers/mergeDeep");
const window_exists_1 = __importDefault(require("../../helpers/window-exists"));
const default_1 = __importDefault(require("../../theme/default"));
const ThemeContext_1 = require("./ThemeContext");
const Flowbite = ({ children, theme = {} }) => {
    const { theme: customTheme = {}, dark, usePreferences = true } = theme;
    const [mode, setMode, toggleMode] = (0, ThemeContext_1.useThemeMode)(usePreferences);
    const mergedTheme = (0, mergeDeep_1.mergeDeep)(default_1.default, customTheme);
    (0, react_1.useEffect)(() => {
        if (dark) {
            if (setMode != null) {
                setMode('dark');
            }
            if ((0, window_exists_1.default)()) {
                document.documentElement.classList.add('dark');
            }
        }
    }, [dark, setMode]);
    const themeContextValue = (0, react_1.useMemo)(() => ({
        theme: mergedTheme,
        mode,
        toggleMode,
    }), [mode, toggleMode, mergedTheme]);
    return (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeContext.Provider, { value: themeContextValue, children: children });
};
exports.Flowbite = Flowbite;