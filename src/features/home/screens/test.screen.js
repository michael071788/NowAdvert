import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import UsedProfile from "../../../services/use.user.profile";
import { UsedUserAuthInfoContext } from "../../../services/user.auth.provider";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AxiosInstance } from "../../../utils";
import { profileImage } from "../../../infrastucture/mockup/image";
// const _myPostData = {
//   title: "This is title 9 version",
//   description: "this is description 9 version",
// };

export const TestScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [imageBase, setImageBase] = useState("");

  const contextProfile = UsedProfile();

  useEffect(() => {
    // setUserData(profileImage);
    // if (contextProfile.userData === null) {
    //   setImageBase(contextProfile.userData.profile_image.data);
    //   // console.log("profile ", contextProfile.userData.profile_image.data);
    // }
    // if (
    //   contextProfile.userData !== null ||
    //   contextProfile.userData !== undefined
    // ) {
    //   setUserData(contextProfile.userData);
    // }
  }, [contextProfile.userData]);
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity>
        <Text>Advert</Text>
      </TouchableOpacity>
      <ScrollView>
        {userData.map((item) => {
          return (
            <View key={item.id}>
              <Text>{item.firstName}</Text>
              <Image
                source={{
                  uri: `data:image/png;base64,${item.image}`,
                }}
                style={{ height: 69, width: 69, borderRadius: 69 }}
              />
              <Text>{item.image.slice(0, 6)}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
