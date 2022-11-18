import { useContext } from "react";
import { UserCountContext } from "./counts.users.provider";

const UsedCount = () => {
  return useContext(UserCountContext);
};

export default UsedCount;
