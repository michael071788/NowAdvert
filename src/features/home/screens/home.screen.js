import React from "react";
import { Image, Text, View } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import TicketIcon from "../../../../assets/ticket_icon";
import {
  CommonView,
  InnerContentView,
} from "../../../infrastucture/theme/styles/home.screen.style";

export const HomeScreen = () => {
  const theme = UsedTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.BACKGROUND,
        paddingTop: 20,
        paddingHorizontal: 5,
        paddingBottom: tabBarTotalHeight + 10,
      }}
    >
      <CommonView flex={3}>
        <InnerContentView>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: theme.colors.PRIMARY,
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              2,000
            </Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: -20, // Use this to overlap just a little bit

                paddingRight: 5,
              }}
            >
              <TicketIcon
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                  fill: theme.colors.PRIMARY,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: theme.colors.PRIMARY,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                EARNED
              </Text>
            </View>
          </View>
        </InnerContentView>
      </CommonView>

      <CommonView flex={1} backgroundColor={theme.colors.SECONDARY}>
        <InnerContentView>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                alignContent: "flex-start",
                flexDirection: "column",
                marginRight: 10,
                paddingTop: 2,
              }}
            >
              <Image
                source={require("../../../../assets/google_play.png")}
                style={{
                  width: 90,
                  height: 25,
                  resizeMode: "stretch",
                  marginBottom: 5,
                }}
              />
              <Image
                source={require("../../../../assets/app_store.png")}
                style={{
                  width: 90,
                  height: 26,
                  resizeMode: "stretch",
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 17,
                  color: theme.colors.PRIMARY,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                INVITE YOUR FRIENDS TO
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: theme.colors.PRIMARY,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                DOWNLOAD THE APP
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: theme.colors.PRIMARY,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                AND GET 50 FOR EACH FRIEND
              </Text>
            </View>
          </View>
        </InnerContentView>
      </CommonView>

      <CommonView flex={2} backgroundColor={theme.colors.SECONDARY}>
        <InnerContentView>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.BACKGROUND,
                width: 155,
                height: 25,
                borderRadius: 15,
              }}
            >
              <Text
                syle={{
                  color: theme.colors.PRIMARY,
                  fontSize: 17,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                LIMITED TIME OFFER
              </Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image
                source={require("../../../../assets/apple_logo.png")}
                style={{
                  width: 45,
                  height: 55,
                  resizeMode: "stretch",
                  marginTop: 5,
                  marginBottom: 5,
                  marginRight: 20,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: theme.colors.PRIMARY,
                    fontFamily: theme.typography.PRIMARY,
                  }}
                >
                  YOUR CHANCE TO WIN AN
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: theme.colors.PRIMARY,
                    fontFamily: theme.typography.PRIMARY,
                  }}
                >
                  APPLE GIFT CARD!
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.colors.PRIMARY,
                    borderRadius: 15,
                    width: 135,
                    height: 28,
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.BACKGROUND,
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    SEE MECHANICS
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </InnerContentView>
      </CommonView>
    </View>
  );
};
