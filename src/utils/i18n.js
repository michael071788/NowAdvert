import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import resources from "./translation";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: I18nManager.isRTL ? "arab" : "eng",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    initImmediate: false,
  });

export default i18n;
