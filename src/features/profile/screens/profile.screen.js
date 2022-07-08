import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../components/safe.area.component";

export const ProfileScreen = () => {
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text>Profile Screen</Text>
      </View>
    </SafeArea>
  );
};
