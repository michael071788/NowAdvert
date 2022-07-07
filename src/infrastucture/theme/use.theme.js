import { useContext } from "react";
import { ThemeContext } from "./theme.provider";

const UsedTheme = () => {
  return useContext(ThemeContext);
};

export default UsedTheme;
