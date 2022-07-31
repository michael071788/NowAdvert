import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";

const AdvertStack = createStackNavigator();

export const AdvertNavigator = () => {
  return (
    <AdvertStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      initialRouteName="AdvertScreen"
    >
      <AdvertStack.Screen name="AdvertScreen" component={AdvertScreen} />
      <AdvertStack.Screen
        name="AdvertVideoScreen"
        component={AdvertVideoScreen}
      />
    </AdvertStack.Navigator>
  );
};
