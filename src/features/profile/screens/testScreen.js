import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonContainer } from "../../../infrastucture/theme/styles/advert.screen.style";
import { UsedUserAuthInfoContext } from "../../../services/user.auth.provider";
import { List } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import UsedTheme from "../../../infrastucture/theme/use.theme";

const TestScreenMock = () => {
  const [image, setImage] = useState("");

  const userAuthInfoContext = UsedUserAuthInfoContext();
  const theme = UsedTheme();

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(userAuthInfoContext.userInfo.user._id);

    axios
      .get("http://192.168.1.12:14961/api/advert/list")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const likePost = async (id) => {
    await axios
      .put(`http://192.168.1.12:14961/like/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          // if (item._id == result._id) {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const unlikePost = (id) => {
    axios
      .put(`http://192.168.1.12:14961/unlike/${userId}`, {
        videoId: id,
      })
      .then((response) => {
        const newData = data.map((item) => {
          if (item._id == response.data._id) {
            return response.data;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      // quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      uploadProfile();
      // console.log("result ", result);
    }
  };

  const uploadProfile = async () => {
    const formData = new FormData();
    formData.append("image", {
      uri: image,
    });

    await axios
      // .post(`http://192.168.1.12:14961/profile-image/${userId}`, formData, {
      .post(`http://192.168.1.12:14961/upload`, formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((res) => console.log("res ", res))
      .catch((error) => console.log(error.response));

    // try {
    //   const res = await axios.post(
    //     `http://192.168.1.12:14961/profile-image/${userId}`,
    //     formData,
    //     {
    //       headers: {
    //         // Accept: "application/json",
    //         "Content-Type": "multipart/form-data",
    //         // authorization: `JWT ${token}`,
    //       },
    //     }
    //   );
    //   console.log(res);
    //   // if (res.data.success) {
    //   //   props.navigation.dispatch(StackActions.replace("UserProfile"));
    //   // }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text>Test </Text>
      {data.map((item) => {
        return (
          <View
            key={item._id}
            style={{
              height: 100,
              widhth: 100,
              borderWidth: 1,
              flexDirection: "row",
            }}
          >
            <Text>{item.companyName}</Text>
            <ButtonContainer
              name={"HEART"}
              bgcolor={item.likes.includes(userId) ? "red" : ""}
              // label={countViewContext.countLike(item._id)}
              onpress={() => {
                item.likes.includes(userId)
                  ? unlikePost(item._id)
                  : likePost(item._id);
              }}
            />
            <Text>{item.likes.length} likes</Text>
          </View>
        );
      })}
    </View>
  );
};

export default TestScreenMock;
