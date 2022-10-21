import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  // Image,
  TouchableOpacity,
} from "react-native";

import UsedTheme from "../../../infrastucture/theme/use.theme";
// import {
//   CommonView,
//   InnerContentView,
// } from "../../../infrastucture/theme/styles/user.profile.style";
// import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
// import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";

const EditProfile = () => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Edit Profile");
  }, [contextProfile]);

  return (
    // <CommonScreenView theme={theme}>
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      {/* start input field */}

      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontFamily: theme.typography.PRIMARY,
              color: "#aaa",
              textTransform: "uppercase",
            }}
          >
            {t("NAME")}
          </Text>
          <TextInput
            style={{
              fontFamily: theme.typography.PRIMARY,
              borderBottomColor: "#aaa",
              borderBottomWidth: 1,
              paddingVertical: 2,
              fontSize: 22,
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
            {t("EMAIL")}
          </Text>
          <TextInput
            style={{
              fontFamily: theme.typography.PRIMARY,
              borderBottomColor: "#aaa",
              borderBottomWidth: 1,
              paddingVertical: 2,
              fontSize: 22,
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontFamily: theme.typography.PRIMARY, color: "#aaa" }}>
            {t("MOBILE NUMBER")}
          </Text>
          <TextInput
            style={{
              fontFamily: theme.typography.PRIMARY,
              borderBottomColor: "#aaa",
              borderBottomWidth: 1,
              paddingVertical: 2,
              fontSize: 22,
            }}
          />
        </View>
      </View>
      {/* end input field */}

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
      {/* end of button */}
    </ScrollView>
    // </CommonScreenView>
  );
};
export default EditProfile;
