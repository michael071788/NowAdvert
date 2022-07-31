import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
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
  LoadingScreen,
} from "../../../infrastucture/theme/styles/advert.video.screen.style";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";
import UsedTheme from "../../../infrastucture/theme/use.theme";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const primaryContext = UsedPrimaryAppContext();
  const theme = UsedTheme();

  const { videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPreloading, setIsPreloading] = useState(true);
  const [remainingSecs, setRemainingSecs] = useState();
  const [durationMillis, setDurationMillis] = useState();

  const onPlayPressInOut = useCallback(async () => {
    if (status.isPlaying) {
      video.current.pauseAsync();
    } else {
      if (!status.didJustFinish) {
        status.positionMillis
          ? video.current.replayAsync()
          : video.current.playAsync();
      }
    }
  }, [status]);

  useEffect(() => {
    if (!isPreloading) {
      setRemainingSecs(
        Math.trunc((status.durationMillis - status.positionMillis) / 1000)
      );
    }

    if (status.isLoaded) {
      setDurationMillis(Math.trunc(status.durationMillis / 1000));
    }
  }, [status, isPreloading]);

  return (
    <MainScreenView>
      <Video
        ref={video}
        onLoadStart={() => setIsPreloading(true)}
        onReadyForDisplay={() => setIsPreloading(false)}
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
              <View>
                <CircularProgress
                  value={remainingSecs}
                  radius={50}
                  duration={1000}
                  activeStrokeColor={theme.colors.INACTIVE}
                  maxValue={durationMillis}
                  showProgressValue={false}
                  delay={0}
                />
              </View>
              <View style={{ marginTop: -90 }}>
                <PlayButtonContainer
                  name={status.isPlaying ? "PAUSE" : "CARETRIGHT"}
                  iconcolor={theme.colors.INACTIVE}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={{
              fontFamily: theme.typography.PRIMARY,
              fontSize: 20,
              color: theme.colors.INACTIVE,
            }}
          >
            {remainingSecs}
            {"s"}
          </Text>
        </Container2>
        <Container3 />
      </VideoButtonContainer>

      {isPreloading && <LoadingScreen theme={theme} />}
    </MainScreenView>
  );
};
