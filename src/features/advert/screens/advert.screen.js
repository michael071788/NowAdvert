import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
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
import { SvgIcon } from "../../../components/svg.icon";

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
              flex: 1,
              borderRadius: 8,
              position: "absolute",
              right: 10,
              zIndex: 1,
              bottom: 20,
              top: 20,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
              }}
            >
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
                  <ButtonContainer name={"SHARE"} label={"200"} />
                </BlurView>
              </View>

              <View
                style={{
                  alignItems: "center",
                  overflow: "hidden",
                  borderRadius: 30,
                }}
              />
            </View>
          </View>

          <View
            style={{
              flex: 1,
              borderRadius: 8,
              position: "absolute",
              left: 10,
              zIndex: 1,
              bottom: 13,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.logoURI }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 5,
                  resizeMode: "contain",
                }}
              />

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
            </View>
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
          </View>

          <View
            style={{
              flex: 1,
              borderRadius: 8,
              position: "absolute",
              right: 10,
              zIndex: 1,
              bottom: 10,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              flexDirection: "column",
            }}
          >
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
