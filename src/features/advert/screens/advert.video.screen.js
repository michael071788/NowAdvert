import React, { useRef, useState } from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import {
  MainScreenView,
  VideoStyle,
  VideoButtonContainer,
  Container1,
  Container2,
  Container3,
  BackButtonContainer,
  PlayButtonContainer,
} from "../../../infrastucture/theme/styles/advert.video.screen.style";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const primaryContext = UsedPrimaryAppContext();

  const { videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const onPlayPressInOut = () => {
    if (status.isPlaying) {
      video.current.replayAsync();
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  };

  return (
    <MainScreenView>
      <Video
        ref={video}
        style={VideoStyle}
        source={{
          uri: videoURI,
        }}
        resizeMode="cover"
        onPlaybackStatusUpdate={(e) => setStatus(e)}
      />

      <VideoButtonContainer>
        <Container1>
          <TouchableOpacity
            onPress={() => {
              primaryContext.ShowUserProfileBar(true);
              navigation.goBack();
            }}
            activeOpacity={0.8}
          >
            <BackButtonContainer />
          </TouchableOpacity>
        </Container1>
        <Container2>
          <TouchableWithoutFeedback
            onPressIn={onPlayPressInOut}
            onPressOut={onPlayPressInOut}
          >
            <View>
              <PlayButtonContainer
                name={status.isPlaying ? "PAUSE" : "CARETRIGHT"}
              />
            </View>
          </TouchableWithoutFeedback>
        </Container2>
        <Container3 />
      </VideoButtonContainer>
    </MainScreenView>
  );
};
