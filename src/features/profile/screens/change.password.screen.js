import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import UsedTheme from "../../../infrastucture/theme/use.theme";
// import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
// import {
//   CommonView,
//   InnerContentView,
// } from "../../../infrastucture/theme/styles/user.profile.style";
// import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosInstance } from "../../../utils";

const ChangePassword = ({ navigation }) => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Change Password");
  }, [contextProfile]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (userData) => {
    console.log("data ", userData);
    try {
      await AxiosInstance.patch(
        `/api/users/update-password/${contextProfile.userData._id}`,
        userData
      ).then((response) => {
        contextProfile.SetUserData(response.data);
        AsyncStorage.clear();
        navigation.replace("LoginScreen");
      });
    } catch (error) {
      // console.log(error.response.data.message);
      console.log("error ", error.response.data);
    }
  };
  return (
    // <CommonScreenView theme={theme}>
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      {/* start of profile */}

      {/* start input field */}
      <SafeAreaView style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
        <View>
          {/*  current password input */}
          <Controller
            name="currentPassword"
            control={control}
            rules={{
              required: "This is required",
            }}
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    color: "#aaa",
                    textTransform: "uppercase",
                  }}
                >
                  {t("CURRENT PASSWORD")}
                </Text>
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    borderBottomColor: "#aaa",
                    borderBottomWidth: 1,
                    paddingVertical: 2,
                    fontSize: 22,
                  }}
                  secureTextEntry={true}
                />
              </View>
            )}
          />
          <View style={{ height: 18, fontSize: 15 }}>
            {errors.currentPassword && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>

          {/* new password input */}
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: "This is required",
            }}
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    color: "#aaa",
                    textTransform: "uppercase",
                  }}
                >
                  {t("NEW PASSWORD")}
                </Text>
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    borderBottomColor: "#aaa",
                    borderBottomWidth: 1,
                    paddingVertical: 2,
                    fontSize: 22,
                  }}
                  secureTextEntry={true}
                />
              </View>
            )}
          />
          <View style={{ height: 18, fontSize: 15 }}>
            {errors.newPassword && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>

          {/* confirm password input */}
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "This is required",
            }}
            render={({ field: { onChange, value } }) => (
              <View>
                <Text
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    color: "#aaa",
                    textTransform: "uppercase",
                  }}
                >
                  {t("CONFIRM PASSWORD")}
                </Text>
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  style={{
                    fontFamily: theme.typography.PRIMARY,
                    borderBottomColor: "#aaa",
                    borderBottomWidth: 1,
                    paddingVertical: 2,
                    fontSize: 22,
                  }}
                  secureTextEntry={true}
                />
              </View>
            )}
          />
          <View style={{ height: 18, fontSize: 15 }}>
            {errors.confirmPassword && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>
        </View>
        {/* end of input field  */}

        {/* button */}
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{
              paddingVertical: 10,
              width: "50%",
              borderRadius: 20,
              backgroundColor: "#333",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: theme.typography.PRIMARY,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {t("UPDATE")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* end of button */}
      </SafeAreaView>
    </ScrollView>
    // </CommonScreenView>
  );
};
export default ChangePassword;
