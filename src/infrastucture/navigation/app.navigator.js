import React, { useEffect } from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";
import { TestScreen } from "../../features/home/screens/test.screen";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import SignUpScreen from "../../features/registration/signup.screen";
import LoginScreen from "../../features/registration/login.screen";
import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  // const [token, setToken] = useState("");
  const userAuthInfoContext = UsedUserAuthInfoContext();

  return (
    <>
      <SafeArea>
        <AppStackNavigator.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="LoginScreen"
        >
          {userAuthInfoContext.userInfo.token ? (
            <>
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
            </>
          ) : (
            <>
              <AppStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
              />
              <AppStackNavigator.Screen
                name="SignUpScreen"
                component={SignUpScreen}
              />
            </>
          )}
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
