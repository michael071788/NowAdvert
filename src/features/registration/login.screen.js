import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import { UsedUserAuthInfoContext } from "../../services/user.auth.provider";
import {
  HeaderText,
  Input,
} from "../../infrastucture/theme/styles/auth.components";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-native-paper";
import { SvgIcon } from "../../components/svg.icon";
import { AxiosInstance } from "../../utils";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [result, setResult] = useState(false);
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 20,
  };

  const theme = UsedTheme();
  const userAuthInfoContext = UsedUserAuthInfoContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "WitchDoctor123@test.com",
      password: "P@ssword123",
    },
  });

  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    let login = await AsyncStorage.getItem("islogged");
    console.log(login);
    if (login == 1) {
      navigation.replace("AdvertScreen");
    }
  };
  const onSubmit = async (userData) => {
    try {
      await AxiosInstance.post("/api/login", userData).then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem("userData", JSON.stringify(response.data));
          AsyncStorage.setItem("token", JSON.stringify(response.data.token));
          AsyncStorage.setItem("islogged", "true");
          showModal();
          setResult(true);
          setMessage(response.data.message);
          setTimeout(() => {
            navigation.replace("AdvertScreen");
          }, 2000);
        }
      });
    } catch (error) {
      showModal();
      setResult(false);
      setMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    userAuthInfoContext.userInfo;
  }, [userAuthInfoContext]);

  return (
    <>
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
              paddingVertical: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "baseline",
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
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* start of modal */}
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={{ paddingHorizontal: 20 }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <SvgIcon
            name={result ? "CIRCLECHECKMARK" : "CIRCLEXMARK"}
            width={40}
            height={40}
            iconcolor={result ? "green" : "red"}
          />
          <Text
            style={{
              color: result ? "green" : "red",
              fontFamily: theme.typography.PRIMARY,
              fontSize: 20,
            }}
          >
            {result ? "Success" : "Error"}
          </Text>
          <Text
            style={{
              fontFamily: theme.typography.PRIMARY,
              marginTop: 4,
              marginBottom: 10,
              fontSize: 20,
            }}
          >
            {message.charAt(0).toUpperCase() + message.slice(1).toLowerCase()}
          </Text>
        </View>
      </Modal>

      {/* end of modal */}
    </>
  );
};
export default Login;
