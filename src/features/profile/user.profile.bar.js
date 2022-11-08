import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullName,
} from "../../infrastucture/theme/styles/user.profile.style";

export const UserProfileBar = ({ isShown }) => {
  const theme = UsedTheme();

  return (
    <>
      <UserProfileBarContainer isShown={isShown}>
        <UserProfileBarImageContainer>
          <Image
            source={require("../../../assets/avatar_profile_icon.png")}
            style={{ height: 33, width: 33 }}
          />
        </UserProfileBarImageContainer>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <UserFullName theme={theme}>calum scott</UserFullName>
        </View>
      </UserProfileBarContainer>
    </>
  );
};
