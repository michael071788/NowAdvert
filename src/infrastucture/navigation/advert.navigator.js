import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";
import Login from "../../features/registration/login.screen";
import SignUp from "../../features/registration/signup.screen";

const AdvertStack = createStackNavigator();

export const AdvertNavigator = () => {
  return (
    <AdvertStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      initialRouteName="Login"
    >
      <AdvertStack.Screen name="AdvertScreen" component={AdvertScreen} />
      <AdvertStack.Screen
        name="AdvertVideoScreen"
        component={AdvertVideoScreen}
      />
      {/* login */}
      <AdvertStack.Screen name="Login" component={Login} />
      {/* sign up */}
      <AdvertStack.Screen name="SignUp" component={SignUp} />
    </AdvertStack.Navigator>
  );
};
