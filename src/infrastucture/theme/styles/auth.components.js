import * as React from "react";
import { TextInput, View, Text } from "react-native";
import UsedTheme from "../use.theme";
import { Modal, Portal, Button, Provider } from "react-native-paper";

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
          // textTransform: "lowercase",
        }}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCapitalize="none"
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

export const ModalNotifications = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};
