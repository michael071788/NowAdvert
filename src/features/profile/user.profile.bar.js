import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, ActivityIndicator } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullName,
} from "../../infrastucture/theme/styles/user.profile.style";

import UsedProfile from "../../services/use.user.profile";

export const UserProfileBar = ({ isShown, navigation, profile, loading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const theme = UsedTheme();
  const contextProfile = UsedProfile();

  useEffect(() => {
    setFirstName(contextProfile.userData.firstName);
    setLastName(contextProfile.userData.lastName);
  }, [contextProfile]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <UserProfileBarContainer isShown={isShown}>
        <UserProfileBarImageContainer>
          {loading === true ? (
            <ActivityIndicator size="small" color="#00C853" />
          ) : (
            <Image
              source={
                contextProfile.hasProfile === true
                  ? {
                      uri: `data:image/png;base64,${profile}`,
                    }
                  : require("../../../assets/avatar_profile_icon.png")
              }
              style={{ height: 33, width: 33, borderRadius: 40 }}
            />
          )}
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
