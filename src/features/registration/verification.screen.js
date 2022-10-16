import React, { useState } from "react";
import {
  View,
  Text,
  // KeyboardAvoidingView,
  // StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  // Keyboard,
  // SafeAreaView,
  // ScrollView,
} from "react-native";
import { HeaderText } from "../../infrastucture/theme/styles/auth.components";
import UsedTheme from "../../infrastucture/theme/use.theme";

const inputs = Array(4).fill("");
// let newInputIndex = 0;

// const isObjValid = (obj) => {
//   return Object.values(obj).every((val) => val.trim());
// };

const Verification = ({ route, navigation }) => {
  const theme = UsedTheme();
  // const { profile } = route.params;
  // const input = useRef();

  //==========================
  // const [OTP, setOTP] = useState({ 1: "", 2: "", 3: "", 4: "" });
  // const [nextInputIndex, setNextInputIndex] = useState(0);
  //==========================

  // const handleChangeText = (text, index) => {
  //   const newOTP = { ...OTP };
  //   newOTP[index] = text;
  //   setOTP(newOTP);

  //   lastInputIndex = inputs.length - 1;
  //   if (!text)
  //     newInputIndex = index === lastInputIndex ? lastInputIndex : index - 1;
  //   else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;

  //   setNextInputIndex(newInputIndex);
  // };

  // useEffect(() => {
  //   input.current.focus();
  // }, [nextInputIndex]);

  // const submitOTP = async () => {
  //   Keyboard.dismiss();

  //   if (isObjValid(OTP)) {
  //     let val = "";

  //     Object.values(OTP).forEach((v) => {
  //       val += v;
  //     });
  //     // const rest = await verifyEmail(val, profile.id);
  //   }
  // };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 11,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <View
            style={
              {
                // marginBottom: 5,
              }
            }
          >
            <HeaderText
              title="ENTER OTP"
              subtitle="WE'VE SENT YOU A CODE XXX XXXX 123"
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
                  height: 60,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  // value={OTP[index]}
                  // onChangeText={(text) => handleChangeText(text, index)}
                  placeholder="0"
                  keyboardType="numeric"
                  maxLength={1}
                  style={{
                    fontSize: 18,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    backgroundColor: "#ddd",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                  // ref={nextInputIndex === index ? input : null}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#333",
              borderRadius: 20,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
              // marginVertical: 10,
            }}
            // onPress={handleSubmit(onSubmit)}
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
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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

const { width } = Dimensions.get("window");
const inputWidth = Math.round(width / 6);

export default Verification;
