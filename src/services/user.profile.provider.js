import React, { useContext, useState } from "react";

export const UserProfileContext = React.createContext();

export const UsedUserProfileContext = () => {
  return useContext(UserProfileContext);
};

const UserProfileProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");
  const [userData, setUserData] = useState({});
  const [hasProfile, setHasProfile] = useState(false);
  const [hasUserData, setHasUserData] = useState(false);
  const [userUpdate, setUserUpdate] = useState(false);

  const onSetCurrentLocation = (val) => {
    setCurrentLocation(val);
  };

  const onSetCurrentLanguage = (val) => {
    setCurrentLanguage(val);
  };

  const onSetUserData = (val) => {
    setUserData(val);
  };

  const onSetHasUserData = (val) => {
    setHasUserData(val);
  };

  const onSetUserUpdate = (val) => {
    setUserUpdate(val);
  };

  const onSetHasProfile = (val) => {
    setHasProfile(val);
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
        hasUserData,
        SetHasUserData: onSetHasUserData,
        userUpdate,
        SetUserUpdate: onSetUserUpdate,
        hasProfile,
        SetHasProfile: onSetHasProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
