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
import { Modal } from "react-native-paper";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { Image } from "react-native";
import { Divider } from "react-native-paper";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const primaryContext = UsedPrimaryAppContext();
  const theme = UsedTheme();

  const { videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPreloading, setIsPreloading] = useState(true);
  // const [remainingSecs, setRemainingSecs] = useState();
  const [durationMillis, setDurationMillis] = useState();
  const [positionMillis, setPositionMillis] = useState(0);
  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const goBackAdvertScreen = () => {
    primaryContext.ShowUserProfileBar(true);
    navigation.goBack();
  };

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
    // if (!isPreloading) {
    //   setRemainingSecs(
    //     Math.trunc((status.durationMillis - status.positionMillis) / 1000)
    //   );
    // }

    if (status.isLoaded) {
      setDurationMillis(Math.trunc(status.durationMillis / 1000));
      setPositionMillis(Math.trunc(status.positionMillis / 1000));
    }

    if (status.didJustFinish) {
      showModal();
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
              goBackAdvertScreen();
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
                  value={positionMillis}
                  radius={45}
                  duration={1000}
                  activeStrokeColor={theme.colors.ACTIVE}
                  inActiveStrokeColor={"rgba(0, 0, 0, 0.25)"}
                  activeStrokeWidth={5}
                  inActiveStrokeWidth={5}
                  maxValue={durationMillis}
                  showProgressValue={false}
                  delay={0}
                />
              </View>
              <View style={{ marginTop: -85 }}>
                <PlayButtonContainer
                  name={status.isPlaying ? "PAUSE" : "CARETRIGHT"}
                  iconcolor={theme.colors.INACTIVE}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          {/* <Text
            style={{
              fontFamily: theme.typography.PRIMARY,
              fontSize: 20,
              color: theme.colors.INACTIVE,
            }}
          >
            {remainingSecs}
            {"s"}
          </Text> */}
        </Container2>
        <Container3 />
      </VideoButtonContainer>

      <Modal
        visible={visibleModal}
        onDismiss={hideModal}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity
              onPress={() => {
                hideModal();
                goBackAdvertScreen();
              }}
              activeOpacity={0.8}
            >
              <ButtonContainer
                name={"XMARK"}
                size={30}
                bgcolor={"rgba(105, 105, 105, 0.37)"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: theme.typography.PRIMARY,
              fontSize: 20,
              color: theme.colors.ACTIVE,
            }}
          >
            HOORAY! YOU JUST WON
          </Text>
        </View>
        <View style={{ flex: 20 }}>
          <View
            style={{
              flex: 1,
              borderRadius: 15,
              backgroundColor: "white",
              alignItems: "stretch",
              marginHorizontal: 15,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../../../../assets/nowadvert_bg1.png")}
                  style={{
                    width: 200,
                    height: 100,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <Divider />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontSize: 15,
                    color: theme.colors.PRIMARY,
                  }}
                >
                  TICKET NUMBER
                </Text>
              </View>

              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontSize: 15,
                    color: theme.colors.PRIMARY,
                  }}
                >
                  000-01234687-4817-01
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: theme.colors.SECONDARY,
                    borderRadius: 15,
                    alignItems: "center",
                    alignContent: "center",
                    width: "45%",
                    height: "40%",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      color: theme.colors.PRIMARY,
                    }}
                  >
                    ACTIVE
                  </Text>
                </View>
              </View>

              <View style={{ flex: 1, alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontSize: 15,
                    color: theme.colors.ACTIVE,
                  }}
                >
                  000-01234687-4817-01
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 2 }} />
        </View>
      </Modal>

      {isPreloading && <LoadingScreen theme={theme} />}
    </MainScreenView>
  );
};
