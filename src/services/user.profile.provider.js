import React, { useContext, useState } from "react";

export const UserProfileContext = React.createContext();

export const UsedUserProfileContext = () => {
  return useContext(UserProfileContext);
};

const UserProfileProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");

  const onSetCurrentLocation = (val) => {
    setCurrentLocation(val);
  };

  const onSetCurrentLanguage = (val) => {
    setCurrentLanguage(val);
  };

  const onSetUserData = (val) => {
    setUserData(val);
  };

  const onSetUserId = (val) => {
    setUserId(val);
  };

  const onSetUserProfileImage = (val) => {
    setUserProfileImage(val);
  };

  return (
    <UserProfileContext.Provider
      value={{
        currentLocation,
        SetCurrentLocation: onSetCurrentLocation,
        currentLanguage,
        SetCurrentLanguage: onSetCurrentLanguage,
        userData,
        SetUserData: onSetUserData,
        userId,
        SetUserId: onSetUserId,
        userProfileImage,
        SetUserProfileImage: onSetUserProfileImage,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
