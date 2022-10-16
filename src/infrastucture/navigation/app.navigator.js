import React from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
// import { ProfileScreen } from "../../features/profile/screens/profile.screen";
// import EditProfile from "../../features/profile/screens/edit.screen";
// import ChangePassword from "../../features/profile/screens/change.password.screen";
// import LinkedAccounts from "../../features/profile/screens/linked.accounts.screen";
import Tickets from "../../features/profile/screens/tickets.screen";
// import SignUp from "../../features/registration/signup.screen";
// import Login from "../../features/registration/login.screen";
// import Verification from "../../features/registration/verification.screen";

const AppStackNavigator = createStackNavigator();

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
            name="ProfileNavigator"
            component={ProfileNavigator}
          />
          {/* <AppStackNavigator.Screen
            name="Profile Screen"
            component={ProfileScreen}
          /> */}

          {/* <AppStackNavigator.Screen
            name="Edit Profile"
            component={EditProfile}
          />
          <AppStackNavigator.Screen
            name="Change Password"
            component={ChangePassword}
          />
          <AppStackNavigator.Screen
            name="Linked Accounts"
            component={LinkedAccounts}
        />*/}
          <AppStackNavigator.Screen name="Tickets" component={Tickets} />
          {/* ----------------------- */}
          {/* <AppStackNavigator.Screen name="Register" component={SignUp} />
          <AppStackNavigator.Screen name="Login" component={Login} />
          <AppStackNavigator.Screen name="Verify" component={Verification} /> */}
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
