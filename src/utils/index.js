import { Dimensions } from "react-native";

export const { width: ViewportWidth, height: ViewportHeight } =
  Dimensions.get("window");

export function WinPix(percentage) {
  const value = (percentage * ViewportWidth) / 100;
  return Math.round(value);
}
