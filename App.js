import React from "react";
import { Navigation } from "./src/infrastucture/navigation";
import ThemeProvider from "./src/infrastucture/theme/theme.provider";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </>
  );
}
