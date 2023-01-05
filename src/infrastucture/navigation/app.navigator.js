import React, { useEffect, useState } from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileNavigator } from "./profile.navigator";
import { AdvertScreen } from "../../features/advert/screens/advert.screen";
import { AdvertVideoScreen } from "../../features/advert/screens/advert.video.screen";
import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";

import SignUpScreen from "../../features/registration/signup.screen";
import LoginScreen from "../../features/registration/login.screen";
import Tickets from "../../features/profile/screens/tickets.screen";
import LanguageScreen from "../../features/profile/screens/languages.screen";
import VerificationScreen from "../../features/registration/verification.screen";

import UsedProfile from "../../services/use.user.profile";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "../../utils";
import { Buffer } from "buffer";
import { TestScreen } from "../../features/home/screens/test.screen";

const AppStackNavigator = createStackNavigator();

export const AppNavigator = () => {
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextProfile = UsedProfile();

  useEffect(() => {
    AsyncStorage.getItem("islogged").then((value) => {
      const islogged = JSON.parse(value);
      if (islogged === true) {
        setIsLoggedIn(true);
        if (userId === "" || userId === undefined) {
          AsyncStorage.getItem("userData").then((value) => {
            const jsonData = JSON.parse(value);
            contextProfile.SetUserData(jsonData.user);
            setUserId(contextProfile.userData._id);
          });
        }
      }
    });
  }, [contextProfile, isLoggedIn]);

  useEffect(() => {
    if (userId !== "") {
      getUser();
    }
  }, [userId]);

  useEffect(() => {
    if (contextProfile.userUpdate === true) {
      getUser();
      // AsyncStorage.setItem("userData", JSON.stringify(contextProfile.userData));
    }
  }, [contextProfile.userUpdate]);

  const getUser = async () => {
    await AxiosInstance.get(`/api/users/${contextProfile.userData._id}`)
      .then((res) => {
        contextProfile.SetHasUserData(true);
        contextProfile.SetUserData(res.data);
        contextProfile.SetHasProfile(res.data.hasProfile);
        if (contextProfile.hasProfile === true) {
          if (Array.isArray(contextProfile.userData.profile_image.data)) {
            const imageBuffer = Buffer.from(
              contextProfile.userData.profile_image.data
            );
            contextProfile.userData.profile_image.data =
              imageBuffer.toString("base64");
          }
        }
        // if (contextProfile.userUpdate === true) {
        //   AsyncStorage.setItem("userData", JSON.stringify(res.data));
        // }

        contextProfile.SetUserUpdate(false);
      })
      .catch((err) => {
        console.log("err app", err);
      });
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

          <AppStackNavigator.Screen name="TestScreen" component={TestScreen} />

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
