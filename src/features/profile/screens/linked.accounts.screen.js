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
import UsedTheme from "../../../infrastucture/theme/use.theme";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";

// import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
// import {
//   CommonView,
//   InnerContentView,
// } from "../../../infrastucture/theme/styles/user.profile.style";
// import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";

const LinkedAccounts = () => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Linked Accounts");
  }, [contextProfile]);

  return (
    // <CommonScreenView theme={theme}>
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      {/* start input field */}
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
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
              {t("google")}
            </Text>
            <TextInput
              style={{
                fontFamily: theme.typography.PRIMARY,
                borderBottomColor: "#aaa",
                borderBottomWidth: 1,
                paddingVertical: 2,
                fontSize: 22,
                fontWeight: "bold",
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              {t("facebook")}
            </Text>
            <TextInput
              style={{
                fontFamily: theme.typography.PRIMARY,
                borderBottomColor: "#aaa",
                borderBottomWidth: 1,
                paddingVertical: 2,
                fontSize: 22,
                fontWeight: "bold",
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              {t("twitter")}
            </Text>
            <TextInput
              style={{
                fontFamily: theme.typography.PRIMARY,
                borderBottomColor: "#aaa",
                borderBottomWidth: 1,
                paddingVertical: 2,
                fontSize: 22,
                fontWeight: "bold",
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#aaa",
                textTransform: "uppercase",
              }}
            >
              {t("instagram")}
            </Text>
            <TextInput
              style={{
                fontFamily: theme.typography.PRIMARY,
                borderBottomColor: "#aaa",
                borderBottomWidth: 1,
                paddingVertical: 2,
                fontSize: 22,
                fontWeight: "bold",
              }}
            />
          </View>
        </View>
        {/* end of input field  */}

        {/* button */}

        <View
          style={{
            marginTop: 20,
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
      </SafeAreaView>
      {/* end of button */}
    </ScrollView>
    // </CommonScreenView>
  );
};
export default LinkedAccounts;
