import styled from "styled-components/native";
import { Text, View } from "react-native";

export const UserProfileBarContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
`;

export const UserProfileBarImageContainer = styled(View)`
  justifycontent: center;
  alignitems: center;
  height: 33px;
  width: 33px;
  margin-right: 10px;
`;

/* prettier-ignore */
export const UserFullNameStyle = styled(Text)`
fontFamily: "normal";
  fontSize: 15px;
`;
