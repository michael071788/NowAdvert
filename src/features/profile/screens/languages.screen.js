import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  Image,
  ScrollView,
} from "react-native";

import { useTranslation } from "react-i18next";

import ArabicFlag from "../../../../assets/ae.svg";
import EnglishFlag from "../../../../assets/gb.svg";
import PhFlag from "../../../../assets/ph.svg";

const LanguageScreen = ({ navigation }) => {
  const { i18n } = useTranslation();

  const languages = [
    {
      id: 1,
      language: "Arabic",
      code: "arab",
      flag: <ArabicFlag />,
    },
    {
      id: 2,
      language: "English",
      code: "eng",
      flag: <EnglishFlag />,
    },
    {
      id: 3,
      language: "Tagalog",
      code: "fil",
      flag: <PhFlag />,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
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
              navigation.goBack();
            }}
          >
            <View style={{ flex: 1, height: 40 }}>{item.flag}</View>
            <Text style={{ flex: 4 }}>{item.language}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LanguageScreen;
