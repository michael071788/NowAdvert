import React, { useCallback, useContext, useState } from "react";

export const UserCountContext = React.createContext();

export const UsedUserCountContext = () => {
  return useContext(UserCountContext);
};

const UserCountProvider = ({ children }) => {
  const [mockData, setMockData] = useState([]);
  const [advertData, setAdvertData] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const [userData, setUserData] = useState();
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
  const onSetUserData = (val) => {
    setUserData(val);
  };
  const onSetUserId = (val) => {
    setUserId(val);
  };
  return (
    <UserCountContext.Provider
      value={{
        currentViews,
        mockData,
        userTickets,
        advertData,
        userData,
        userId,
        SetUserTickets: onSetUserTickets,
        SetUserId: onSetUserId,
        SetUserData: onSetUserData,
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
