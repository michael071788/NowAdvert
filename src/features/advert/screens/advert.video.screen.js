import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const { id, videoURI } = route.params;

  const primaryContext = UsedPrimaryAppContext();

  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: 100,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => {
          primaryContext.ShowUserProfileBar(true);
          navigation.goBack();
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white" }}>id: {id}</Text>
          <Text style={{ color: "white" }}>videoURI {videoURI}</Text>
        </View>
      </TouchableOpacity>

      {/* <Video
        style={{ flex: 1 }}
        source={{
          uri: "https://s3.eu-west-3.amazonaws.com/www.gccfmt.com/test/Candy.mp4",
        }}
        // onError={(e) => console.log(e)}
        // repeat={true}
      /> */}
    </View>
  );
};
