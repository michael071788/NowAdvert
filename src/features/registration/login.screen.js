import React from "react";
import { View, ScrollView, Text, SafeAreaView, TextInput } from "react-native";
import { Button } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import { tabBarTotalHeight } from "../../infrastucture/theme/styles/app.navigator.style";

const Login = ({ navigation }) => {
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
            <Button mode="contained" buttonColor="#333">
              LOGIN
            </Button>

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
              <Button
                mode="outlined"
                color="#000"
                textColor="#000"
                style={{ marginBottom: 20 }}
                onPress={() => alert("pressed")}
              >
                CONTINUE WITH GOOGLE
              </Button>
            </View>

            <View style={{ marginBottom: 10 }}>
              <Button
                mode="outlined"
                color="#000"
                textColor="#000"
                style={{ marginBottom: 20 }}
                onPress={() => alert("pressed")}
              >
                CONTINUE WITH APPLE
              </Button>
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

            <Button
              mode="contained"
              onPress={() => navigation.navigate("SIGNUP")}
              buttonColor="#000"
              style={{
                width: "50%",
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              SIGN UP
            </Button>
          </View>
        </SafeAreaView>
        {/* end of button */}
      </ScrollView>
    </CommonScreenView>
  );
};
export default Login;
