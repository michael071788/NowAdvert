import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  // Image,
  TouchableOpacity,
} from "react-native";
// import { Button } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
// import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
// import {
//   CommonView,
//   InnerContentView,
// } from "../../../infrastucture/theme/styles/user.profile.style";
// import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";

const ChangePassword = () => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Change Password");
  }, [contextProfile]);

  return (
    // <CommonScreenView theme={theme}>
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      {/* start of profile */}

      {/* start input field */}
      <SafeAreaView
        style={{ width: "100%", flex: 1, padding: 10, paddingHorizontal: 20 }}
      >
        <View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              {t("CURRENT PASSWORD")}
            </Text>
            <TextInput
              secureTextEntry
              style={{
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                fontFamily: theme.typography.PRIMARY,
                fontSize: 30,
                paddingHorizontal: 0,
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: "#aaa",
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              {t("NEW PASSWORD")}
            </Text>
            <TextInput
              secureTextEntry
              style={{
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                fontFamily: theme.typography.PRIMARY,
                fontSize: 30,
                paddingHorizontal: 0,
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                color: "#aaa",
                fontFamily: theme.typography.PRIMARY,
              }}
            >
              {t("CONFIRM PASSWORD")}
            </Text>
            <TextInput
              secureTextEntry
              style={{
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                fontFamily: theme.typography.PRIMARY,
                fontSize: 30,
                paddingHorizontal: 0,
              }}
            />
          </View>
        </View>
        {/* end of input field  */}

        {/* button */}
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              width: "50%",
              borderRadius: 20,
              backgroundColor: "#333",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {t("UPDATE")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* end of button */}
      </SafeAreaView>
    </ScrollView>
    // </CommonScreenView>
  );
};
export default ChangePassword;
