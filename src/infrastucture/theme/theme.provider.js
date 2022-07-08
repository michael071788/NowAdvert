import React, { useState } from "react";
import { colors } from "./colors";
import { typography } from "./typography";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [isDefaultTheme, setDefaultTheme] = useState(true);
  const toggleTheme = () => setDefaultTheme((previousState) => !previousState);

  const theme = {
    colors: isDefaultTheme ? colors.defaultTheme : colors.lightTheme,
    typography,
    toggleTheme,
    isDefaultTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
