import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdvertIcon from "../../../assets/advert_icon.svg";
import HomeIcon from "../../../assets/home_icon.svg";
import ProfileIcon from "../../../assets/profile_icon.svg";

import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  return {
    tabBarActiveTintColor: "#131BF5",
    tabBarInactiveTintColor: "#333333",
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      switch (route.name) {
        case "Home":
          iconName = <HomeIcon width={size} height={size} fill={color} />;
          break;

        case "Advert":
          iconName = <AdvertIcon width={size} height={size} fill={color} />;
          break;

        case "Profile":
          iconName = <ProfileIcon width={size} height={size} fill={color} />;
          break;
      }

      return iconName;
    },
    tabBarShowLabel: false,
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Advert" component={AdvertNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
