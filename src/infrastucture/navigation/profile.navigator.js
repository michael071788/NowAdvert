import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

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
// import * as ImagePicker from "expo-image-picker";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const { t } = useTranslation();

  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  // contextProfile.SetCurrentLocation("");

  useEffect(() => {
    // contextProfile.SetCurrentLocation("ProfileScreen");
    setLocation(contextProfile.currentLocation);
  }, [contextProfile.currentLocation]);

  const openImagePicker = async () => {
    alert("picked");
    console.log("picked");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setLocation("Profile Screen");
            navigation.navigate("AdvertScreen");
          }}
        >
          {/* <List.Icon icon="chevron-left" /> */}
          <List.Icon
            icon={location === "Profile Screen" ? "home" : "chevron-left"}
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
              <Avatar.Image
                size={180}
                source={
                  image
                    ? image
                    : require("../../../assets/avatar_profile_icon.png")
                }
                style={{ backgroundColor: "#fff", elevation: 1 }}
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
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              calum scott
            </Text>
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
          screenOptions={({ route, navigation }) => ({
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
