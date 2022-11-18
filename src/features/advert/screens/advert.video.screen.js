import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
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
import { useTranslation } from "react-i18next";
import UsedProfile from "../../../services/use.user.profile";
import UsedCount from "../../../services/counts.user";

export const AdvertVideoScreen = ({ route, navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState("");

  const countViewContext = UsedCount();

  const mounted = useRef(false);
  const { t } = useTranslation();

  const primaryContext = UsedPrimaryAppContext();
  const contextProfile = UsedProfile();

  const theme = UsedTheme();

  const { id, videoURI } = route.params;

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPreloading, setIsPreloading] = useState(true);
  const [isReadyForDisplay, setReadyForDisplay] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const goBackAdvertScreen = useCallback(() => {
    primaryContext.ShowUserProfileBar(true);
    navigation.goBack();
  }, [primaryContext, navigation]);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  const onLongPress = useCallback(async () => {
    if (!status.didJustFinish) {
      video.current.playAsync();
    }
  }, [status.didJustFinish]);

  const onPressOut = useCallback(async () => {
    if (!status.didJustFinish) {
      video.current.stopAsync();
    }
  }, [status.didJustFinish]);

  useEffect(() => {
    if (isReadyForDisplay) {
      //show modal ticket when done
      if (status.positionMillis === status.durationMillis) {
        if (status.didJustFinish) {
          countViewContext.SetAddViewCount(id);
          countViewContext.SetAlreadyWatch(true);
          showModal();
        }
      }
    }
  }, [status, isReadyForDisplay, id, countViewContext]);

  useEffect(() => {
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  return (
    <MainScreenView>
      {mounted && (
        <>
          <Video
            ref={video}
            onLoadStart={() => setIsPreloading(true)}
            onReadyForDisplay={() => {
              setIsPreloading(false);
              setReadyForDisplay(true);
            }}
            style={VideoStyle}
            source={{
              uri: videoURI,
            }}
            resizeMode="cover"
            onPlaybackStatusUpdate={(e) => setStatus(e)}
          />
          <VideoButtonContainer>
            <Container1>
              <BackButtonContainer onpress={goBackAdvertScreen} />
            </Container1>
            <Container2>
              <TouchableWithoutFeedback
                onLongPress={onLongPress}
                onPressOut={onPressOut}
              >
                <View>
                  <View>
                    <CircularProgress
                      value={status.positionMillis || 0}
                      radius={45}
                      duration={1000}
                      activeStrokeColor={theme.colors.ACTIVE}
                      inActiveStrokeColor={"rgba(0, 0, 0, 0.25)"}
                      activeStrokeWidth={5}
                      inActiveStrokeWidth={5}
                      maxValue={status.durationMillis || 0}
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
                <ButtonContainer
                  name={"XMARK"}
                  size={30}
                  bgcolor={"rgba(105, 105, 105, 0.37)"}
                  onpress={goBackAdvertScreen}
                />
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
                {t("HOORAY! YOU JUST WON")}
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
                      {t("TICKET NUMBER")}
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
                        {t("ACTIVE")}
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
