import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullName,
} from "../../infrastucture/theme/styles/user.profile.style";

import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";

export const UserProfileBar = ({ isShown, navigation }) => {
  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();

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
          {/* <UserFullName theme={theme}>calum scott</UserFullName> */}
          <UserFullName theme={theme}>
            {userAuthInfoContext.userInfo.user.name}
          </UserFullName>
        </View>
      </UserProfileBarContainer>
    </TouchableOpacity>
  );
};
