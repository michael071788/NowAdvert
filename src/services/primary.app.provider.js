import React, { useContext, useState } from "react";

export const PrimaryAppContext = React.createContext();

export const UsedPrimaryAppContext = () => {
  return useContext(PrimaryAppContext);
};

const PrimaryAppProvider = ({ children }) => {
  const [isShowUserProfileBar, setShowUserProfileBar] = useState(true);

  const onShowUserProfileBar = (val) => {
    setShowUserProfileBar(val);
  };

  return (
    <PrimaryAppContext.Provider
      value={{
        isShowUserProfileBar,
        ShowUserProfileBar: onShowUserProfileBar,
      }}
    >
      {children}
    </PrimaryAppContext.Provider>
  );
};

export default PrimaryAppProvider;
