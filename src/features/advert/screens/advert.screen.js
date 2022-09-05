import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { Modal } from "react-native-paper";
import Share from "react-native-share";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { MOCK_ADVERT_LIST } from "../../../infrastucture/mockup/data.list";
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
} from "../../../infrastucture/theme/styles/advert.screen.style";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { BlurView } from "expo-blur";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";
import { SvgIcon } from "../../../components/svg.icon";
import { HeaderBarContainer } from "../../../infrastucture/theme/styles/app.header.style";
import { UserProfileBar } from "../../profile/user.profile.bar";
import images from "../../../../assets/imagesBase64";

function getErrorString(error, defaultValue) {
  let e = defaultValue || "Something went wrong. Please try again";
  if (typeof error === "string") {
    e = error;
  } else if (error && error.message) {
    e = error.message;
  } else if (error && error.props) {
    e = error.props;
  }
  return e;
}

export const AdvertScreen = ({ navigation }) => {
  const theme = UsedTheme();

  const primaryContext = UsedPrimaryAppContext();

  const shareToFacebook = async () => {
    const shareOptions = {
      title: "Share my link to FB",
      message: "This sample message only, just to share though!",
      backgroundImage: images.image1,
      icon: images.image1, //"data:<data_type>/<file_extension>;base64,<base64_data>"
      social: Share.Social.FACEBOOK,
      url: "https://react-native-share.github.io/react-native-share/docs/install",
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      const result = ShareResponse;
      /** Note if result.message is blank, it means that the app is not installed**/
      if (result.success) hideShareModal();
    } catch (error) {
      console.log("Error =>", error);
      console.log("error: ".concat(getErrorString(error)));
    }
  };

  const shareToWhatsApp = async () => {
    const shareOptions = {
      title: "Share my link to Whats App",
      message:
        "This sample message only intended for Whats App, just to share though!\n" +
        "Test next line 1\n" +
        "Test next line 2\n" +
        "Test next line 3\n",
      backgroundImage: images.image1,
      icon: images.image1, //"data:<data_type>/<file_extension>;base64,<base64_data>"
      social: Share.Social.WHATSAPP,
      url: "https://react-native-share.github.io/react-native-share/docs/install",
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      const result = ShareResponse;
      console.log("result: ", result); //added temp
      if (result.success) hideShareModal();
    } catch (error) {
      console.log("Error =>", error);
      console.log("error: ".concat(getErrorString(error)));
    }
  };

  const shareToTwitter = async () => {
    const shareOptions = {
      title: "Share my link to Twitter",
      message:
        "This sample message only intended for Twitter, just to share though!\n" +
        "Test next line 1\n" +
        "Test next line 2\n" +
        "Test next line 3\n",
      backgroundImage: images.image1,
      icon: images.image1, //"data:<data_type>/<file_extension>;base64,<base64_data>"
      social: Share.Social.TWITTER,
      url: "https://react-native-share.github.io/react-native-share/docs/install",
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      const result = ShareResponse;
      console.log("result: ", result); //added temp
      if (result.success) hideShareModal();
    } catch (error) {
      console.log("Error =>", error);
      console.log("error: ".concat(getErrorString(error)));
    }
  };

  const [visibleShareModal, setVisibleShareModal] = useState(false);

  const showShareModal = () => setVisibleShareModal(true);
  const hideShareModal = () => setVisibleShareModal(false);

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
                id: item.id,
                videoURI: item.videoURI,
              });
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
                <ButtonContainer name={"BOOKMARK"} />
              </View>

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
                  <ButtonContainer name={"HEART"} label={"1.5k"} />
                  <ButtonContainer name={"EYE"} label={"300"} />
                  <ButtonContainer
                    name={"SHARE"}
                    label={"200"}
                    onpress={showShareModal}
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
                WATCH & WIN
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
              You'll Receive
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

  return (
    <>
      <MainScreenView theme={theme}>
        <HeaderBarContainer>
          <UserProfileBar isShown={true} />
        </HeaderBarContainer>
        <AdvertCarouselContainer>
          <AdvertCarousel data={MOCK_ADVERT_LIST} renderItem={renderItem} />
        </AdvertCarouselContainer>
      </MainScreenView>
      <Modal
        visible={visibleShareModal}
        onDismiss={hideShareModal}
        contentContainerStyle={{ flex: 1, flexDirection: "column" }}
      >
        <View style={{ flex: 10 }} />
        <View
          style={{
            flex: 5,
            paddingTop: 10,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 25,
              paddingHorizontal: 25,
              flexDirection: "column",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <LogoImageContainer
                  source={
                    "https://s3.eu-west-3.amazonaws.com/www.gccfmt.com/test/sweet_candy_shop.png"
                  }
                  size={25}
                />
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity onPress={hideShareModal} activeOpacity={0.8}>
                  <SvgIcon
                    name={"XMARK"}
                    height={25}
                    width={25}
                    iconcolor={theme.colors.TERTIARY}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                alignItems: "flex-start",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                SHARE THIS ADVERT
              </Text>
            </View>
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: theme.colors.SECONDARY,
                }}
              >
                SHARE THIS ADVERT WITH YOUR FRIENDS &amp; FAMILY
              </Text>
            </View>
            <View
              style={{
                marginTop: 25,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={shareToWhatsApp} activeOpacity={0.8}>
                <Image
                  source={require("../../../../assets/whatsapp_icon.png")}
                  style={{ height: 50, width: 50, marginRight: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={shareToFacebook} activeOpacity={0.8}>
                <Image
                  source={require("../../../../assets/facebook_icon.png")}
                  style={{ height: 50, width: 50, marginRight: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={shareToTwitter} activeOpacity={0.8}>
                <Image
                  source={require("../../../../assets/twitter_icon.png")}
                  style={{ height: 50, width: 50 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
