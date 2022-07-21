import React from "react";
import { SafeArea } from "../../components/safe.area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdvertNavigator } from "./advert.navigator";
// import { HomeNavigator } from "./home.navigator";
// import { ProfileNavigator } from "./profile.navigator";

import { appNavigatorScreenOptions } from "../theme/styles/app.navigator.style";
import { HeaderBarContainer } from "../theme/styles/app.header.style";
import { UserProfileBar } from "../../features/profile/user.profile.bar";
// import { UsedPrimaryAppContext } from "../../services/primary.app.provider";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  // const primaryContext = UsedPrimaryAppContext();
  // const isUserProfileShown = primaryContext.isShowUserProfileBar;

  return (
    <>
      <SafeArea>
        <HeaderBarContainer
          style={{
            // justifyContent: isUserProfileShown ? "flex-end" : "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <UserProfileBar isShown={true} />
        </HeaderBarContainer>

        <Tab.Navigator
          screenOptions={appNavigatorScreenOptions}
          initialRouteName="Advert"
          // screenListeners={{
          //   state: (e) => {
          //     //Do not show User Profile Bar if user profile nav had been selected
          //     primaryContext.ShowUserProfileBar(
          //       e.data.state.index === 2 ? false : true
          //     );
          //   },
          // }}
        >
          {/* <Tab.Screen name="Home" component={HomeNavigator} /> */}
          <Tab.Screen name="Advert" component={AdvertNavigator} />
          {/* <Tab.Screen name="Profile" component={ProfileNavigator} /> */}
        </Tab.Navigator>
      </SafeArea>
    </>
  );
};
