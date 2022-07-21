import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { ViewportWidth, ViewportHeight, WinPix } from "../../../utils/index";

export const SlideHeight = ViewportHeight * 0.77;
const slideWidth = WinPix(86);
const itemHorizontalMargin = WinPix(3);
const itemVerticalMargin = WinPix(5);

export const SliderWidth = ViewportWidth;
export const ItemWidth = slideWidth + itemHorizontalMargin * 2;

/* prettier-ignore */
export const MainScreenView = styled(View)`
  flex: 1;
  alignItems: center;
  backgroundColor: ${(props) =>
    props.theme ? props.theme.colors.BACKGROUND : "transparent"};
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
