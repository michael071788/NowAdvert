import React, { useContext, useState } from "react";

export const UserProfileContext = React.createContext();
import EnglishFlag from "../../assets/us.svg";

export const UsedUserProfileContext = () => {
  return useContext(UserProfileContext);
};

const UserProfileProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("ENGLISH");

  const onSetCurrentLocation = (val) => {
    setCurrentLocation(val);
  };

  const onSetCurrentLanguage = (val) => {
    setCurrentLanguage(val);
  };

  return (
    <UserProfileContext.Provider
      value={{
        currentLocation,
        SetCurrentLocation: onSetCurrentLocation,
        currentLanguage,
        SetCurrentLanguage: onSetCurrentLanguage,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
