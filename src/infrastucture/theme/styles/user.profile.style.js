import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import UsedTheme from "../use.theme";

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

export const UserFullNameStyle = ({ userFullName }) => {
  const theme = UsedTheme();

  return (
    <Text
      style={{
        fontFamily: theme.typography.PRIMARY,
        fontSize: 15,
        textTransform: "uppercase",
      }}
    >
      {userFullName}
    </Text>
  );
};
