import React from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import {
  CommonView,
  InnerContentView,
} from "../../../infrastucture/theme/styles/user.profile.style";
import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";

const ChangePassword = () => {
  const theme = UsedTheme();
  return (
    <CommonScreenView theme={theme} paddingBottom={tabBarTotalHeight + 10}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {/* start of profile */}
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
                style={{ height: 150, width: 150 }}
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
        {/* end of profile */}

        {/* start input field */}
        <SafeAreaView
          style={{ width: "100%", flex: 1, padding: 10, paddingHorizontal: 20 }}
        >
          <View>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  color: "#aaa",
                }}
              >
                CURRENT PASSWORD
              </Text>
              <TextInput
                secureTextEntry
                style={{
                  backgroundColor: "transparent",
                  borderBottomWidth: 1,
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 30,
                  paddingHorizontal: 0,
                }}
              />
            </View>

            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  color: "#aaa",
                  fontWeight: "bold",
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                CURRENT PASSWORD
              </Text>
              <TextInput
                secureTextEntry
                style={{
                  backgroundColor: "transparent",
                  borderBottomWidth: 1,
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 30,
                  paddingHorizontal: 0,
                }}
              />
            </View>

            <View style={{ marginVertical: 10 }}>
              <Text
                style={{
                  color: "#aaa",
                  fontWeight: "bold",
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                CURRENT PASSWORD
              </Text>
              <TextInput
                secureTextEntry
                style={{
                  backgroundColor: "transparent",
                  borderBottomWidth: 1,
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 30,
                  paddingHorizontal: 0,
                }}
              />
            </View>
          </View>
          {/* end of input field  */}

          {/* button */}
          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              mode="contained"
              buttonColor="#000"
              style={{
                width: "50%",
                borderRadius: 20,
                backgroundColor: "#333",
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              LOGIN
            </Button>
          </View>

          {/* end of button */}
        </SafeAreaView>
      </ScrollView>
    </CommonScreenView>
  );
};
export default ChangePassword;
