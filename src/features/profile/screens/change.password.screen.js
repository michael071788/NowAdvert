import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import {
  CommonView,
  InnerContentView,
} from "../../../infrastucture/theme/styles/user.profile.style";

export default ChangePassword = () => {
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
        {/* end of profile */}

        {/* start input field */}
        <SafeAreaView
          style={{ width: "100%", flex: 1, padding: 10, paddingHorizontal: 20 }}
        >
          <View>
            <View style={{ width: "100%", marginVertical: 10 }}>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  color: "#aaa",
                  textTransform: "uppercase",
                }}
              >
                current password
              </Text>
              <TextInput
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  borderBottomColor: "#aaa",
                  borderBottomWidth: 1,
                  paddingVertical: 2,
                  fontSize: 22,
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
                secureTextEntry={true}
              />
            </View>

            <View style={{ width: "100%", marginVertical: 10 }}>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  color: "#aaa",
                  textTransform: "uppercase",
                }}
              >
                new password
              </Text>
              <TextInput
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  borderBottomColor: "#aaa",
                  borderBottomWidth: 1,
                  paddingVertical: 2,
                  fontSize: 22,
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
                secureTextEntry={true}
              />
            </View>

            <View style={{ width: "100%", marginVertical: 10 }}>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  color: "#aaa",
                  textTransform: "uppercase",
                }}
              >
                confirm password
              </Text>
              <TextInput
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  borderBottomColor: "#aaa",
                  borderBottomWidth: 1,
                  paddingVertical: 2,
                  fontSize: 22,
                  fontWeight: "bold",
                  letterSpacing: 2,
                }}
                secureTextEntry={true}
              />
            </View>
          </View>
          {/* end of input field  */}

          {/* button */}
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 150,
                  backgroundColor: "#333",
                  borderRadius: 20,
                  paddingVertical: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  UPDATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* end of button */}
      </ScrollView>
    </CommonScreenView>
  );
};
