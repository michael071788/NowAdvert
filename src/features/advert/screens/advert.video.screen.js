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
import { Button, Modal } from "react-native-paper";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { Divider } from "react-native-paper";
import { useTranslation } from "react-i18next";
import UsedProfile from "../../../services/use.user.profile";
import UsedCount from "../../../services/counts.user";
import { AxiosInstance } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AdvertVideoScreen = ({ route, navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState("");
  const [data, setData] = useState([]);
  // const [userId, setUserId] = useState("");
  const [alreadyWatch, setAlreadyWatch] = useState(false);
  const [doneWatching, setDoneWatching] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const countViewContext = UsedCount();

  const mounted = useRef(false);
  const { t } = useTranslation();

  const primaryContext = UsedPrimaryAppContext();
  const contextProfile = UsedProfile();

  const theme = UsedTheme();

  const { id, videoURI, companyName, logoURI, watch, random } = route.params;

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
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  // useEffect(() => {
  //   countViewContext.alreadyWatch;
  // }, [countViewContext]);

  useEffect(() => {
    if (doneWatching === true) {
      watchVideo(id);
    }
  }, [doneWatching]);

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
          // countViewContext.SetAddViewCount(id);
          // countViewContext.SetAlreadyWatch(true);
          showModal();
          if (!watch.includes(contextProfile.userData._id)) {
            if (alreadyWatch === false) {
              setDoneWatching(true);
            }
          } else {
            setAlreadyWatch(true);
          }
        }
      }
    }
  }, [
    status,
    isReadyForDisplay,
    id,
    countViewContext,
    alreadyWatch,
    doneWatching,
    ticketNumber,
  ]);

  useEffect(() => {
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  const watchVideo = async (id) => {
    await AxiosInstance.put(`/watch/${contextProfile.userData._id}`, {
      videoId: id,
    })
      .then((response) => {
        const newData = countViewContext.advertData.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        // setData(newData);
        countViewContext.SetAdvertData(newData);
        setTicketNumber(random);
        earnTickets(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const earnTickets = async (id) => {
    await AxiosInstance.post(`/tickets/${contextProfile.userData._id}`, {
      videoTicket: id,
      ticketNumber: random,
      status: "active",
    })
      .then((response) => {
        countViewContext.SetUserTickets(response.data.result.earnedTickets);
      })
      .then((err) => console.log(err));
  };
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
          {/* ------- */}
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
            <View style={{ flex: 20 }}>
              <View style={{ flex: 1 }}>
                {/*  */}
                {alreadyWatch === true ? (
                  <>{}</>
                ) : (
                  <View style={{ flex: 1 }}>
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
                            {/* 000-01234687-4817-01 */}
                            {/* {random} */}
                            {ticketNumber}
                          </Text>
                        </View>
                      </TicketInnerContainer2>
                      <TicketInnerContainer3>
                        <FlexCenterContainer>
                          <TicketStatusContainer
                            bgcolor={theme.colors.SECONDARY}
                          >
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
                  </View>
                )}
                {/*  */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: theme.typography.PRIMARY,
                      }}
                    >
                      WANT TO WIN ANOTHER TICKET?
                    </Text>
                    <Text
                      style={{
                        color: "#aaa",
                        fontFamily: theme.typography.PRIMARY,
                      }}
                    >
                      DOWNLOAD THE APP AND DOUBLE YOUR CHANCE
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: logoURI }}
                      style={{
                        width: 200,
                        height: 100,
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: theme.typography.PRIMARY,
                      }}
                    >
                      {companyName}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{ borderRadius: 20, width: "50%" }}
                      mode="contained"
                      color="#fff"
                      contentStyle={{
                        fontFamily: theme.typography.PRIMARY,
                      }}
                    >
                      DOWNLOAD NOW
                    </Button>
                  </View>
                </View>
              </View>
            </View>
            {/*          
            <ModalContainer3 style={{ flex: 20 }}>   
            </ModalContainer3> */}
          </Modal>
        </>
      )}
      {mounted && isPreloading && <LoadingScreen theme={theme} />}
    </MainScreenView>
  );
};
