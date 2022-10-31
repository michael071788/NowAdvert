import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  HeaderText,
  Input,
} from "../../infrastucture/theme/styles/auth.components";
import { useForm, Controller } from "react-hook-form";

// cannot POST user yet
// const BASE_URL = "https://protected-fjord-83078.herokuapp.com";
const BASE_URL = "https://nowadvert-api.herokuapp.com";

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState("");

  const theme = UsedTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (userData) => {
    // register(data);
    //navigation.dispatch(StackActions.replace("Verify"));
    // reset();

    fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        let userInfo = data;

        if (data.message) {
          alert(data.message);
        } else if (data.message === "User Login successfully") {
          setUserInfo(data);
          AsyncStorage.setItem("userInfo", userInfo);
        }
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}
    >
      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 5,
            // alignItems: "center",
            paddingVertical: 80,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "baseline",
              marginBottom: 5,
            }}
          >
            {/* header text */}
            <HeaderText
              title="Login"
              subtitle="WATCH ADS TO WIN EXCITING PRIZES"
            />

            <View style={{ flex: 3 }}>
              {/* email input */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "This is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Email is invalid",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="EMAIL ADDRESS"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              <View style={{ height: 18, fontSize: 15 }}>
                {errors.email ? (
                  <>
                    {errors.email.type === "required" && (
                      <Text style={{ color: "red" }}>
                        {errors.email.message}
                      </Text>
                    )}
                    {errors.email.type === "pattern" && (
                      <Text style={{ color: "red" }}>
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                ) : null}
              </View>

              {/* PASSWORD */}
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "This is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Password"
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                  />
                )}
              />
              <View style={{ height: 18, fontSize: 15 }}>
                {errors.password && (
                  <Text style={{ color: "red" }}>This is required.</Text>
                )}
              </View>
              {/* FORGOT PASSWORD */}
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginVertical: 10,
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: theme.typography.PRIMARY,
                    }}
                  >
                    FORGOT PASSWORD?
                  </Text>
                </TouchableOpacity>
              </View>
              {/* LOGIN BUTTON */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#333",
                  borderRadius: 20,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: theme.typography.PRIMARY,
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: "center",
                  marginVertical: 10,
                  fontFamily: theme.typography.PRIMARY,
                }}
              >
                - OR -{" "}
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#111",
                  borderRadius: 20,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
                //   onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{
                    color: "#111",
                    fontFamily: theme.typography.PRIMARY,
                  }}
                >
                  CONTINUE WITH GOOGLE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#111",
                  borderRadius: 20,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                //   onPress={handleSubmit(onSubmit)}
              >
                <Text
                  style={{
                    color: "#111",
                    fontFamily: theme.typography.PRIMARY,
                  }}
                >
                  CONTINUE WITH APPLE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* signup link */}
        <View
          style={{
            flex: 1,
            // justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              height: 40,
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
              NEW USER?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
