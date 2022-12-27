import React, { useEffect, useState } from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";
// import { TestScreen } from "../../features/home/screens/test.screen";
import TestScreenMock from "../../features/profile/screens/testScreen";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import SignUpScreen from "../../features/registration/signup.screen";
import LoginScreen from "../../features/registration/login.screen";
import Tickets from "../../features/profile/screens/tickets.screen";
import LanguageScreen from "../../features/profile/screens/languages.screen";
import VerificationScreen from "../../features/registration/verification.screen";

import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsedProfile from "../../services/use.user.profile";
import { AxiosInstance } from "../../utils";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  const [userId, setUserId] = useState("");

  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  // useEffect(() => {
  //   if (userId === "") {
  //     AsyncStorage.getItem("userData").then((value) => {
  //       const jsonData = JSON.parse(value);
  //       contextProfile.SetUserData(jsonData.user);
  //       setUserId(contextProfile.userData._id);
  //     });
  //   }
  // }, [contextProfile]);

  // useEffect(() => {
  //   if (userId !== "") {
  //     getUser();
  //   }
  // }, [userId]);

  // const getUser = async () => {
  //   await AxiosInstance.get(`/user/${contextProfile.userData._id}`)
  //     .then((res) => {
  //       contextProfile.SetUserData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  return (
    <>
      <SafeArea>
        <AppStackNavigator.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="LoginScreen"
        >
          {/* {userAuthInfoContext.userInfo.token ? ( */}
          {/* {token !== null ? ( */}
          {/* {isLoggedIn === true ? (
            <> */}
          {/* <AppStackNavigator.Screen
            name="TestScreenMock"
            component={TestScreenMock}
          /> */}

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
          <AppStackNavigator.Screen name="TicketsScreen" component={Tickets} />
          <AppStackNavigator.Screen
            name="LanguagesScreen"
            component={LanguageScreen}
          />
          {/* </>
          ) : (
            <> */}
          <AppStackNavigator.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <AppStackNavigator.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <AppStackNavigator.Screen
            name="VerificationScreen"
            component={VerificationScreen}
          />
          {/* </>
          )} */}
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
