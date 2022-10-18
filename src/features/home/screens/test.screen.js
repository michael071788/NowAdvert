import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://protected-fjord-83078.herokuapp.com",
});

export const TestScreen = () => {
  const onPressButton = async () => {
    console.log("onPressButton");
    axiosInstance.get("/routes/posts").then((response) => {
      console.log(response.data);
      console.log(response.data[0]._id);
    });
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
