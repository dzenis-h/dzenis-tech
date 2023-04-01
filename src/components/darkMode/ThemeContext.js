import { createContext } from "react";

const defaultContextData = {
  dark: true,
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultContextData);

export default ThemeContext;
