import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const primaryContext = UsedPrimaryAppContext();

  const { videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const onPlayPressInOut = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoURI,
          }}
          resizeMode="cover"
          onPlaybackStatusUpdate={(e) => setStatus(e)}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => {
              primaryContext.ShowUserProfileBar(true);
              navigation.goBack();
            }}
            activeOpacity={0.8}
          >
            <View style={{ margin: 10 }}>
              <ButtonContainer
                name={"LEFTARROW"}
                size={30}
                bgcolor={"rgba(105, 105, 105, 0.37)"}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "column-reverse",
            marginBottom: 15,
          }}
        >
          <TouchableWithoutFeedback
            onPressIn={onPlayPressInOut}
            onPressOut={onPlayPressInOut}
          >
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: "lightblue",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{status.isPlaying ? "Pause" : "Play"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
