import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import EditProfile from "../../features/profile/screens/edit.screen";
import ChangePassword from "../../features/profile/screens/change.password.screen";
import LinkedAccounts from "../../features/profile/screens/linked.accounts.screen";
// import Tickets from "../../features/profile/screens/tickets.screen";
import UsedTheme from "../../infrastucture/theme/use.theme";
import UsedProfile from "../../services/use.user.profile";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../../features/profile/screens/profile.screen";

import { List, Avatar } from "react-native-paper";

import { useTranslation } from "react-i18next";
import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";
import * as ImagePicker from "expo-image-picker";
import { AxiosInstance } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const { t } = useTranslation();

  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const userAuthInfoContext = UsedUserAuthInfoContext();

  // contextProfile.SetCurrentLocation("");

  useEffect(() => {
    // contextProfile.SetCurrentLocation("ProfileScreen");
    setLocation(contextProfile.currentLocation);
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  useEffect(() => {
    AsyncStorage.getItem("userData").then((value) => {
      const jsonData = JSON.parse(value);
      setFirstName(jsonData.user.firstName);
      setLastName(jsonData.user.lastName);
      console.log(jsonData.user._id);
    });
  }, []);
  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      try {
        await pickImage(result);
      } catch (error) {
        console.log(error);
      }
      setImage(result.uri);
    }
  };

  const pickImage = async (image) => {
    const formdata = new FormData();
    // formdata.append("image", imageUpload);
    formdata.append("image", {
      // name: new Date() + "_profile",
      name: "image",
      uri: image.uri,
      type: "image/jpg",
    });

    await AxiosInstance.post(
      "/profile-image/638914e1422868eaa0112a06",
      // "/upload",
      formdata,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then((res) => {
        // then print response status
        console.log(res);
        console.log("Uploaded");
      })
      .catch((err) => {
        console.log("err, ", err);
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
              {/* <Avatar.Image
                size={180}
                source={
                  image
                    ? image
                    : require("../../../assets/avatar_profile_icon.png")
                }
                style={{ backgroundColor: "#fff", elevation: 1 }}
              /> */}
              <Image
                // size={180}
                source={{
                  uri: image
                    ? image
                    : "../../../assets/avatar_profile_icon.png",
                }}
                style={{
                  backgroundColor: "#fff",
                  height: 180,
                  width: 180,
                  borderRadius: 180,
                }}
              />
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
            {/* <Image
              source={require("../../../assets/avatar_profile_icon.png")}
              style={{ height: 180, width: 180 }}
            /> */}
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
                {/* {userAuthInfoContext.userInfo.user.name} */}
                {/* {userAuthInfoContext.userInfo.user.lastName} */}
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
              {t("ACTIVE: 26 MAY 2022")}
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

          <ProfileStack.Screen name="Edit Profile" component={EditProfile} />
          <ProfileStack.Screen
            name="Change Password"
            component={ChangePassword}
          />
          <ProfileStack.Screen
            name="Linked Accounts"
            component={LinkedAccounts}
          />
          {/* <ProfileStack.Screen name="Tickets" component={Tickets} /> */}
        </ProfileStack.Navigator>
      </View>
    </View>
  );
};
