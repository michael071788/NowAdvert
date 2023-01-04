import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  BackHandler,
  Alert,
  Image,
} from "react-native";
import Share from "react-native-share";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import {
  AdvertCarousel,
  AdvertCarouselContainer,
  BottomLeftContainer,
  BottomRightContainer,
  ButtonAdvertContainer,
  ButtonAdvertInnerContainer,
  ImageContainer,
  LogoCompanyNameContainer,
  LogoImageContainer,
  MainScreenView,
  SlideInner,
  SlideView,
  ShareModalContainer,
} from "../../../infrastucture/theme/styles/advert.screen.style";
import { LoadingScreen } from "../../../infrastucture/theme/styles/advert.video.screen.style";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { BlurView } from "expo-blur";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";
import { SvgIcon } from "../../../components/svg.icon";
import { HeaderBarContainer } from "../../../infrastucture/theme/styles/app.header.style";
import { UserProfileBar } from "../../profile/user.profile.bar";
import { getErrorString } from "../../../services/common.function";
import { AxiosInstance } from "../../../utils";
import { useTranslation } from "react-i18next";
import UsedProfile from "../../../services/use.user.profile";
import UsedCount from "../../../services/counts.user";
import { MOCK_DATA } from "../../../infrastucture/mockup/data.list";
// --
import { UsedUserAuthInfoContext } from "../../../services/user.auth.provider";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

// --
export const AdvertScreen = ({ route, navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageBase, setImageBase] = useState("");

  const [shareData, setShareData] = useState([]);
  const [alreadyShare, setAlreadyShare] = useState(false);

  // --
  const userAuthInfoContext = UsedUserAuthInfoContext();
  // --

  const countViewContext = UsedCount();

  const [selectedData, setSelectedData] = useState([]);

  const mounted = useRef(false);
  const [isPreloading, setIsPreloading] = useState(true);
  const [advertListData, setAdvertListData] = useState([]);

  const { t } = useTranslation();

  const theme = UsedTheme();

  const primaryContext = UsedPrimaryAppContext();
  const contextProfile = UsedProfile();

  const [selectedItem, setSelectedItem] = useState();
  const [logoURI, setLogoURI] = useState("");

  const random =
    (parseInt(Math.floor(Math.random() * (999 - 0) + 0), 10) + 1000)
      .toString()
      .substr(1) +
    "-" +
    (parseInt(Math.floor(Math.random() * (999999999 - 0) + 0), 10) + 100000000)
      .toString()
      .substr(1) +
    "-" +
    (parseInt(Math.floor(Math.random() * (9999 - 0) + 0), 10) + 10000)
      .toString()
      .substr(1) +
    "-" +
    (parseInt(Math.floor(Math.random() * (99 - 0) + 0), 10) + 101)
      .toString()
      .substr(1);

  useEffect(() => {
    if (contextProfile.hasUserData === true) {
      if (contextProfile.hasProfile === true) {
        setImageBase(contextProfile.userData.profile_image.data);
      }
    }
  }, [contextProfile]);

  const shareToSocial = useCallback(
    async (social) => {
      var _social;
      switch (social) {
        case "whatsapp":
          _social = Share.Social.WHATSAPP;
          break;
        case "facebook":
          _social = Share.Social.FACEBOOK;
          break;
        case "twitter":
          _social = Share.Social.TWITTER;
          break;
      }

      const shareOptions = {
        title: selectedItem.shareTitle,
        message: selectedItem.shareMessage,
        backgroundImage: selectedItem.imageURI,
        icon: selectedItem.imageURI,
        social: _social,
        url: selectedItem.shareUrl,
      };

      try {
        const ShareResponse = await Share.shareSingle(shareOptions);
        const result = ShareResponse;
        if (result.success) {
          // shareVideo(selectedItem._id);
          // countViewContext.SetAddShareCount(selectedItem._id);
          hideShareModal();

          if (!shareData.includes(contextProfile.userData._id)) {
            if (alreadyShare === false) {
              shareVideo(selectedItem._id);
              setAlreadyShare(true);
            }
          }
        }
      } catch (error) {
        console.log("Error =>", error);
        console.log("error: ".concat(getErrorString(error)));
      }
    },
    [selectedItem, countViewContext]
  );

  const [visibleShareModal, setVisibleShareModal] = useState(false);

  const showShareModal = (item) => {
    setSelectedItem(item);
    setVisibleShareModal(true);
  };
  const hideShareModal = () => setVisibleShareModal(false);

  // const onlikeVideo = (item) => {
  //   const tempArr = [...selectedData];
  //   if (selectedData.includes(item)) {
  //     tempArr.splice(selectedData.indexOf(item), 1);
  //     countViewContext.SetSubtractLikeCount(item);
  //   } else {
  //     tempArr.push(item);
  //     countViewContext.SetAddLikeCount(item);
  //   }
  //   setSelectedData(tempArr);
  // };

  // initial
  const likeVideo = async (id) => {
    await AxiosInstance.put(`/api/advert/like/${contextProfile.userData._id}`, {
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
        // setAdvertListData(newData);
        console.log("context ", contextProfile.userData._id);
        countViewContext.SetAdvertData(newData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const unlikeVideo = async (id) => {
    await AxiosInstance.put(
      `/api/advert/unlike/${contextProfile.userData._id}`,
      {
        videoId: id,
      }
    )
      .then((response) => {
        const newData = countViewContext.advertData.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        // setAdvertListData(newData);
        countViewContext.SetAdvertData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const shareVideo = async (id) => {
    await AxiosInstance.put(
      `/api/advert/share/${contextProfile.userData._id}`,
      {
        videoId: id,
      }
    )
      .then((response) => {
        setShareData(response.data.share);
        const newData = countViewContext.advertData.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        // advertListData(newData);
        countViewContext.SetAdvertData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleBackPress = () => {
    Alert.alert("Exit App", "Exiting the application", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("Cancel Pressed");
        },
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    // Having an error on using themes here, still looking for a solution
    return (
      <SlideView>
        <SlideInner>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              primaryContext.ShowUserProfileBar(false);
              navigation.navigate("AdvertVideoScreen", {
                id: item._id,
                videoURI: item.videoURI,
                logoURI: item.logoURI,
                companyName: item.companyName,
                watch: item.watch,
                random: random,
                // userId: userId,
              });
              // countViewContext.SetCurrentViews(item.watch);
              primaryContext.ShowUserProfileBar(false);
            }}
            activeOpacity={0.8}
          >
            <ImageContainer source={{ uri: item.imageURI }} />
          </TouchableOpacity>

          <ButtonAdvertContainer>
            <ButtonAdvertInnerContainer>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 30,
                }}
              >
                <BlurView
                  intensity={40}
                  tint={"dark"}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 35,
                    borderRadius: 30,
                  }}
                >
                  <ButtonContainer
                    name={"HEART"}
                    bgcolor={
                      item.likes.includes(contextProfile.userData._id)
                        ? "red"
                        : ""
                    }
                    // label={countViewContext.countLike(item._id)}
                    label={item.likes.length}
                    onpress={() => {
                      // onlikeVideo(item._id);
                      item.likes.includes(contextProfile.userData._id)
                        ? unlikeVideo(item._id)
                        : likeVideo(item._id);
                    }}
                  />

                  <ButtonContainer
                    name={"EYE"}
                    bgcolor={
                      item.watch.includes(contextProfile.userData._id)
                        ? "black"
                        : ""
                    }
                    // label={countViewContext.countViews(item._id)}
                    label={item.watch.length}
                  />
                  <ButtonContainer
                    name={"SHARE"}
                    bgcolor={
                      item.share.includes(contextProfile.userData._id)
                        ? "green"
                        : ""
                    }
                    // label={countViewContext.countShare(item._id)}
                    label={item.share.length}
                    onpress={() => {
                      setLogoURI(item.logoURI);
                      setShareData(item.share);
                      showShareModal(item);
                    }}
                  />
                </BlurView>
              </View>

              <View
                style={{
                  alignItems: "center",
                  overflow: "hidden",
                  borderRadius: 30,
                }}
              />
            </ButtonAdvertInnerContainer>
          </ButtonAdvertContainer>
          <BottomLeftContainer>
            <LogoCompanyNameContainer>
              <LogoImageContainer source={item.logoURI} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: theme.typography.PRIMARY,
                  color: theme.colors.PRIMARY,
                  textTransform: "uppercase",
                }}
              >
                {item.companyName}
              </Text>
            </LogoCompanyNameContainer>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: theme.typography.PRIMARY,
                  color: theme.colors.PRIMARY,
                }}
              >
                {t("WATCH & WIN")}
              </Text>
            </View>
          </BottomLeftContainer>
          <BottomRightContainer>
            <Text
              style={{
                fontSize: 12,
                fontFamily: theme.typography.PRIMARY,
                color: theme.colors.PRIMARY,
              }}
            >
              {t("You'll Receive")}
            </Text>
            <View style={{ flexDirection: "row", marginTop: -7 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 3,
                }}
              >
                <SvgIcon name={"TICKET"} iconcolor={theme.colors.INACTIVE} />
              </View>
              <Text
                style={{
                  fontSize: 23,
                  fontFamily: theme.typography.PRIMARY,
                  color: theme.colors.PRIMARY,
                }}
              >
                {item.ticketValue}
              </Text>
            </View>
          </BottomRightContainer>
        </SlideInner>
      </SlideView>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      let _data = [];
      await AxiosInstance.get("/api/advert/list")

        .then((response) => {
          _data = response.data;
          // setAdvertListData(response.data);
          countViewContext.SetAdvertData(response.data);
          // setData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      return _data;
    };

    fetchData()
      .then((data) => {
        // setAdvertListData(data);
        countViewContext.SetAdvertData(data);

        setIsPreloading(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <>
      <MainScreenView theme={theme}>
        {mounted && (
          <>
            <HeaderBarContainer>
              <UserProfileBar
                isShown={true}
                navigation={navigation}
                profile={imageBase}
              />
            </HeaderBarContainer>
            <AdvertCarouselContainer>
              <AdvertCarousel
                data={countViewContext.advertData}
                renderItem={renderItem}
              />
            </AdvertCarouselContainer>
          </>
        )}
        {mounted && isPreloading && <LoadingScreen theme={theme} />}
      </MainScreenView>

      <ShareModalContainer
        visible={visibleShareModal}
        onDismiss={hideShareModal}
        theme={theme}
        shareToSocial={shareToSocial}
        logoURI={logoURI}
      />
    </>
  );
};
