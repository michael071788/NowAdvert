import React from "react";
import { Switch, Text, View } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";

export const HomeScreen = () => {
  const theme = UsedTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.BACKGROUND,
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>Home Screen</Text>
      <Switch onValueChange={theme.toggleTheme} value={theme.isDefaultTheme} />
    </View>
  );
};
