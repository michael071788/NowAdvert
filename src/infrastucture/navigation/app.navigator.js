import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Advert: "videocam-outline",
  Profile: "person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Advert" component={AdvertNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
