import React, { useContext, useState } from "react";

export const UserAuthInfo = React.createContext();

export const UsedUserAuthInfoContext = () => {
  return useContext(UserAuthInfo);
};

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const onSetUserInfo = (val) => {
    setUserInfo(val);
  };

  return (
    <UserAuthInfo.Provider
      value={{
        userInfo,
        SetCurrentUserInfo: onSetUserInfo,
      }}
    >
      {children}
    </UserAuthInfo.Provider>
  );
};

export default UserInfoProvider;
