import React from "react";
import { Image, View } from "react-native";
import { SafeArea } from "../../components/safe.area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
import { HomeNavigator } from "./home.navigator";
import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import {
  UserProfileBarContainer,
  UserProfileBarImageContainer,
  UserFullNameStyle,
} from "../theme/styles/user.profile.style";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <>
    <SafeArea>
      <UserProfileBarContainer>
        <UserProfileBarImageContainer>
          <Image
            source={require("../../../assets/avatar_profile_icon.png")}
            style={{ height: 33, width: 33 }}
          />
        </UserProfileBarImageContainer>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <UserFullNameStyle>CALUM SCOTT</UserFullNameStyle>
        </View>
      </UserProfileBarContainer>

      {/* // =============================== */}
      {/* <View style={{ flexDirection: "row-reverse", padding: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 33,
              width: 33,
              marginRight: 10,
            }}
          >
            <Image
              source={require("../../../assets/avatar_profile_icon.png")}
              style={{ height: 33, width: 33 }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 25 }}>
            CALUM SCOTT
          </Text>
          </View>
        </View>
      </View> */}

      <Tab.Navigator screenOptions={appNavigatorScreenOptions}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Advert" component={AdvertNavigator} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
      </Tab.Navigator>
    </SafeArea>
  </>
);
