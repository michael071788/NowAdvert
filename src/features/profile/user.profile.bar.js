import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullName,
} from "../../infrastucture/theme/styles/user.profile.style";

import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsedProfile from "../../services/use.user.profile";

export const UserProfileBar = ({ isShown, navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  // useEffect(() => {
  //   AsyncStorage.getItem("userData").then((value) => {
  //     const jsonData = JSON.parse(value);
  //     setFirstName(jsonData.user.firstName);
  //     setLastName(jsonData.user.lastName);
  //   });
  // }, []);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <UserProfileBarContainer isShown={isShown}>
        <UserProfileBarImageContainer>
          <Image
            source={require("../../../assets/avatar_profile_icon.png")}
            style={{ height: 33, width: 33 }}
          />
        </UserProfileBarImageContainer>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <UserFullName theme={theme}>
            {/* {userAuthInfoContext.userInfo.user.name} */}
            {contextProfile.userData.firstName}{" "}
            {contextProfile.userData.lastName}
          </UserFullName>
        </View>
      </UserProfileBarContainer>
    </TouchableOpacity>
  );
};
