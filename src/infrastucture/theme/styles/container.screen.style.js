import styled from "styled-components/native";
import { View } from "react-native";
import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";

/* prettier-ignore */
export const CommonScreenView = styled(View)`
    flex: 1;
    paddingTop: 20px;
    paddingHorizontal: 5px;
    backgroundColor: ${props => props.theme ? props.theme.colors.BACKGROUND : "transparent"};
    paddingBottom: ${tabBarTotalHeight + 1}px;
`;
