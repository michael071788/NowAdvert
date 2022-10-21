import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  SafeAreaView,
  ScrollView,
} from "react-native";
import UsedProfile from "../../../services/use.user.profile";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import { Divider, List } from "react-native-paper";

import { useTranslation } from "react-i18next";

import ArabicFlag from "../../../../assets/ae.svg";
import EnglishFlag from "../../../../assets/us.svg";
import PhFlag from "../../../../assets/ph.svg";

const LanguageScreen = ({ navigation }) => {
  const theme = UsedTheme();

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const contextProfile = UsedProfile();

  const languages = [
    {
      id: 1,
      language: "Arabic",
      code: "arab",
      flag: <ArabicFlag width={50} height={30} />,
    },
    {
      id: 2,
      language: "English",
      code: "eng",
      flag: <EnglishFlag width={50} height={30} />,
    },
    {
      id: 3,
      language: "Tagalog",
      code: "fil",
      flag: <PhFlag width={50} height={30} />,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // setLocation("Profile Screen");
            navigation.navigate("ProfileScreen");
          }}
        >
          <List.Icon icon="chevron-left" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: theme.typography.PRIMARY,
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          {t("CHOOSE LANGUAGE")}
        </Text>
      </View>
      <Divider />
      <ScrollView>
        {languages.map((item) => (
          <TouchableOpacity
            key={item.code}
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
            }}
            onPress={() => {
              i18n.changeLanguage(item.code);
              // .then(() => {
              //   I18nManager.forceRTL(item.code);
              // });
              contextProfile.SetCurrentLanguage(item.code);
              navigation.goBack();

              var selectedLanguage = languages.filter(
                (x) => x.code == item.code
              );
              // console.log("_temp: ", selectedLanguage[0].language);
              contextProfile.SetCurrentLanguage(selectedLanguage[0].language);
            }}
          >
            <View style={{ flex: 1, height: 30 }}>{item.flag}</View>
            <Text style={{ flex: 4, fontFamily: theme.typography.PRIMARY }}>
              {item.language}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LanguageScreen;
