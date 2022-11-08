import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
import { UsedUserAuthInfoContext } from "../../../services/user.auth.provider";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
  baseURL: "https://nowadvertapi.herokuapp.com",
});

const _myPostData = {
  title: "This is title 9 version",
  description: "this is description 9 version",
};

export const TestScreen = () => {
  const [info, setInfo] = useState("");

  const userAuthInfoContext = UsedUserAuthInfoContext();

  const onPressButton = async () => {
    console.log("onPressButton");
    console.log("isLoading: true");

    // console.log(userAuthInfoContext.userInfo.user.name);
    setInfo(userAuthInfoContext.userInfo.user.name);
    // =======================================================================
    // await axiosInstance.get("/api/advert/list").then((response) => {
    //   console.log(response.data);
    //   // console.log(response.data[0]._id);
    // });
    // // =======================================================================
    // await axiosInstance
    //   .post("/routes/posts", _myPostData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // // =======================================================================
    // console.log("isLoading: false");
  };
  useEffect(() => {
    setInfo(userAuthInfoContext.userInfo.user);
    // _retrieveData(info);
    // AsyncStorage.getItem(userAuthInfoContext.userInfo);
    // getData();
  }, [userAuthInfoContext]);

  // const _retrieveData = async (data) => {
  //   try {
  //     const value = await AsyncStorage.getItem(data);
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error);
  //   }
  // };
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Test Screen</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>User Data:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>Name</Text>
          <Text>{info.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Phone</Text>
          <Text>{info.phone}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          mode="contained"
          buttonColor="#000"
          onPress={() => {
            onPressButton();
          }}
          style={{
            width: "50%",
            borderRadius: 20,
            backgroundColor: "#333",
          }}
        />
      </View>
    </View>
  );
};
