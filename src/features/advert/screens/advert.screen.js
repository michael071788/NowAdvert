import React from "react";
import { TouchableOpacity, View } from "react-native";
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
import { BlurView } from "expo-blur";
import { UsedPrimaryAppContext } from "../../../services/primary.app.provider";

export const AdvertScreen = ({ navigation }) => {
  const theme = UsedTheme();

  const primaryContext = UsedPrimaryAppContext();

  const renderItem = ({ item }) => {
    // Having an error on using themes here, still looking for a solution
    return (
      <SlideView>
        <SlideInner>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              navigation.push("AdvertVideoScreen", {
                id: item.id,
                videoURI: item.videoURI,
              });
              primaryContext.ShowUserProfileBar(false);
            }}
            activeOpacity={0.8}
          >
            <ImageContainer source={{ uri: item.imageURI }} />
          </TouchableOpacity>
          <View
            style={{
              // borderColor: "rgba(0,0,0,0.2)",
              // backgroundColor: "#6638f0",
              // borderWidth: 4,
              height: 500,
              width: 110,
              borderRadius: 8,
              position: "absolute",
              left: 190,
              zIndex: 1,
              alignContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "#906ff2",
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
                <BlurView
                  intensity={75}
                  tint={"dark"}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 35,
                    borderRadius: 30,
                  }}
                >
                  <ButtonContainer name={"HEART"} label={"1.5k"} />
                  <ButtonContainer name={"EYE"} label={"300"} />
                  <ButtonContainer name={"SHARE"} label={"200"} />
                </BlurView>
              </View>
            </View>
          </View>
        </SlideInner>
      </SlideView>
    );
  };

  return (
    <MainScreenView theme={theme}>
      <AdvertCarousel data={MOCK_ADVERT_LIST} renderItem={renderItem} />
    </MainScreenView>
  );
};
