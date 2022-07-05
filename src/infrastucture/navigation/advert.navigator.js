import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AdvertScreen } from "../../features/advert/screens/advert.screen";

const AdvertStack = createStackNavigator();

export const AdvertNavigator = () => {
  return (
    <AdvertStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <AdvertStack.Screen name="AdvertScreen" component={AdvertScreen} />
    </AdvertStack.Navigator>
  );
};
