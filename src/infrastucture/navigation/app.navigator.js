import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdvertIcon from "../../../assets/advert_icon.svg";
import HomeIcon from "../../../assets/home_icon.svg";
import ProfileIcon from "../../../assets/profile_icon.svg";

import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

import UsedTheme from "../theme/use.theme";

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const theme = UsedTheme();

  return {
    tabBarActiveTintColor: theme.colors.ACTIVE,
    tabBarInactiveTintColor: theme.colors.INACTIVE,
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
    tabBarStyle: {
      position: "absolute",
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: 50,
      height: 45,
    },
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Advert" component={AdvertNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
