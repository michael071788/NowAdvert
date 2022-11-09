import { View, Text, Button } from "react-native";
import React from "react";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

const AlertNotification = (props) => {
  console.log("error");
  return (
    <AlertNotificationRoot>
      <View>
        <Button
          onPress={() => {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: "Error",
              textBody: "This is example message",
              button: "close",
            });
          }}
        />
      </View>
    </AlertNotificationRoot>
  );
};

export default AlertNotification;
