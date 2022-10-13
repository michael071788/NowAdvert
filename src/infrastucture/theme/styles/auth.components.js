import { TextInput, View, Text } from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";

export const Input = (props) => {
  const theme = UsedTheme();
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        style={{
          flex: 1,
          // height: 40,
          marginVertical: 5,
          fontFamily: theme.typography.PRIMARY,
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 5,
          fontSize: 16,
          backgroundColor: "#ccc",
        }}
        value={props.value}
        onChangeText={props.onChangeText}
        {...props}
      />
    </View>
  );
};

export const HeaderText = ({ title, subtitle }) => {
  const theme = UsedTheme();
  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          textTransform: "uppercase",
          fontFamily: theme.typography.PRIMARY,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: theme.typography.PRIMARY,
          marginTop: 10,
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};
