import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={appNavigatorScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Advert" component={AdvertNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
