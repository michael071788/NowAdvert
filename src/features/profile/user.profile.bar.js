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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  useEffect(() => {
    setFirstName(contextProfile.userData.firstName);
    setLastName(contextProfile.userData.lastName);
  }, [contextProfile]);
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
            {firstName} {lastName}
          </UserFullName>
        </View>
      </UserProfileBarContainer>
    </TouchableOpacity>
  );
};
