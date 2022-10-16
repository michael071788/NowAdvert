import "./src/utils/ignoreWarnings.js";
import React from "react";
import {
  useFonts as useOswald,
  // Oswald_200ExtraLight,
  // Oswald_300Light,
  // Oswald_400Regular,
  Oswald_500Medium,
  // Oswald_600SemiBold,
  // Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { Navigation } from "./src/infrastucture/navigation";

import ThemeProvider from "./src/infrastucture/theme/theme.provider";
import PrimaryAppProvider from "./src/services/primary.app.provider";
import UserProfileProvider from "./src/services/user.profile.provider";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_500Medium,
  });

  if (!oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <PrimaryAppProvider>
          <UserProfileProvider>
            <Navigation />
          </UserProfileProvider>
        </PrimaryAppProvider>
      </ThemeProvider>
    </>
  );
}
