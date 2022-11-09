import { Fragment, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckFollowing from "../../Components/Account/FollowingAmount";
import LoadImage from "../../Components/Hooks/LoadImage";
import SignInForm from "../../Components/SignIn/SignInForm";
import MemberCard from "../../Components/UI/MemberCard/MemberCard";
import AuthContext from "../../Store/login-context";
import styles from "./MyNetwork.module.css";
import displayImg from "../../Components/IMG/noProfile.png";
import { storage } from "../../Store/Firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";

const MyNetwork = () => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const userConnections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  // const [url, setUrl] = useState(displayImg);
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
                    id={connection[0]}
                    name={connection[1].name}
                    email={connection[1].email}
                    language={connection[1].language}
                    // imgSrc={
                    //   // displayImg
                    //   url
                    // }
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
