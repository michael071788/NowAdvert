import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://nowadvertapi.herokuapp.com",
});

const _myPostData = {
  title: "This is title 9 version",
  description: "this is description 9 version",
};

export const TestScreen = () => {
  const onPressButton = async () => {
    console.log("onPressButton");
    console.log("isLoading: true");
    // =======================================================================
    await axiosInstance.get("/api/advert/list").then((response) => {
      console.log(response.data);
      // console.log(response.data[0]._id);
    });
    // =======================================================================
    await axiosInstance
      .post("/routes/posts", _myPostData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // =======================================================================
    console.log("isLoading: false");
  };

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Test Screen</Text>
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
