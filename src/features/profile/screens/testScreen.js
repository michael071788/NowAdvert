import { View, Text, Button } from "react-native";
import React from "react";

const testScreen = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <View>
      <Text>testScreen</Text>
      <Button title="Get User" onPress={() => handleClick()} />
    </View>
  );
};

export default testScreen;
