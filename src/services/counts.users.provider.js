import React, { useCallback, useContext, useState } from "react";

export const UserCountContext = React.createContext();

export const UsedUserCountContext = () => {
  return useContext(UserCountContext);
};

const UserCountProvider = ({ children }) => {
  const [mockData, setMockData] = useState([]);
  const [advertData, setAdvertData] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const [userId, setUserId] = useState("");

  const [currentViews, setCurrentViews] = useState([]);

  const onSetUserTickets = (val) => {
    setUserTickets(val);
  };
  const onSetCurrentViews = (val) => {
    setCurrentViews(val);
  };
  const onSetAdvertData = (val) => {
    setAdvertData(val);
  };
  const onSetMockData = (val) => {
    setMockData(val);
  };

  return (
    <UserCountContext.Provider
      value={{
        currentViews,
        mockData,
        userTickets,
        advertData,
        SetUserTickets: onSetUserTickets,
        SetAdvertData: onSetAdvertData,
        SetCurrentViews: onSetCurrentViews,
        SetMockData: onSetMockData,
      }}
    >
      {children}
    </UserCountContext.Provider>
  );
};

export default UserCountProvider;
