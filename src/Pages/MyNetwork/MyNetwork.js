import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import MemberCard from "../../Components/UI/MemberCard/MemberCard";
import AuthContext from "../../Store/login-context";
import styles from "./MyNetwork.module.css";

const MyNetwork = () => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const userConnections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  return (
    <Fragment>
      {userConnections === undefined && <h1>You have no connections!</h1>}
      {userConnections && (
        <div className={styles.main}>
          <h1>Your Connections</h1>
          <div className={styles["network-grid"]}>
            {Object.entries(userConnections.following).map((connection) => {
              return (
                <Fragment>
                  <MemberCard
                    key={Math.random()}
                    id={connection[0]}
                    name={connection[1].name}
                    email={connection[1].email}
                    language={connection[1].language}
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
