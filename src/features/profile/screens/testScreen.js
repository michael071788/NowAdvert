import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TestScreenMock = () => {
  const [count, setCount] = useState(0);

  const dataList = [
    {
      id: 1,
      likes: count,
    },
    {
      id: 2,
      likes: count,
    },
    {
      id: 3,
      likes: count,
    },
  ];
  const result = dataList.filter((element) => element.id);
  console.log(result);

  const handleClick = (itemId) => {
    console.log("Click");
    console.log(result);
    // console.log(itemId);

    if (itemId === result) {
      setCount(count + 1);
    }
  };
  return (
    <View>
      <Text>testScreens</Text>

      {dataList.map((item) => (
        <View key={item.id} style={{ flexDirection: "row" }}>
          <Text>{item.likes}</Text>
          <TouchableOpacity onPress={() => handleClick(item.id)}>
            <Text>Like</Text>
          </TouchableOpacity>
        </View>
      ))}
      {/* <Button title="Get User" onPress={() => handleClick()} /> */}
    </View>
  );
};

export default TestScreenMock;
