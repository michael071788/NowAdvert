import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Video } from "expo-av";
import {
  BackButtonContainer,
  Container1,
  Container2,
  Container3,
  FlexCenterContainer,
  LoadingScreen,
  MainScreenView,
  ModalContainer1,
  ModalContainer2,
  ModalContainer3,
  ModalContainerStyle,
  PlayButtonContainer,
  TicketContainer,
  TicketInnerContainer1,
  TicketInnerContainer2,
  TicketInnerContainer3,
  TicketStatusContainer,
  VideoButtonContainer,
  VideoStyle,
} from "../../../infrastucture/theme/styles/advert.video.screen.style";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { Modal } from "react-native-paper";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { Divider } from "react-native-paper";

export const AdvertVideoScreen = ({ route, navigation }) => {
  const mounted = useRef(false);

  const primaryContext = UsedPrimaryAppContext();
  const theme = UsedTheme();

  const { videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPreloading, setIsPreloading] = useState(true);
  const [durationMillis, setDurationMillis] = useState();
  const [positionMillis, setPositionMillis] = useState(0);
  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const goBackAdvertScreen = useCallback(() => {
    primaryContext.ShowUserProfileBar(true);
    navigation.goBack();
  }, [primaryContext, navigation]);

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
    if (status.isLoaded) {
      setDurationMillis(Math.trunc(status.durationMillis / 1000));
      setPositionMillis(Math.trunc(status.positionMillis / 1000));
    }

    if (status.didJustFinish) {
      showModal();
    }
  }, [status, isPreloading]);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <MainScreenView>
      {mounted && (
        <>
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
            </Container2>
            <Container3 />
          </VideoButtonContainer>
          <Modal
            visible={visibleModal}
            onDismiss={hideModal}
            contentContainerStyle={ModalContainerStyle}
          >
            <ModalContainer1>
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
            </ModalContainer1>
            <ModalContainer2>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 20,
                  color: theme.colors.ACTIVE,
                }}
              >
                HOORAY! YOU JUST WON
              </Text>
            </ModalContainer2>
            <ModalContainer3 style={{ flex: 20 }}>
              <TicketContainer>
                <TicketInnerContainer1>
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
                </TicketInnerContainer1>
                <TicketInnerContainer2>
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
                </TicketInnerContainer2>
                <TicketInnerContainer3>
                  <FlexCenterContainer>
                    <TicketStatusContainer bgcolor={theme.colors.SECONDARY}>
                      <Text
                        style={{
                          fontFamily: theme.typography.PRIMARY,
                          fontSize: 15,
                          color: theme.colors.PRIMARY,
                        }}
                      >
                        ACTIVE
                      </Text>
                    </TicketStatusContainer>
                  </FlexCenterContainer>
                  <FlexCenterContainer>
                    <Text
                      style={{
                        fontFamily: theme.typography.PRIMARY,
                        fontSize: 15,
                        color: theme.colors.ACTIVE,
                      }}
                    >
                      000-01234687-4817-01
                    </Text>
                  </FlexCenterContainer>
                </TicketInnerContainer3>
              </TicketContainer>
              <View style={{ flex: 2 }} />
            </ModalContainer3>
          </Modal>
        </>
      )}
      {mounted && isPreloading && <LoadingScreen theme={theme} />}
    </MainScreenView>
  );
};
