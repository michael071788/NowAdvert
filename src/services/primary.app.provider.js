import React, { useContext, useState } from "react";

export const PrimaryAppContext = React.createContext();

export const UsedPrimaryAppContext = () => {
  return useContext(PrimaryAppContext);
};

const PrimaryAppProvider = ({ children }) => {
  const [isShowUserProfileBar, setShowUserProfileBar] = useState(true);
  const [userUpdate, setUserUpdate] = useState(false);

  const onShowUserProfileBar = (val) => {
    setShowUserProfileBar(val);
  };

  const onSetUserUpdate = (val) => {
    setUserUpdate(val);
  };

  return (
    <PrimaryAppContext.Provider
      value={{
        isShowUserProfileBar,
        ShowUserProfileBar: onShowUserProfileBar,
        userUpdate,
        SetUserUpdate: onSetUserUpdate,
      }}
    >
      {children}
    </PrimaryAppContext.Provider>
  );
};

export default PrimaryAppProvider;
