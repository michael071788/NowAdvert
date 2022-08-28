import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
import {
  CommonView,
  InnerContentView,
} from "../../../infrastucture/theme/styles/user.profile.style";

export default EditProfile = () => {
  const theme = UsedTheme();

  return (
    <SafeAreaView style={styles.container}>
      <CommonView flex={1}>
        <InnerContentView>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/avatar_profile_icon.png")}
              style={{ height: 180, width: 180 }}
            />
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              calum scott
            </Text>
            <Text
              style={{
                color: theme.colors.SECONDARY,
                fontFamily: theme.typography.PRIMARY,
                fontSize: 15,
                textTransform: "uppercase",
              }}
            >
              active: 26 May 2022
            </Text>
          </View>
        </InnerContentView>
      </CommonView>
      <View style={{ flex: 1, margin: 10 }}>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>NAME</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>EMAIL</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>MOBILE NUMBER</Text>
          <TextInput style={styles.formInput} />
        </View>
      </View>
      {/* button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View style={styles.btnWrapper}>
            <Text style={styles.btnText}>UPDATE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
  formControl: {
    width: "100%",
    marginVertical: 10,
  },
  formLabel: {
    fontFamily: theme.typography.PRIMARY,
    color: "#aaa",
  },
  formInput: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    paddingVertical: 2,
    fontSize: 22,
    fontWeight: "bold",
  },
  btnContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrapper: {
    width: 150,
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 14,
    color: "#fff",
  },
});
