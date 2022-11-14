import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/login-context";

const FollowingAmount = () => {
  const params = useParams();

  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const connections = ctx.checkUser.find((user) => {
    if (params.memberId === undefined) {
      return user.id.id === loggedInUser.id.id;
    }
    return user.id.id === params.memberId;
  }).connections;

  if (connections === undefined) {
    return 0;
  }

  const followingNumber = Object.entries(connections.following).length;

  return followingNumber;
};

export default FollowingAmount;
