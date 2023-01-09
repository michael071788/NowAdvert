import { Dimensions } from "react-native";
import axios from "axios";

export const { width: ViewportWidth, height: ViewportHeight } =
  Dimensions.get("window");

export function WinPix(percentage) {
  const value = (percentage * ViewportWidth) / 100;
  return Math.round(value);
}

export const AxiosInstance = axios.create({
  baseURL:
    // "http://nowadvertapiapp-env.eba-pbhdcwat.eu-west-3.elasticbeanstalk.com",
    "http://192.168.254.105:14961",
});
