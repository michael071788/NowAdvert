import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import { ButtonContainer } from "../styles/advert.screen.style";

/* prettier-ignore */
export const MainScreenView = styled(View)`
  flex: 1;
`;

export const VideoStyle = {
  width: "100%",
  height: "100%",
};

/* prettier-ignore */
export const VideoButtonContainer = styled(View)`
flex: 1;
flexDirection: row;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;

/* prettier-ignore */
export const Container1 = styled(View)`
flex: 1;
alignItems: flex-start;
`;

/* prettier-ignore */
export const Container2 = styled(View)`
flex: 1;
alignItems: center;
flexDirection: column-reverse;
`;

/* prettier-ignore */
export const Container3 = styled(View)`
flex: 1;
`;

export const BackButtonContainer = () => {
  return (
    <View style={{ margin: 10 }}>
      <ButtonContainer
        name={"CARETLEFT"}
        size={30}
        bgcolor={"rgba(105, 105, 105, 0.37)"}
      />
    </View>
  );
};

export const PlayButtonContainer = ({ name }) => {
  return (
    <ButtonContainer
      name={name}
      size={80}
      bgcolor={"rgba(0, 0, 0, 0.25)"}
      iconcolor={"black"}
      iconsize={40}
    />
  );
};

export const LoadingScreen = ({ theme }) => {
  return (
    <ActivityIndicator
      animating
      color={theme.colors.PRIMARY}
      size="large"
      style={{
        flex: 1,
        backgroundColor: theme.colors.BACKGROUND,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    />
  );
};
