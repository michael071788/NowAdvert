import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { UsedUserAuthInfoContext } from "../../../services/user.auth.provider";
import { List } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import UsedTheme from "../../../infrastucture/theme/use.theme";

const TestScreenMock = () => {
  const [image, setImage] = useState("");

  const userAuthInfoContext = UsedUserAuthInfoContext();
  const theme = UsedTheme();

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");

  const [already, setAlready] = useState(true);

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      {already === true ? (
        <></>
      ) : (
        <>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text>Text 1</Text>
          </View>
        </>
      )}
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        <Text>Text 2</Text>
        <Text>Text 2</Text>
        <Text>Text 2</Text>
      </View>
    </View>
  );
};

export default TestScreenMock;
