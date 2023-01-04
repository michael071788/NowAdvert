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
import { AxiosInstance } from "../../utils";
import { Buffer } from "buffer";

export const UserProfileBar = ({ isShown, navigation, profile }) => {
  const [imageBase, setImageBase] = useState("");
  const [hasProfileImage, setHasProfileImage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  // useEffect(() => {
  //   if (contextProfile.userData !== null) {
  //     setImageBase(contextProfile.userData.profile_image.data);
  //   }
  // }, [contextProfile]);
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <UserProfileBarContainer isShown={isShown}>
        <UserProfileBarImageContainer>
          <Image
            source={{
              uri: `data:image/png;base64,${profile}`,
            }}
            style={{ height: 33, width: 33, borderRadius: 40 }}
          />
        </UserProfileBarImageContainer>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <UserFullName theme={theme}>
            {contextProfile.userData.firstName}{" "}
            {contextProfile.userData.lastName}
            {/* {contextProfile.userData.profile_image.data.data.slice(0, 6)} */}
          </UserFullName>
        </View>
      </UserProfileBarContainer>
    </TouchableOpacity>
  );
};
