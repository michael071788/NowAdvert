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

export default Login = ({ navigation }) => {
  const theme = UsedTheme();

  return (
    <CommonScreenView theme={theme} paddingBottom={tabBarTotalHeight + 10}>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {/* start input field */}
        <SafeAreaView
          style={{
            width: "100%",
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 120,
          }}
        >
          <View>
            <View>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontWeight: "bold",
                  fontSize: 30,
                  textTransform: "uppercase",
                }}
              >
                login
              </Text>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 12,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                watch ads to win exciting prizes
              </Text>
            </View>
            <View style={{ marginVertical: 18 }}>
              <View style={{ width: "100%", marginVertical: 5 }}>
                <TextInput
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    borderRadius: 20,
                    padding: 2,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    backgroundColor: "#ccc",
                    fontWeight: "bold",
                  }}
                  placeholder="EMAIL ADDRESS"
                  placeholderTextColor="#aaa"
                />
              </View>

              <View style={{ width: "100%", marginVertical: 10 }}>
                <TextInput
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    borderRadius: 20,
                    padding: 2,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    backgroundColor: "#ccc",
                    fontWeight: "bold",
                  }}
                  placeholder="PASSWORD"
                  secureTextEntry={true}
                  placeholderTextColor="#aaa"
                />
              </View>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  textTransform: "uppercase",
                  alignSelf: "flex-end",
                }}
              >
                forgot password?
              </Text>
            </View>
          </View>

          {/* button */}
          <View>
            <TouchableOpacity>
              <View
                style={{
                  width: "100%",
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
                    textTransform: "uppercase",
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  login
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  textAlign: "center",
                }}
              >
                - OR -
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity>
                <View
                  style={{
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 20,
                    paddingVertical: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      textTransform: "uppercase",
                      fontSize: 18,
                      color: "#333",
                    }}
                  >
                    continue with google
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#000",
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
                      textTransform: "uppercase",
                      fontSize: 18,
                      color: "#333",
                    }}
                  >
                    continue with apple
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 100,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontFamily: theme.typography.PRIMARY, color: "#aaa" }}
            >
              NEW USER?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SIGNUP")}>
              <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* end of button */}
      </ScrollView>
    </CommonScreenView>
  );
};
