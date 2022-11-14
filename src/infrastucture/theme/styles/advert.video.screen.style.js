import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import {
  ButtonContainer,
  PlayButtonContainerStyle,
} from "../styles/advert.screen.style";

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

/* prettier-ignore */
export const ModalContainerStyle = {
  flex: 1,
  flexDirection: "column",
};

/* prettier-ignore */
export const ModalContainer1 = styled(View)`
flex: 1;
justifyContent: flex-end;
flexDirection: row;
`;

/* prettier-ignore */
export const ModalContainer2 = styled(View)`
flex: 1;
justifyContent: center;
alignItems: center;
marginBottom: 10px;
`;

/* prettier-ignore */
export const ModalContainer3 = styled(View)`
 flex: 20;
`;

/* prettier-ignore */
export const TicketContainer = styled(View)`
flex: 1;
borderRadius: 15px;
backgroundColor: white;
alignItems: stretch;
marginHorizontal: 15px;
paddingHorizontal: 15px;
`;

/* prettier-ignore */
export const TicketInnerContainer1 = styled(View)`
flex: 1;
justifyContent: center;
flexDirection: column;
`;

/* prettier-ignore */
export const TicketInnerContainer2 = styled(View)`
flex: 1;
justifyContent: center;
flexDirection: row;
alignItems: center;
`;

/* prettier-ignore */
export const TicketInnerContainer3 = styled(View)`
flex: 1;
justifyContent: center;
flexDirection: row;
`;

/* prettier-ignore */
export const FlexCenterContainer = styled(View)`
flex: 1;
alignItems: center;
`;

/* prettier-ignore */
export const TicketStatusContainer = styled(View)`
backgroundColor: ${props => (props.bgcolor ? props.bgcolor : "transparent" )};
borderRadius: 15px;
alignItems: center;
alignContent: center;
width: 45%;
height: 40%;
`;

export const BackButtonContainer = ({ onpress }) => {
  return (
    <View style={{ margin: 10 }}>
      <ButtonContainer
        name={"CARETLEFT"}
        size={30}
        bgcolor={"rgba(105, 105, 105, 0.37)"}
        onpress={onpress}
      />
    </View>
  );
};

export const PlayButtonContainer = ({ name, iconcolor }) => {
  return (
    <PlayButtonContainerStyle
      name={name}
      size={80}
      bgcolor={"rgba(0, 0, 0, 0.25)"}
      iconcolor={iconcolor ? iconcolor : "black"}
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
