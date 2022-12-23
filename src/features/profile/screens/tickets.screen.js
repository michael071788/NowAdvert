import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Divider, List } from "react-native-paper";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "../../../utils";
import UsedCount from "../../../services/counts.user";

const Tickets = ({ navigation }) => {
  const [language, setLanguage] = useState("");
  const [userId, setUserId] = useState("");
  const [earnedTickets, setEarnedTickets] = useState([]);

  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  const countViewContext = UsedCount();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Profile Screen");
    setLanguage(contextProfile.currentLanguage);
  }, [contextProfile]);

  useEffect(() => {
    if (userId === "") {
      AsyncStorage.getItem("userData").then((value) => {
        const jsonData = JSON.parse(value);
        setUserId(jsonData.user._id);
      });
    }
  }, []);

  useEffect(() => {
    if (userId !== "") {
      getUserTicket();
    }
  }, [userId]);

  const getUserTicket = async () => {
    await AxiosInstance.get(`/user/${userId}`)
      .then((res) => {
        setEarnedTickets(res.data.earnedTickets);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
          flexDirection: language === "Arabic" ? "row-reverse" : "row",
          alignItems: "center",
          // justifyContent: language === "Arabic" ? "flex-end" : "flex-start",
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
        {earnedTickets.map(({ ticketNumber, _id, status, expiresIn }) => (
          <View
            key={_id}
            style={{
              padding: 20,
              backgroundColor: "#fff",
              marginVertical: 10,
              borderRadius: 20,
            }}
          >
            <View style={{ flex: 1, paddingVertical: 10 }}>
              <Image
                source={require("../../../../assets/nowadvert_bg1.png")}
                style={{
                  width: 200,
                  height: 50,
                  resizeMode: "contain",
                }}
              />

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
                style={{ fontSize: 15, fontFamily: theme.typography.PRIMARY }}
              >
                {t("TICKET NUMBER")}
              </Text>
              <Text
                style={{ fontSize: 15, fontFamily: theme.typography.PRIMARY }}
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
                  backgroundColor: theme.colors.SECONDARY,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    textTransform: "uppercase",
                  }}
                >
                  {t(status)}
                </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 15, fontFamily: theme.typography.PRIMARY }}
                >
                  {t("EXPIRES ON")}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: theme.typography.MONOSPACE,
                  }}
                >
                  02 November 2022
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
