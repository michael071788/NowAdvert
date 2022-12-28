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
import { Buffer } from "buffer";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  useEffect(() => {
    AsyncStorage.getItem("islogged").then((value) => {
      const islogged = JSON.parse(value);
      console.log("islogged ", islogged);
      if (islogged === true) {
        setIsLoggedIn(true);
        console.log("user", userId);
        if (userId === "" || userId === undefined) {
          AsyncStorage.getItem("userData").then((value) => {
            const jsonData = JSON.parse(value);
            contextProfile.SetUserData(jsonData.user);
            setUserId(contextProfile.userData._id);
          });
        }
      }
    });
  }, [isLoggedIn, contextProfile]);

  useEffect(() => {
    if (userId !== "") {
      getUser();
    }
  }, [userId]);

  const getUser = async () => {
    await AxiosInstance.get(`/api/users/${contextProfile.userData._id}`)
      .then((res) => {
        const imageBuffer = Buffer.from(res.data.profile_image.data.data);
        res.data.profile_image.data.data = imageBuffer.toString("base64");

        // if (contextProfile.userData.profile_image.data.data === undefined) {
        contextProfile.SetUserData(res.data);
        // }
        // console.log("image ", contextProfile.userData);
      })
      .catch((err) => {
        console.log("err app", err);
      });
  };

  const getImage = async () => {
    await AxiosInstance.get(
      `/api/users/profile-image/${contextProfile.userData._id}`
    )
      .then((res) => {
        const imageBuffer = Buffer.from(res.data.data);
        const imageBase64 = imageBuffer.toString("base64");
        // setImageBase(imageBase64);
        // contextProfile.SetUserProfileImage(imageBase64);
      })
      .catch((err) => console.log("err ", err));
  };

  return (
    <>
      <SafeArea>
        <AppStackNavigator.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="LoginScreen"
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
          <AppStackNavigator.Screen name="TicketsScreen" component={Tickets} />
          <AppStackNavigator.Screen
            name="LanguagesScreen"
            component={LanguageScreen}
          />

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
        </AppStackNavigator.Navigator>
      </SafeArea>
    </>
  );
};
