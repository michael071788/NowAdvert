import React from "react";
import { Image, View } from "react-native";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullNameStyle,
} from "../../infrastucture/theme/styles/user.profile.style";

export const UserProfileBar = () => {
  return (
    <UserProfileBarContainer>
      <UserProfileBarImageContainer>
        <Image
          source={require("../../../assets/avatar_profile_icon.png")}
          style={{ height: 33, width: 33 }}
        />
      </UserProfileBarImageContainer>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <UserFullNameStyle userFullName={"calum scott"} />
      </View>
    </UserProfileBarContainer>
  );
};
