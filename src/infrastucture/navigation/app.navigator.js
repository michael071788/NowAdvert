import React, { useCallback, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { SafeArea } from "../../components/safe.area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
// import { HeaderBarContainer } from "../theme/styles/app.header.style";
import { UserProfileBar } from "../../features/profile/user.profile.bar";
import { UsedPrimaryAppContext } from "../../services/primary.app.provider";
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const primaryContext = UsedPrimaryAppContext();
  const isUserProfileShown = primaryContext.isShowUserProfileBar;

  const fadeAnimUserProfileBar = useRef(new Animated.Value(1)).current;

  const fadeInUserProfileBar = useCallback(() => {
    Animated.timing(fadeAnimUserProfileBar, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimUserProfileBar]);

  const fadeOutUserProfileBar = useCallback(() => {
    Animated.timing(fadeAnimUserProfileBar, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimUserProfileBar]);

  useEffect(() => {
    if (isUserProfileShown) {
      fadeInUserProfileBar();
    } else {
      fadeOutUserProfileBar();
    }
  }, [isUserProfileShown, fadeInUserProfileBar, fadeOutUserProfileBar]);

  return (
    <>
      <SafeArea>
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: isUserProfileShown ? 15 : 0,
            opacity: fadeAnimUserProfileBar,
          }}
        >
          <UserProfileBar isShown={isUserProfileShown} />
        </Animated.View>

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
