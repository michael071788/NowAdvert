import React, { useCallback, useContext, useState } from "react";

export const UserCountContext = React.createContext();

export const UsedUserCountContext = () => {
  return useContext(UserCountContext);
};

const UserCountProvider = ({ children }) => {
  const [currentViews, setCurrentViews] = useState(0);
  const [currentShare, setCurrentShare] = useState(0);
  const [alreadyWatch, setAlreadyWatch] = useState(false);
  const [alreadyLike, setAlreadyLike] = useState(false);

  const [videoId, setVideoId] = useState("");
  const [mockData, setMockData] = useState([]);

  const onSetAlreadyLike = (val) => {
    setAlreadyLike(val);
  };
  const onSetCurrentViews = (val) => {
    setCurrentViews(val);
  };

  const onSetAlreadyWatch = (val) => {
    setAlreadyWatch(val);
  };

  const onSetCurrentShare = (val) => {
    setCurrentShare(val);
  };

  const onSetMockData = (val) => {
    setMockData(val);
  };

  //  logic

  // videoId
  const onSetVideoId = (val) => {
    setVideoId(val);
  };
  // display count like
  const countLike = useCallback(
    (id) => {
      const output = mockData.filter((item) => item.id === id);
      if (output.length > 0) {
        return output[0].like;
      }
    },
    [mockData]
  );
  // add likes
  const addLikeCounts = (id) => {
    const output = mockData.filter((item) => item.id === id);
    if (output.length > 0) {
      output[0].like = output[0].like + 1;
      return output[0].like;
    }
  };
  // subtract likes
  const subtractLikeCounts = (id) => {
    const output = mockData.filter((item) => item.id === id);
    if (output.length > 0) {
      output[0].like = output[0].like - 1;
      return output[0].like;
    }
  };
  // display count views
  const countViews = useCallback(
    (id) => {
      const output = mockData.filter((item) => item.id === id);
      if (output.length > 0) {
        return output[0].views;
      }
    },
    [mockData]
  );
  // add view counts
  const addViewCounts = (id) => {
    const output = mockData.filter((item) => item.id === id);
    if (output.length > 0) {
      output[0].views = output[0].views + 1;
      return output[0].views;
    }
  };
  // display count share
  const countShare = useCallback(
    (id) => {
      const output = mockData.filter((item) => item.id === id);
      if (output.length > 0) {
        return output[0].share;
      }
    },
    [mockData]
  );
  // add count share
  const addShareCounts = (id) => {
    const output = mockData.filter((item) => item.id === id);
    if (output.length > 0) {
      output[0].share = output[0].share + 1;
      return output[0].share;
    }
  };
  return (
    <UserCountContext.Provider
      value={{
        currentViews,
        alreadyLike,
        alreadyWatch,
        currentShare,
        videoId,
        mockData,
        countLike,
        countViews,
        countShare,
        SetCurrentViews: onSetCurrentViews,
        SetCurrentLike: onSetAlreadyLike,
        SetAlreadyWatch: onSetAlreadyWatch,
        SetCurrentShare: onSetCurrentShare,
        SetVideoId: onSetVideoId,
        SetMockData: onSetMockData,
        SetAddLikeCount: addLikeCounts,
        SetSubtractLikeCount: subtractLikeCounts,
        SetAddViewCount: addViewCounts,
        SetAddShareCount: addShareCounts,
      }}
    >
      {children}
    </UserCountContext.Provider>
  );
};

export default UserCountProvider;
