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
export const CommonView = styled(View)`
  alignItems: center;
  justifyContent: center;
  borderRadius: 10px;
  margin: 10px;
`;

/* prettier-ignore */
export const InnerContentView = styled(View)`
  alignItems: center;
  justifyContent: center;
  padding: 10px;
`;

/* prettier-ignore */
export const UserFullName = styled(Text)`
  fontFamily: ${props => props.theme ? props.theme.typography.PRIMARY : "normal"};
  fontSize: 15px;
  textTransform: uppercase;
`;
