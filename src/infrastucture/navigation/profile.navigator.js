import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  BackHandler,
  AppState,
} from "react-native";

import EditProfile from "../../features/profile/screens/edit.screen";
import ChangePassword from "../../features/profile/screens/change.password.screen";
import LinkedAccounts from "../../features/profile/screens/linked.accounts.screen";
import UsedTheme from "../../infrastucture/theme/use.theme";
import UsedProfile from "../../services/use.user.profile";

import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../../features/profile/screens/profile.screen";

import { List, Avatar } from "react-native-paper";

import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";
import { AxiosInstance } from "../../utils";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [imageBase, setImageBase] = useState("");

  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [appState, setAppState] = useState(AppState.currentState);
  const [dateNow, setDateNow] = useState("");
  // eslint-disable-next-line no-unused-vars

  const { t } = useTranslation();

  const theme = UsedTheme();
  const contextProfile = UsedProfile();

  useEffect(() => {
    setLocation(contextProfile.currentLocation);
    setLanguage(contextProfile.currentLanguage);

    setFirstName(contextProfile.userData.firstName);
    setLastName(contextProfile.userData.lastName);

    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);
    };

    AppState.addEventListener("change", handleAppStateChange);

    let now = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let year = now.getFullYear();
    let month = months[now.getMonth()];
    let day = now.getDate();

    setDateNow(`${year} ${month} ${day}`);

    if (contextProfile.hasUserData === true) {
      if (contextProfile.hasProfile === true) {
        setImageBase(contextProfile.userData.profile_image.data);
        setLoading(false);
      }
    }
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [contextProfile]);

  const handleBackPress = () => {
    setLocation("Profile Screen");
  };
  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      // base64: true,
    });

    if (!result.cancelled) {
      try {
        await uploadImage(result);
      } catch (error) {
        console.log(error);
      }
      // setImage(result.uri);
    }
  };

  const uploadImage = async (image) => {
    const formdata = new FormData();
    formdata.append("image", {
      name: "image",
      uri: image.uri,
      type: "image/png",
    });

    await AxiosInstance.post(
      `/profile-image/${contextProfile.userData._id}`,
      formdata,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((res) => {
        contextProfile.SetUserUpdate(true);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: language === "Arabic" ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setLocation("Profile Screen");
            location === "Profile Screen"
              ? navigation.navigate("AdvertScreen")
              : navigation.navigate("ProfileScreen");
          }}
        >
          {/* <List.Icon icon="chevron-left" /> */}
          <List.Icon
            icon={
              location === "Profile Screen"
                ? "home"
                : language === "Arabic"
                ? "chevron-right"
                : "chevron-left"
            }
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: theme.typography.PRIMARY,
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          {t(location.toLocaleUpperCase())}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 180,
                  width: 180,
                  borderRadius: 180,
                }}
              >
                {loading === false ? (
                  <Image
                    source={
                      contextProfile.hasProfile === true
                        ? {
                            uri: `data:image/png;base64,${imageBase}`,
                          }
                        : require("../../../assets/avatar_profile_icon.png")
                    }
                    style={{
                      backgroundColor: "#fff",
                      height: "100%",
                      width: "100%",
                      borderRadius: 180,
                    }}
                  />
                ) : (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <ActivityIndicator size="large" color="#00C853" />
                  </View>
                )}
              </View>

              <TouchableOpacity
                onPress={openImagePicker}
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  backgroundColor: "#fff",
                  height: 40,
                  width: 40,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 3,
                  elevation: 4,
                }}
                activeOpacity={1}
              >
                <List.Icon icon="pencil" color="#000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 20,
                  textTransform: "uppercase",
                }}
              >
                {firstName} {lastName}
              </Text>
            </View>
            <Text
              style={{
                color: theme.colors.SECONDARY,
                fontFamily: theme.typography.PRIMARY,
                fontSize: 15,
                textTransform: "uppercase",
              }}
            >
              {/* active: 26 May 2022 */}
              {/* {t("ACTIVE: 26 MAY 2022")} */}
              {appState} : {dateNow}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <ProfileStack.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
          })}
        >
          <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />

          <ProfileStack.Screen
            name="EditProfileScreen"
            component={EditProfile}
          />
          <ProfileStack.Screen
            name="ChangePasswordScreen"
            component={ChangePassword}
          />
          <ProfileStack.Screen
            name="LinkedAccountsScreen"
            component={LinkedAccounts}
          />
        </ProfileStack.Navigator>
      </View>
    </View>
  );
};
