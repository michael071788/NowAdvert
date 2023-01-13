import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { HeaderText } from "../../infrastucture/theme/styles/auth.components";
import UsedTheme from "../../infrastucture/theme/use.theme";
import UsedProfile from "../../services/use.user.profile";
import { AxiosInstance } from "../../utils";

const inputs = Array(4).fill("");
let newInputIndex = 0;

const isObjValid = (obj) => {
  return Object.values(obj).every((val) => val.trim);
};

const Verification = ({ route, navigation }) => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();

  const { userEmail } = route.params;

  const input = useRef();
  const [OTPVal, setOTPVal] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [nextInputIndex, setNextInputIndex] = useState(0);

  useEffect(() => {
    generateOtp();
  }, []);

  const generateOtp = async () => {
    console.log("email", userEmail);
    try {
      await AxiosInstance.post("/api/users/generate-otp", {
        email: userEmail,
      }).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const handleChangeText = (text, index) => {
    const newOTP = { ...OTPVal };
    newOTP[index] = text;
    setOTPVal(newOTP);

    const lastInputIndex = inputs.length - 1;
    if (!text) newInputIndex = index === 0 ? 0 : index - 1;
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    setNextInputIndex(newInputIndex);
  };

  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);

  const verifyOTP = () => {
    Keyboard.dismiss();

    if (isObjValid(OTPVal)) {
      let val = "";

      Object.values(OTPVal).forEach((v) => {
        val += v;
      });
      submitOTP(val);
      // console.log("otp", val);
    }
  };

  const submitOTP = async (otpVal) => {
    try {
      await AxiosInstance.post("/api/users/verify-otp", {
        email: userEmail,
        otp: otpVal,
      }).then((res) => {
        if (res.status === 200) {
          AsyncStorage.setItem("islogged", JSON.stringify(true));
          AsyncStorage.setItem("token", JSON.stringify(res.data.token));
          AsyncStorage.setItem("userData", JSON.stringify(res.data.user));
          contextProfile.SetUserData(res.data.user);
          navigation.navigate("AdvertScreen");
          // console.log("success ", res.data);
        }
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 11,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <View>
            <HeaderText
              title="ENTER OTP"
              subtitle="WE'VE SENT YOU A CODE TO XXX XXXX 123"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 20,
            }}
          >
            {inputs.map((inp, index) => (
              <View
                key={index.toString()}
                style={{
                  borderRadius: 20,
                }}
              >
                <TextInput
                  value={OTPVal[index]}
                  onChangeText={(text) => handleChangeText(text, index)}
                  ref={nextInputIndex === index ? input : null}
                  keyboardType="numeric"
                  maxLength={1}
                  style={{
                    borderRadius: 20,
                    backgroundColor: "#ddd",
                    fontSize: 25,
                    padding: 0,
                    textAlign: "center",
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                  }}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity
            onPress={verifyOTP}
            style={{
              backgroundColor: "#333",
              borderRadius: 20,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              VERIFY
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
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
                  DON'T RECEIVE A CODE?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                    RESEND
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* ----------------------------------- */}
    </View>
  );
};

// const { width } = Dimensions.get("window");
// const inputWidth = Math.round(width / 6);

export default Verification;
