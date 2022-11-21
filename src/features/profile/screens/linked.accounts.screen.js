import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import UsedTheme from "../../../infrastucture/theme/use.theme";
import UsedProfile from "../../../services/use.user.profile";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";

const LinkedAccounts = () => {
  const theme = UsedTheme();
  const contextProfile = UsedProfile();
  const { t } = useTranslation();

  useEffect(() => {
    contextProfile.SetCurrentLocation("Linked Accounts");
  }, [contextProfile]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      google: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });
  const onSubmit = async (userData) => {
    console.log("Submit");
  };

  return (
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      {/* start input field */}
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View>
          <Controller
            name="google"
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
                  {t("GOOGLE")}
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
            {errors.google && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>

          <Controller
            name="facebook"
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
                  {t("FACEBOOK")}
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
            {errors.facebook && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>

          <Controller
            name="twitter"
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
                  {t("TWITTER")}
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
            {errors.twitter && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>

          <Controller
            name="instagram"
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
                  {t("INSTAGRAM")}
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
            {errors.instagram && (
              <Text style={{ color: "red" }}>This is required.</Text>
            )}
          </View>
        </View>
        {/* end of input field  */}

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
      </SafeAreaView>
      {/* end of button */}
    </ScrollView>
  );
};
export default LinkedAccounts;
