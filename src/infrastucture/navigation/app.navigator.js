import React, { useEffect } from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";
import { TestScreen } from "../../features/home/screens/test.screen";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import SignUp from "../../features/registration/signup.screen";
import Login from "../../features/registration/login.screen";
import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  const userAuthInfoContext = UsedUserAuthInfoContext();

  // useEffect(() => {
  //   console.log(
  //     "userAuthInfoContext.userInfo useEffect: ",
  //     userAuthInfoContext.userInfo
  //   );
  // }, [userAuthInfoContext]);

  return (
    <>
      <SafeArea>
        <AppStackNavigator.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="Login"
        >
          {userAuthInfoContext.userInfo.token ? (
            <AppStackNavigator.Screen
              name="TestScreen"
              component={TestScreen}
            />
          ) : (
            <>
              <AppStackNavigator.Screen name="Register" component={SignUp} />
              <AppStackNavigator.Screen name="Login" component={Login} />
            </>
          )}

          {/* </> */}
          {/* )} */}
          {/* <AppStackNavigator.Screen
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
          /> */}
          {/*  */}

          {/* <AppStackNavigator.Screen name="Test" component={testScreen} /> */}

          {/*  */}
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
