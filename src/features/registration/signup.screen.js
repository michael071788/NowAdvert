import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  HeaderText,
  Input,
} from "../../infrastucture/theme/styles/auth.components";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-native-paper";
import { SvgIcon } from "../../components/svg.icon";
import { AxiosInstance } from "../../utils";
import axios from "axios";

const SignUp = ({ navigation }) => {
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
    },
  });
  const onSubmit = async (userData) => {
    try {
      await AxiosInstance.post("/api/users/signup", userData).then(
        (response) => {
          console.log("response", response.data);
          if (response.status === 201) {
            setResult(true);
            setMessage(response.data.message);
            showModal();
            setTimeout(() => {
              navigation.navigate("VerificationScreen", {
                userEmail: response.data.data.email,
              });
            }, 2000);
          }
        }
      );
    } catch (error) {
      setMessage(error.response.data.message);
      setResult(false);
      showModal();
    }
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 11,
        }}
      >
        <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 5,
              alignItems: "center",
              paddingVertical: 50,
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
              <HeaderText title="Sign up" subtitle="Create your account now" />
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
                {/* first name input */}
                <Controller
                  name="firstName"
                  control={control}
                  rules={{
                    required: "This is required",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      placeholder="First Name"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                <View style={{ height: 18, fontSize: 15 }}>
                  {errors.firstName && (
                    <Text style={{ color: "red" }}>This is required.</Text>
                  )}
                </View>
                {/* last name input */}
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    required: "This is required",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      placeholder="Last Name"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                <View style={{ height: 18, fontSize: 15 }}>
                  {errors.lastName && (
                    <Text style={{ color: "red" }}>This is required.</Text>
                  )}
                </View>
                {/* phone input */}
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "This is required",
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      keyboardType="numeric"
                      placeholder="Mobile Number"
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                <View style={{ height: 18, fontSize: 15 }}>
                  {errors.phone && (
                    <Text style={{ color: "red" }}>This is required.</Text>
                  )}
                </View>
                {/* password input */}
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      textTransform: "uppercase",
                      marginVertical: 10,
                      color: "#aaa",
                    }}
                  >
                    by signing up, you aggree to our
                    <Text
                      style={{
                        marginHorizontal: 5,
                        color: "#000",
                        fontFamily: theme.typography.PRIMARY,
                      }}
                      onPress={() =>
                        console.log("You agreed to our terms and condition")
                      }
                    >
                      {" "}
                      terms and conditions
                    </Text>
                    <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                      {" "}
                      and{" "}
                    </Text>
                    <Text
                      style={{
                        fontFamily: theme.typography.PRIMARY,
                        color: "#000",
                      }}
                      onPress={() =>
                        console.log("You agreed to our privacy policy")
                      }
                    >
                      PRIVACY POLICY
                    </Text>
                  </Text>
                  <View>
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
                        SIGN UP
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* end */}
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  height: 40,
                  flexDirection: "row",
                  alignItems: "flex-start",
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                    SIGN IN
                  </Text>
                </TouchableOpacity>
              </View>
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

export default SignUp;
