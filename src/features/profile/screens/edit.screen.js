import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import UsedTheme from "../../../infrastucture/theme/use.theme";
// import {
//   CommonView,
//   InnerContentView,
// } from "../../../infrastucture/theme/styles/user.profile.style";
// import { CommonScreenView } from "../../../infrastucture/theme/styles/container.screen.style";
// import { tabBarTotalHeight } from "../../../infrastucture/theme/styles/app.navigator.style";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";

import { AxiosInstance } from "../../../utils";

const EditProfile = ({ navigation }) => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Edit Profile");
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  }, [contextProfile]);

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  // }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (userData) => {
    try {
      await AxiosInstance.patch(
        `/api/users/update/${contextProfile.userData._id}`,
        userData
      ).then((response) => {
        contextProfile.SetUserUpdate(true);

        navigation.goBack();
      });
    } catch (error) {
      console.log("error ", error);
    }
  };
  const handleBackPress = async () => {
    navigation.goBack();
  };
  return (
    <>
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        {/* start input field */}

        <SafeAreaView style={{ flex: 1, padding: 10, paddingHorizontal: 20 }}>
          <View>
            {/* first name input */}
            <Controller
              name="firstName"
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
                    {t("FIRST NAME")}
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
                  />
                </View>
              )}
            />
            <View style={{ height: 18, fontSize: 15 }}>
              {errors.firstName && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}
            </View>

            {/* last name input */}
            <Controller
              name="lastName"
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
                    {t("LAST NAME")}
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
                  />
                </View>
              )}
            />
            <View style={{ height: 18, fontSize: 15 }}>
              {errors.lastName && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}
            </View>

            {/* email input */}
            <Controller
              name="email"
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
                    {t("EMAIL")}
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
                  />
                </View>
              )}
            />
            <View style={{ height: 18, fontSize: 15 }}>
              {errors.email && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}
            </View>

            {/* phone input */}
            <Controller
              name="phone"
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
                    {t("MOBILE NUMBER")}
                  </Text>
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={value}
                    style={{
                      fontFamily: theme.typography.PRIMARY,
                      borderBottomColor: "#aaa",
                      borderBottomWidth: 1,
                      paddingVertical: 2,
                      fontSize: 22,
                    }}
                  />
                </View>
              )}
            />
            <View style={{ height: 18, fontSize: 15 }}>
              {errors.phone && (
                <Text style={{ color: "red" }}>This is required.</Text>
              )}
            </View>
          </View>
          {/* end input field */}

          {/* button */}
          <View
            style={{
              marginTop: 20,
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
    </>
  );
};
export default EditProfile;
