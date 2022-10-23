import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import CheckFollowing from "../../Components/Account/FollowingAmount";
import MemberCard from "../../Components/UI/MemberCard/MemberCard";
import AuthContext from "../../Store/login-context";
import styles from "./MyNetwork.module.css";

const MyNetwork = () => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const userInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  });

  const userConnections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  // CheckFollowing();

  return (
    <Fragment>
      {userConnections === undefined && <h1>You have no connections!</h1>}
      {userConnections && (
        <div>
          <h1>Your Connections</h1>
          <div className={styles["network-grid"]}>
            {Object.entries(userConnections.following).map((connection) => {
              return (
                <Fragment>
                  <MemberCard
                    key={Math.random()}
                    id={userInfo.id.id}
                    name={connection[1].name}
                    email={connection[1].email}
                    language={userInfo.info.language}
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MyNetwork;
