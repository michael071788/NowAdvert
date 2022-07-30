import React from "react";
import { Text, View } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { MOCK_ADVERT_LIST } from "../../../infrastucture/mockup/data.list";
import {
  AdvertCarousel,
  ImageContainer,
  MainScreenView,
  SlideView,
  SlideInner,
} from "../../../infrastucture/theme/styles/advert.screen.style";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";

export const AdvertScreen = () => {
  const theme = UsedTheme();

  return (
    <MainScreenView theme={theme}>
      <AdvertCarousel data={MOCK_ADVERT_LIST} renderItem={renderItem} />
    </MainScreenView>
  );
};

const renderItem = ({ item }) => {
  // Having an error on using themes here, still looking for a solution
  return (
    <SlideView>
      <SlideInner>
        <ImageContainer source={{ uri: item.imageURI }} />
        <View
          style={{
            borderColor: "rgba(0,0,0,0.2)",
            backgroundColor: "#6638f0",
            borderWidth: 4,
            height: 500,
            width: 110,
            borderRadius: 8,
            position: "absolute",
            left: 195,
            zIndex: 1,
            alignContent: "center",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#906ff2",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }} />

            <View style={{ flex: 2 }} />

            <View
              style={{
                flex: 5,
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonContainer name={"HEART"} label={"1.5k"} />
              <ButtonContainer name={"BOOKMARK"} label={"3.5k"} />
              <ButtonContainer name={"EYE"} label={"Save"} />
              <ButtonContainer name={"SHARE"} label={"200"} />
            </View>
          </View>
        </View>
      </SlideInner>
    </SlideView>
  );
};
