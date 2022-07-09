import React from "react";
import UsedTheme from "../use.theme";
import AdvertIcon from "../../../../assets/advert_icon.svg";
import HomeIcon from "../../../../assets/home_icon.svg";
import ProfileIcon from "../../../../assets/profile_icon.svg";

export const tabBarHeight = 45;
export const tabBarBottom = 25;
export const tabBarTotalHeight = tabBarHeight + tabBarBottom;

export const appNavigatorScreenOptions = ({ route }) => {
  const theme = UsedTheme();

  return {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.ACTIVE,
    tabBarInactiveTintColor: theme.colors.INACTIVE,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      switch (route.name) {
        case "Home":
          iconName = <HomeIcon width={size} height={size} fill={color} />;
          break;

        case "Advert":
          iconName = <AdvertIcon width={size} height={size} fill={color} />;
          break;

        case "Profile":
          iconName = <ProfileIcon width={size} height={size} fill={color} />;
          break;
      }
      return iconName;
    },
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      bottom: tabBarBottom,
      left: 20,
      right: 20,
      elevation: 3,
      backgroundColor: theme.colors.PRIMARY,
      borderRadius: 50,
      height: tabBarHeight,
    },
  };
};
