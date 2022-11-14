import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Divider, List } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";

const Tickets = ({ navigation }) => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");

  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Profile Screen");
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  const data = [
    {
      id: 1,
      ticketNumber: "000-01234567-4817-01",
      status: "ACTIVE",
      expiresIn: "02 November 2022",
    },
    {
      id: 2,
      ticketNumber: "000-01234567-4817-02",
      status: "EXPIRING SOON",
      expiresIn: "02 November 2022",
    },
    {
      id: 3,
      ticketNumber: "000-01234567-4817-03",
      status: "EXPIRED",
      expiresIn: "02 November 2022",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: language === "Arabic" ? "flex-end" : "flex-start",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // setLocation("Profile Screen");
            navigation.navigate("ProfileScreen");
          }}
        >
          <List.Icon
            icon={language === "Arabic" ? "chevron-right" : "chevron-left"}
            color="#fff"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: theme.typography.PRIMARY,
            fontSize: 20,
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {t("MY TICKETS")}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
        {data.map(({ ticketNumber, id, status, expiresIn }) => (
          <View
            key={id}
            style={{
              padding: 20,
              backgroundColor: "#fff",
              marginVertical: 10,
              borderRadius: 20,
            }}
          >
            <View style={{ flex: 1, paddingVertical: 10 }}>
              <Text
                style={{ fontFamily: theme.typography.PRIMARY, fontSize: 20 }}
              >
                NOW ADVERT
              </Text>
              <Divider />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 20,
                marginBottom: 20,
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: theme.typography.PRIMARY }}
              >
                TICKET NUMBER
              </Text>
              <Text
                style={{ fontSize: 10, fontFamily: theme.typography.PRIMARY }}
              >
                {ticketNumber}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: "#ddd",
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontFamily: theme.typography.PRIMARY }}>
                  {status}
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 10, fontFamily: theme.typography.PRIMARY }}
                >
                  EXPIRES ON
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: theme.typography.MONOSPACE,
                  }}
                >
                  {expiresIn}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tickets;
