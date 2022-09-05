import React from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
<<<<<<< HEAD
import { HeaderBarContainer } from "../theme/styles/app.header.style";
import { UserProfileBar } from "../../features/profile/user.profile.bar";
import { UsedPrimaryAppContext } from "../../services/primary.app.provider";

const Tab = createBottomTabNavigator();
=======

const AppStackNavigator = createStackNavigator();
>>>>>>> develop

export const AppNavigator = () => {
  return (
    <>
      <SafeArea>
        <AppStackNavigator.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="AdvertScreen"
        >
          <AppStackNavigator.Screen
            name="AdvertScreen"
            component={AdvertScreen}
          />
          <AppStackNavigator.Screen
            name="AdvertVideoScreen"
            component={AdvertVideoScreen}
          />
          <AppStackNavigator.Screen
            name="Profile"
            component={ProfileNavigator}
          />
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
