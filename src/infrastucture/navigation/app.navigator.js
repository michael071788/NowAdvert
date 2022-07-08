import React from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import { UserProfileBar } from "../../features/profile/user.profile.bar";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <>
      <SafeArea>
        <UserProfileBar />
        <Tab.Navigator screenOptions={appNavigatorScreenOptions}>
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Advert" component={AdvertNavigator} />
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
      </SafeArea>
    </>
  );
};
