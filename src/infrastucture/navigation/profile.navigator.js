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
import UsedCount from "../../services/counts.user";
// import { Buffer } from "buffer";

// import utf8 from "utf8";
// import base64 from "base-64";
// import binaryToBase64 from "binary-base64";
import { Buffer } from "buffer";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [userId, setUserId] = useState("");
  const [imageBase, setImageBase] = useState("");
  const [hasProfileImage, setHasProfileImage] = useState(false);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const { t } = useTranslation();

  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const userAuthInfoContext = UsedUserAuthInfoContext();
  const countViewContext = UsedCount();

  // contextProfile.SetCurrentLocation("");

  // useEffect(() => {
  //   console.log("prof nav ", contextProfile.userData._id);
  // }, []);
  useEffect(() => {
    // contextProfile.SetCurrentLocation("ProfileScreen");
    setLocation(contextProfile.currentLocation);
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

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
      type: "image/jpg",
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
        console.log("success");
        setHasProfileImage(true);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  };

  // const getImage = async () => {
  //   console.log("get image");
  //   console.log("id ", contextProfile.userData._id);
  //   await AxiosInstance.get(
  //     `/api/users/profile-image/${contextProfile.userData._id}`
  //   )
  //     .then((res) => {
  //       const imageBuffer = Buffer.from(res.data.data);
  //       const imageBase64 = imageBuffer.toString("base64");
  //       setHasProfileImage(true);
  //     })
  //     .catch((err) => console.log("err profile ", err));
  // };
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
              <Image
                // source={{
                //   uri: "data:image/jpeg;base64," + arrayBufferToBase64(image), //data.data in your case
                // }}
                source={
                  // hasProfileImage === true
                  // ?
                  {
                    uri: `data:image/jpeg;base64,${contextProfile.userData.profile_image.data.data}`,
                  }
                  // : require("../../../assets/avatar_profile_icon.png")
                  // image
                  //   ? { uri: image }
                  //   : // { uri: `data:image/jpeg;base64,${imageBuffer64}` }
                  //     require("../../../assets/avatar_profile_icon.png")
                }
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
                {contextProfile.userData.firstName}{" "}
                {contextProfile.userData.lastName}
                {/* {firstName} {lastName} */}
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
          {/* <ProfileStack.Screen name="Tickets" component={Tickets} /> */}
        </ProfileStack.Navigator>
      </View>
    </View>
  );
};
