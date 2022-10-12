import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../infrastucture/theme/styles/container.screen.style";
import { tabBarTotalHeight } from "../../infrastucture/theme/styles/app.navigator.style";

const SignUp = ({ navigation }) => {
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
                signup
              </Text>
              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  fontSize: 12,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                create your account now
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
                  placeholder="FIRST & LAST NAME"
                  placeholderTextColor="#aaa"
                />
              </View>

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
                  placeholder="MOBILE NUMBER"
                  placeholderTextColor="#aaa"
                />
              </View>

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
                  placeholder="PASSWORD"
                  placeholderTextColor="#aaa"
                  secureTextEntry={true}
                />
              </View>

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
                  placeholder="CONFIRM PASSWORD"
                  secureTextEntry={true}
                  placeholderTextColor="#aaa"
                />
              </View>
              {/* end of input fields */}

              <Text
                style={{
                  fontFamily: theme.typography.PRIMARY,
                  textTransform: "uppercase",
                  marginVertical: 10,
                  color: "#aaa",
                }}
              >
                by signing up, you aggre to our
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontWeight: "bold",
                    marginHorizontal: 5,
                    color: "#000",
                  }}
                  onPress={() => alert("You agreed to our terms and condition")}
                >
                  {" "}
                  terms and condition{" "}
                </Text>
                and
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    fontWeight: "bold",
                    color: "#000",
                  }}
                  onPress={() => alert("You agreed to our privacy policy")}
                >
                  {" "}
                  PRIVACY PLOICY
                </Text>
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
                  sign up
                </Text>
              </View>
            </TouchableOpacity>
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
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#aaa",
                textTransform: "uppercase",
                marginRight: 5,
              }}
            >
              already a user?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LOGIN")}>
              <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* end of button */}
      </ScrollView>
    </CommonScreenView>
  );
};

export default SignUp;
