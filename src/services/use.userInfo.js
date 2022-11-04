import { useContext } from "react";
import { UsedUserAuthInfoContext } from "./user.auth.provider";

const UserInfo = () => {
  return useContext(UsedUserAuthInfoContext);
};

export default UserInfo;
