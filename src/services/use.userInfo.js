import { useContext } from "react";
import { UsedUserAuthInfoContext } from "./user.auth.provider";

const UsedUserInfo = () => {
  return useContext(UsedUserAuthInfoContext);
};

export default UsedUserInfo;
