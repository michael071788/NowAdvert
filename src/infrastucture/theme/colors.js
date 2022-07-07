// Remember, any changes here while running the metro bundle the app will execute an error due to context provider.
// Need to exit the Metro Bundle in terminal then re-run the application

const defaultTheme = {
  PRIMARY: "#333333",
  BACKGROUND: "#f5f4f4",
  ACTIVE: "#ffffff",
  INACTIVE: "#696969",
};

const lightTheme = {
  PRIMARY: "#ffffff",
  BACKGROUND: "#f5f4f4",
  ACTIVE: "#000000",
  INACTIVE: "#696969",
};

export const colors = { defaultTheme, lightTheme };
