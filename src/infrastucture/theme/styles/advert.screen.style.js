import React from "react";
import styled from "styled-components/native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Card, Modal } from "react-native-paper";
import Share from "react-native-share";
import Carousel from "react-native-snap-carousel";
import { ViewportWidth, ViewportHeight, WinPix } from "../../../utils/index";
import { scrollInterpolator, animatedStyles } from "../../../utils/animations";
import { SvgIcon } from "../../../components/svg.icon";

export const SlideHeight = ViewportHeight * 0.77;
const slideWidth = WinPix(86);
const itemHorizontalMargin = WinPix(3);
const itemVerticalMargin = WinPix(5);

export const SliderWidth = ViewportWidth;
export const ItemWidth = slideWidth + itemHorizontalMargin * 2;

/* prettier-ignore */
export const MainScreenView = styled(View)`
  flex: 1;
  flexDirection: column;
  backgroundColor: ${(props) =>
    props.theme ? props.theme.colors.BACKGROUND : "transparent"};
`;

/* prettier-ignore */
export const AdvertCarouselContainer = styled(View)`
flex: 1;
alignItems: center;
`;

/* prettier-ignore */
export const SlideView = styled(View)`
  width: ${ItemWidth}px;
  height: ${SlideHeight}px;
  paddingHorizontal: ${itemHorizontalMargin}px;
  paddingVertical: ${itemVerticalMargin}px;
`;

/* prettier-ignore */
export const SlideInner = styled(Card)`
  flex: 1;
  borderRadius: 10px;
  elevation: 6;
`;

/* prettier-ignore */
export const ImageContainer = styled(Image)`
flex: 1;
borderRadius: 10px;
`;

/* prettier-ignore */
export const RoundedView = styled(View)`
  width: ${(props) => (props.size ? props.size : "45")}px;
  height: ${(props) => (props.size ? props.size : "45")}px;
  justifyContent: center;
  alignItems: center;
  padding: 10px;
  borderRadius: ${(props) => (props.size ? props.size : "45")}px;
  backgroundColor: ${(props) => (props.bgcolor ? props.bgcolor : "#696969")};
`;

/* prettier-ignore */
export const ButtonAdvertContainer = styled(View)`
 flex: 1;
 borderRadius: 8px;
 position: absolute;
 right: 10px;
 zIndex: 1;
 bottom: 20px;
 top: 20px;
 justifyContent: center;
`;

/* prettier-ignore */
export const ButtonAdvertInnerContainer = styled(View)`
 flex: 1;
 justifyContext: space-around;
`;

/* prettier-ignore */
export const BottomLeftContainer = styled(View)`
 flex: 1;
 borderRadius: 8px;
 position: absolute;
 left: 10px;
 zIndex: 1;
 bottom: 13px;
 justifyContent: center;
 flexDirection: column;
`;

/* prettier-ignore */
export const LogoCompanyNameContainer = styled(View)`
 flexDirection: row;
 alignItems: center;
`;

/* prettier-ignore */
export const LogoImageStyled = styled(Image)`
width: ${(props) => (props.size ? props.size : "50")}px;
height: ${(props) => (props.size ? props.size : "50")}px;
borderRadius: ${(props) => (props.size ? props.size : "50")}px;
marginRight: 5px;
resizeMode: contain;
`;

/* prettier-ignore */
export const BottomRightContainer = styled(View)`
flex: 1;
borderRadius: 8px;
position: absolute;
right: 10px;
zIndex: 1;
bottom: 10px;
justifyContent: center;
alignItems: center;
overflow: hidden;
flexDirection: column;
`;

export const LogoImageContainer = ({ source, size }) => {
  return <LogoImageStyled source={{ uri: source }} size={size} />;
};

export const RoundedButton = ({
  name,
  size,
  bgcolor,
  iconcolor,
  iconsize,
  onpress,
}) => {
  return (
    <TouchableOpacity onPress={onpress} activeOpacity={0.8}>
      <RoundedView size={size} bgcolor={bgcolor}>
        <SvgIcon
          name={name}
          width={iconsize}
          height={iconsize}
          iconcolor={iconcolor}
        />
      </RoundedView>
    </TouchableOpacity>
  );
};

export const ButtonContainer = ({
  name,
  label,
  size,
  bgcolor,
  iconcolor,
  iconsize,
  onpress,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <RoundedButton
        name={name}
        size={size}
        bgcolor={bgcolor}
        iconcolor={iconcolor}
        iconsize={iconsize}
        onpress={onpress}
      />
      <Text style={{ fontFamily: "Oswald_500Medium", color: "white" }}>
        {label}
      </Text>
    </View>
  );
};

export const PlayButtonContainerStyle = ({
  name,
  label,
  size,
  bgcolor,
  iconcolor,
  iconsize,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <RoundedView size={size} bgcolor={bgcolor}>
        <SvgIcon
          name={name}
          width={iconsize}
          height={iconsize}
          iconcolor={iconcolor}
        />
      </RoundedView>
      <Text style={{ fontFamily: "Oswald_500Medium", color: "white" }}>
        {label}
      </Text>
    </View>
  );
};

export const AdvertCarousel = ({ data, renderItem }) => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={SliderWidth}
      sliderHeight={SlideHeight}
      itemWidth={ItemWidth}
      itemHeight={SlideHeight}
      inactiveSlideShift={0}
      scrollInterpolator={scrollInterpolator}
      slideInterpolatedStyle={animatedStyles}
      useScrollView={true}
      vertical={true}
      activeSlideOffset={1}
      enableSnap={true}
    />
  );
};

//[Start] - Social Media Modal

/* prettier-ignore */
const UpperContainer = styled(View)`
flex: 10;
`;

/* prettier-ignore */
const BottomContainer = styled(View)`
flex: 5;
padding-top: 10px;
padding-horizontal: 10px;
`;

/* prettier-ignore */
const BottomInnerContainer = styled(View)`
flex: 1;
background-color: white;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
padding-top: 25px;
padding-horizontal: 25px;
flex-direction: column;
`;

/* prettier-ignore */
const HeaderModalContainer = styled(View)`
flex-direction: row;
`;

/* prettier-ignore */
const HeaderModalLeftContainer = styled(View)`
flex: 1;
align-items: flex-start;
`;

/* prettier-ignore */
const HeaderModalRightContainer = styled(View)`
flex: 1;
align-items: flex-end;
`;

/* prettier-ignore */
const TitleModalContainer = styled(View)`
align-items: flex-start;
margin-top: 10px;
`;

/* prettier-ignore */
const DescriptionModalContainer = styled(View)`
align-items: flex-start;
`;

/* prettier-ignore */
const SocialMediaContainer = styled(View)`
margin-top: 25px;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
`;

//props.visible
//props.onDismiss
//props.onPressClose
//props.theme
//props.data.logoURI
export const ShareModalContainer = (props) => {
  return (
    <Modal
      visible={props.visible}
      onDismiss={props.onDismiss}
      contentContainerStyle={{ flex: 1, flexDirection: "column" }}
    >
      <UpperContainer />
      <BottomContainer>
        <BottomInnerContainer>
          <HeaderModalContainer>
            <HeaderModalLeftContainer>
              <LogoImageContainer source={props.logoURI} size={25} />
            </HeaderModalLeftContainer>
            <HeaderModalRightContainer>
              <TouchableOpacity onPress={props.onDismiss} activeOpacity={0.8}>
                <SvgIcon
                  name={"XMARK"}
                  height={25}
                  width={25}
                  iconcolor={props.theme.colors.TERTIARY}
                />
              </TouchableOpacity>
            </HeaderModalRightContainer>
          </HeaderModalContainer>
          <TitleModalContainer>
            <Text
              style={{
                fontFamily: props.theme.typography.PRIMARY,
                fontSize: 15,
                textTransform: "uppercase",
              }}
            >
              SHARE THIS ADVERT
            </Text>
          </TitleModalContainer>
          <DescriptionModalContainer>
            <Text
              style={{
                fontFamily: props.theme.typography.PRIMARY,
                fontSize: 10,
                textTransform: "uppercase",
                color: props.theme.colors.SECONDARY,
              }}
            >
              SHARE THIS ADVERT WITH YOUR FRIENDS &amp; FAMILY
            </Text>
          </DescriptionModalContainer>
          <SocialMediaContainer>
            <TouchableOpacity
              onPress={() => props.shareToSocial(Share.Social.WHATSAPP)}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../../../assets/whatsapp_icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.shareToSocial(Share.Social.FACEBOOK)}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../../../assets/facebook_icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.shareToSocial(Share.Social.TWITTER)}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../../../assets/twitter_icon.png")}
                style={{ height: 50, width: 50 }}
              />
            </TouchableOpacity>
          </SocialMediaContainer>
        </BottomInnerContainer>
      </BottomContainer>
    </Modal>
  );
}; //[End] - Social Media Modal
