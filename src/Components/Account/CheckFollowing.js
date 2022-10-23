import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/login-context";

const CheckFollowing = () => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const connections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  if (connections === undefined) {
    return 0;
  }

  const followingNumber = Object.entries(connections.following).length;

  return followingNumber;
};

export default CheckFollowing;
