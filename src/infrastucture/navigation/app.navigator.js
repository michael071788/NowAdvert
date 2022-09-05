import React from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import { HeaderBarContainer } from "../theme/styles/app.header.style";
import { UserProfileBar } from "../../features/profile/user.profile.bar";
import { UsedPrimaryAppContext } from "../../services/primary.app.provider";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const primaryContext = UsedPrimaryAppContext();
  const isUserProfileShown = primaryContext.isShowUserProfileBar;

  return (
    <>
      <SafeArea>
        <HeaderBarContainer
          style={{
            padding: isUserProfileShown ? 15 : 0,
            justifyContent: isUserProfileShown ? "flex-end" : "flex-start",
          }}
        >
          <UserProfileBar isShown={isUserProfileShown} />
        </HeaderBarContainer>

        <Tab.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="Advert"
        >
          <Tab.Screen name="Advert" component={AdvertNavigator} />
          <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
      </SafeArea>
    </>
  );
};
