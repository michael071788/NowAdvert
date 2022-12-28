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

export const UserProfileBar = ({ isShown, navigation }) => {
  const [imageBase, setImageBase] = useState("");
  const [hasProfileImage, setHasProfileImage] = useState(false);

  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();
  const contextProfile = UsedProfile();

  // useEffect(() => {
  //   AsyncStorage.getItem("islogged").then((value) => {
  //     const islogged = JSON.parse(value);
  //     if (islogged === true) {
  //       getImage();
  //     }
  //   });
  //   console.log("context profile bar ", contextProfile.userData._id);
  // }, [imageBase, contextProfile]);

  // const getImage = async () => {
  //   await AxiosInstance.get(
  //     `/api/users/profile-image/${contextProfile.userData._id}`
  //   )
  //     .then((res) => {
  //       const imageBuffer = Buffer.from(res.data.data);
  //       const imageBase64 = imageBuffer.toString("base64");
  //       setImageBase(imageBase64);
  //       setHasProfileImage(true);
  //     })
  //     .catch((err) => console.log("err ", err));
  // };
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <UserProfileBarContainer isShown={isShown}>
        <UserProfileBarImageContainer>
          <Image
            source={
              // imageBase !== null || imageBase !== undefined
              // ?
              {
                uri: `data:image/jpeg;base64,${contextProfile.userData.profile_image.data.data}`,
              }
              // : require("../../../assets/avatar_profile_icon.png")
            }
            style={{ height: 33, width: 33, borderRadius: 40 }}
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
