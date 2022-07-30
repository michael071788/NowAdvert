import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import UsedTheme from "../infrastucture/theme/use.theme";
import SvgIcons from "../../assets/svg.icons";

export const SvgIcon = ({ name, width, height }) => {
  const theme = UsedTheme();

  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill={theme.colors.BACKGROUND}
        viewBox={
          SvgIcons[name.toUpperCase()].VIEWBOX
            ? SvgIcons[name.toUpperCase()].VIEWBOX
            : "0 0 512 512"
        }
        height={width ? width : 15}
        width={height ? height : 15}
      >
        <Path d={SvgIcons[name.toUpperCase()].PATH} />
      </Svg>
    </View>
  );
};
