import React from "react";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { MOCK_ADVERT_LIST } from "../../../infrastucture/mockup/data.list";
import {
  AdvertCarousel,
  ImageContainer,
  MainScreenView,
  SlideView,
  SlideInner,
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
      <AdvertCarousel data={MOCK_ADVERT_LIST} renderItem={renderItem} />
    </MainScreenView>
  );
};
