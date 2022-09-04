import React from "react";
import styled from "styled-components/native";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
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
width: 50px;
height: 50px;
borderRadius: 50px;
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

export const LogoImageContainer = ({ source }) => {
  return <LogoImageStyled source={{ uri: source }} />;
};

export const RoundedButton = ({ name, size, bgcolor, iconcolor, iconsize }) => {
  return (
    <RoundedView size={size} bgcolor={bgcolor}>
      <SvgIcon
        name={name}
        width={iconsize}
        height={iconsize}
        iconcolor={iconcolor}
      />
    </RoundedView>
  );
};

export const ButtonContainer = ({
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
      <RoundedButton
        name={name}
        size={size}
        bgcolor={bgcolor}
        iconcolor={iconcolor}
        iconsize={iconsize}
      />
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
