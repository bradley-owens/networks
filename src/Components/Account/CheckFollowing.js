import { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/login-context";

const CheckFollowing = (props) => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const connections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  if (connections === undefined) {
    return false;
  }

  Object.entries(connections.following).map((connection) => {
    let userEmail = connection[1].email;
    if (userEmail === props) {
      return true;
    } else {
      return false;
    }
  });
};

export default CheckFollowing;
