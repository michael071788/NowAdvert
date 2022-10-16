// Remember, any changes here while running the metro bundle the app will execute an error due to context .
// Need to exit the Metro Bundle in terminal then re-run the application

const defaultTheme = {
  PRIMARY: "#333333",
  SECONDARY: "#cccccc",
  TERTIARY: "#efefef",
  BACKGROUND: "#ffffff",
  ACTIVE: "#ffffff",
  INACTIVE: "#696969",
};

const lightTheme = {
  PRIMARY: "#ffffff",
  SECONDARY: "#cccccc",
  TERTIARY: "#efefef",
  BACKGROUND: "#f5f4f4",
  ACTIVE: "#000000",
  INACTIVE: "#696969",
};

export const colors = { defaultTheme, lightTheme };
