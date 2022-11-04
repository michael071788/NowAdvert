import React, { useContext, useState } from "react";

export const UserAuthInfoContext = React.createContext();

export const UsedUserAuthInfoContext = () => {
  return useContext(UserAuthInfoContext);
};

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const onSetUserInfo = (val) => {
    setUserInfo(val);
  };

  return (
    <UserAuthInfoContext.Provider
      value={{
        userInfo,
        SetCurrentUserInfo: onSetUserInfo,
      }}
    >
      {children}
    </UserAuthInfoContext.Provider>
  );
};

export default UserInfoProvider;
