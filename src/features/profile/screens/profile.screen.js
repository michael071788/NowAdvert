import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, List } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import {
  CommonView,
  InnerContentView,
} from "../../../infrastucture/theme/styles/user.profile.style";

// const accountDataList = [
//   {
//     id: 1,
//     title: "EDIT PROFILE",
//   },
//   {
//     id: 2,
//     title: "CHANGE PASSWORD",
//   },
//   {
//     id: 3,
//     title: "LINKED ACCOUNTS",
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress}>
//     <Text>{item.title}</Text>
//   </TouchableOpacity>
// );

export const ProfileScreen = ({ navigation }) => {
  const theme = UsedTheme();

  // const [selectedId, setSelectedId] = useState(null);

  // const renderItem = ({ item }) => {
  //   return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  // };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <CommonScreenView theme={theme} paddingBottom={tabBarTotalHeight + 10}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <CommonView flex={1}>
          <InnerContentView>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../assets/avatar_profile_icon.png")}
                style={{ height: 180, width: 180 }}
              />
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 20,
                  textTransform: "uppercase",
                }}
              >
                calum scott
              </Text>
              <Text
                style={{
                  color: theme.colors.SECONDARY,
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 15,
                  textTransform: "uppercase",
                }}
              >
                active: 26 May 2022
              </Text>
            </View>
          </InnerContentView>
        </CommonView>

        {/**START - ACCOUNT**/}
        <View
          style={{
            flex: 1,
            // backgroundColor: "#2138B0",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              flex: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              ACCOUNT
            </Text>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text>Register</Text>
            </TouchableOpacity>
            {/* Edit Profile */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Edit Profile")}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,

                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      textTransform: "uppercase",
                    }}
                  >
                    EDIT PROFILE
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <List.Icon icon="chevron-right" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Change Password */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Change Password")}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,

                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      textTransform: "uppercase",
                    }}
                  >
                    CHANGE PASSWORD
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <List.Icon icon="chevron-right" />
                </View>
              </View>
            </TouchableOpacity>
            {/* Linked Accounts */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Linked Accounts")}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,

                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      textTransform: "uppercase",
                    }}
                  >
                    LINKED ACCOUNTS
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <List.Icon icon="chevron-right" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/**END - ACCOUNT**/}

        {/**START - NOTIFICATION**/}
        <View
          style={{
            flex: 1,
            // backgroundColor: "#15CE0C",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              flex: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              NOTIFICATIONS
            </Text>
            <Divider />

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 4,

                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontSize: 15,
                    textTransform: "uppercase",
                  }}
                >
                  ALLOW NOTIFICATIONS
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Switch
                  trackColor={{ false: "#767577", true: "#46D60E" }}
                  thumbColor="#ffffff"
                  ios_backgroundColor="#767577"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
        </View>
        {/**END - NOTIFICATION**/}

        {/**START - TICKETS**/}
        <View
          style={{
            flex: 1,
            // backgroundColor: "#15CE0C",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              flex: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              TICKETS
            </Text>
            <Divider />
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,

                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      textTransform: "uppercase",
                    }}
                  >
                    VIEW MY TICKETS
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <List.Icon icon="chevron-right" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/**END - TICKETS**/}

        {/**START - LANGUAGE**/}
        <View
          style={{
            flex: 1,
            // backgroundColor: "#15CE0C",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              flex: 1,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              LANGUAGE
            </Text>
            <Divider />
            <TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 4,

                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      fontSize: 15,
                      textTransform: "uppercase",
                    }}
                  >
                    ENGLISH
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <List.Icon icon="chevron-right" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/**END - LANGUAGE**/}
      </ScrollView>
    </CommonScreenView>
  );
};
