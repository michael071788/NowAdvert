import React from "react";
import { Switch, Text, View } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { SafeArea } from "../../../components/safe.area.component";
export const HomeScreen = () => {
  const theme = UsedTheme();

  return (
    <SafeArea>
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
        <Switch
          onValueChange={theme.toggleTheme}
          value={theme.isDefaultTheme}
        />
      </View>
    </SafeArea>
  );
};
