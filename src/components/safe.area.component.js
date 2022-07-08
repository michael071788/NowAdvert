import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

/* prettier-ignore */
/* Ignore the  backgroundColor casing here */
// backgroundColor: ${"red"};
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
