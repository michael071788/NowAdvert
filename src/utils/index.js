import { Dimensions } from "react-native";
import axios from "axios";

export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API_BASE_URL
    : process.env.NODE_ENV === "test"
    ? process.env.REACT_APP_TEST_API_BASE_URL
    : process.env.NODE_ENV === "stage"
    ? process.env.REACT_APP_STAGE_API_BASE_URL
    : process.env.REACT_APP_PROD_MODE;

export const { width: ViewportWidth, height: ViewportHeight } =
  Dimensions.get("window");

export function WinPix(percentage) {
  const value = (percentage * ViewportWidth) / 100;
  return Math.round(value);
}

export const AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`,
});
