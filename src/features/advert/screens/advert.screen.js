import React, { useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
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
// --
export const AdvertScreen = ({ route, navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const [language, setLanguage] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");

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

  useEffect(() => {
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  useEffect(() => {
    countViewContext.SetMockData(MOCK_DATA);
    setUserId(userAuthInfoContext.userInfo.user._id);
    // console.log(userAuthInfoContext.userInfo.user._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          sharePost(selectedItem._id);
          countViewContext.SetAddShareCount(selectedItem._id);
          hideShareModal();
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

  const onlikeVideo = (item) => {
    const tempArr = [...selectedData];
    if (selectedData.includes(item)) {
      tempArr.splice(selectedData.indexOf(item), 1);
      countViewContext.SetSubtractLikeCount(item);
    } else {
      tempArr.push(item);
      countViewContext.SetAddLikeCount(item);
    }
    setSelectedData(tempArr);
  };

  // initial
  const likeVideo = async (id) => {
    await axios
      .put(`http://192.168.1.12:14961/like/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((error) => {
        console.log("error ", error.response);
      });
  };
  const unlikeVideo = (id) => {
    axios
      .put(`http://192.168.1.12:14961/unlike/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const watchVideo = (id) => {
    axios
      .put(`http://192.168.1.12:14961/watch/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const shareVideo = (id) => {
    axios
      .put(`http://192.168.1.12:14961/share/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
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
              });
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
                    // bgcolor={item.likes.includes(userId) ? "red" : ""}
                    label={countViewContext.countLike(item._id)}
                    // label={item.likes.length}
                    onpress={() => {
                      onlikeVideo(item._id);
                      // item.likes.includes(userId)
                      //   ? unlikePost(item._id)
                      //   : likePost(item._id);
                    }}
                  />

                  <ButtonContainer
                    name={"EYE"}
                    label={countViewContext.countViews(item._id)}
                    // label={item.watch.length}
                  />
                  <ButtonContainer
                    name={"SHARE"}
                    label={countViewContext.countShare(item._id)}
                    // label={item.share.length}
                    onpress={() => {
                      setLogoURI(item.logoURI);
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
        // await axios
        //   .get("http://192.168.1.12:14961/api/advert/list")
        .then((response) => {
          _data = response.data;
          setAdvertListData(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      return _data;
    };

    fetchData()
      .then((data) => {
        setAdvertListData(data);
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
              <UserProfileBar isShown={true} navigation={navigation} />
            </HeaderBarContainer>
            <AdvertCarouselContainer>
              <AdvertCarousel data={advertListData} renderItem={renderItem} />
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
