import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
  baseURL: "https://nowadvert-api.herokuapp.com",
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [splashLoading, setSplashLoading] = useState(false);

  //register auth
  const register = async (userData) => {
    await axiosInstance
      .post("/api/users", userData)
      .then((res) => {
        let userInfo = res.data;

        if (data.message) {
          alert(data.message);
        } else if (data.status === 200) {
          setUserInfo(userInfo);
          AsyncStorage.setItem("userInfo", userInfo);
          console.log(userInfo);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //login auth
  const login = async (userData) => {
    fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        let userInfo = data;
        console.log(userInfo);

        if (data.message) {
          alert(data.message);
        } else if (data.status === 200) {
          setUserInfo(userInfo);
          AsyncStorage.setItem("userInfo", userInfo);
          console.log(userInfo);
        }
      });
  };

  // logout auth
  const logout = () => {
    try {
      AsyncStorage.removeItem("userInfo");
      setUserInfo({});
    } catch (error) {
      console.log(error);
    }
  };

  // verifying if the user is loggedin
  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      // userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
      //   setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // isLoading,
        // splashLoading,
        userInfo,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
