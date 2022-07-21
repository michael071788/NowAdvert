import React from "react";
import Carousel from "react-native-snap-carousel";
import { scrollInterpolator, animatedStyles } from "../../../utils/animations";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { MOCK_ADVERT_LIST } from "../../../infrastucture/mockup/data.list";
import {
  ImageContainer,
  MainScreenView,
  SlideView,
  SlideInner,
  SliderWidth,
  SlideHeight,
  ItemWidth,
} from "../../../infrastucture/theme/styles/advert.screen.style";

const renderItem = ({ item }) => {
  return (
    <SlideView>
      <SlideInner>
        <ImageContainer source={{ uri: item.imageURI }} />
      </SlideInner>
    </SlideView>
  );
};

export const AdvertScreen = () => {
  const theme = UsedTheme();

  return (
    <MainScreenView theme={theme}>
      <Carousel
        data={MOCK_ADVERT_LIST}
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
      />
    </MainScreenView>
  );
};
