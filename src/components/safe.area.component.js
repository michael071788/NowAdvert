import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

/* prettier-ignore */
/* Ignore the  backgroundColor casing here */
/* Remove checking of status bar height*/
//  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
