import React from "react";
import {
  View,
  ScrollView,
  Text,
  // SafeAreaView,
  TouchableOpacity,
  // TextInput,
  // StatusBar,
  // KeyboardAvoidingView,
} from "react-native";
import UsedTheme from "../../infrastucture/theme/use.theme";
import {
  HeaderText,
  Input,
} from "../../infrastucture/theme/styles/auth.components";
import { useForm, Controller } from "react-hook-form";
import { StackActions } from "@react-navigation/native";

const SignUp = ({ navigation }) => {
  const theme = UsedTheme();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      cpassword: "",
    },
  });
  const onSubmit = (data) => {
    // register(data);
    navigation.dispatch(StackActions.replace("Verify"));
    reset();
    // alert("Register Successfully!");
  };
  return (
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

              {/* name input */}
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "This is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="First & Last Name"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              <View style={{ height: 18, fontSize: 15 }}>
                {errors.name && (
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

              {/* confirm password input */}
              <Controller
                name="cpassword"
                control={control}
                rules={{
                  required: "This is required",
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Confirm Password"
                    onChangeText={onChange}
                    secureTextEntry={true}
                    value={value}
                  />
                )}
              />
              <View style={{ height: 18, fontSize: 15 }}>
                {errors.cpassword && (
                  <Text style={{ color: "red" }}>This is required.</Text>
                )}
                {watch("cpassword") !== watch("password") &&
                getValues("cpassword") ? (
                  <Text style={{ color: "red" }}>Password not match</Text>
                ) : null}
              </View>

              {/* link */}
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
                      alert("You agreed to our terms and condition")
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
                    onPress={() => alert("You agreed to our privacy policy")}
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
                      // marginVertical: 10,
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
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // justifyContent: "flex-end",
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
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
