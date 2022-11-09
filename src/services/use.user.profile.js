import { useContext } from "react";
import { UserProfileContext } from "./user.profile.provider";

const UsedProfile = () => {
  return useContext(UserProfileContext);
};

export default UsedProfile;
