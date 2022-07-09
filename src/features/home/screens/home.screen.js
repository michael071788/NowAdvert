import React from "react";
import { Text, View } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import TicketIcon from "../../../../assets/ticket_icon";

export const HomeScreen = () => {
  const theme = UsedTheme();

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "green",
        backgroundColor: theme.colors.BACKGROUND,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: tabBarTotalHeight + 10,
      }}
    >
      <View
        style={{
          flex: 3,
          // backgroundColor: "#EE2C38",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "#ed454f",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text
              style={{
                fontSize: 80,
                color: theme.colors.PRIMARY,
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              2,000
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: -16, // Use this to overlap just a little bit
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
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: "#FAA030",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.SECONDARY,
            flex: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // , backgroundColor: "#b0b0b0"
            }}
          >
            <View style={{ flexDirection: "column", marginRight: 10 }}>
              <Text>11111111111</Text>
              <Text>22222222222</Text>
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
        </View>
      </View>
      <View
        style={{
          flex: 2,
          // backgroundColor: "#32B76C",
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.SECONDARY,
            flex: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              // backgroundColor: "#b0b0b0",
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
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text>222222222 </Text>
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
                    width: 155,
                    height: 25,
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{
                      color: theme.colors.BACKGROUND,
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                    }}
                  >
                    SEE MECHANICS
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
