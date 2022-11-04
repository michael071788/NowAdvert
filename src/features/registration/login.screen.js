import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  // AsyncStorage,
} from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  HeaderText,
  Input,
} from "../../infrastucture/theme/styles/auth.components";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import UserInfo from "../../services/use.userInfo";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const BASE_URL = "https://protected-fjord-83078.herokuapp.com";
// const BASE_URL = "https://nowadvert-api.herokuapp.com";

const axiosInstance = axios.create({
  baseURL: "https://nowadvert-api.herokuapp.com",
});

const Login = ({ navigation }) => {
  // const [dataUser, setDataUser] = useState({});
  const [errorMesssage, setErrorMessage] = useState(null);
  const theme = UsedTheme();

  const contextUser = UserInfo();

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
  const onSubmit = async (userData) => {
    console.log("Pressed");
    console.log(userData);

    try {
      await axiosInstance.post("/api/login", userData).then((result) => {
        if (result.status === 200) {
          console.log(result.data.message);
          const userData = result.config.data;
          // AsyncStorage.setItem("userInfo", JSON.stringify(userData));
          console.log("success");
          contextUser.SetCurrentUserInfo(userData);
          console.log("data context user: ", contextUser.userInfo);
          // navigation.navigate("Login");
        } else if (result.status === 400) {
          console.log(result.data.message);
        } else if (result.status === 401) {
          console.log(result.data.message);
        }
      });
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMesssage);
    }
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
