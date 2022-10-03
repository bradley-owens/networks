import React, { Fragment, useContext } from "react";
import styles from "./HomePage.module.css";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/login-context";
import arrow from "../IMG/arrow.png";

const HomePage = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const loggedInName = useSelector(
    (state) => state.authentication.loggedInUser.name
  );
  const ctx = useContext(AuthContext);

  if (ctx.loggedInStatus)
    return (
      <Fragment>
        <Navigation />
        <img className={styles.arrow} src={arrow}></img>
        <div className={styles["home-header"]}>
          <div className={styles["home-modal"]}>
            <h1 className={styles.welcome}>{`Hi ${loggedInName}!`}</h1>
            <p>
              Welcome to NetWORKS! The casual fling of linkedIN. Follow other
              developers and connect to grow the network you need!
            </p>
          </div>
          <div className={styles["home-modal"]}>
            <h2 className={styles.tip}> Tip</h2>
            <p>
              Finish setting up your account to display throughout networks.
            </p>
          </div>
        </div>
      </Fragment>
    );
};

export default HomePage;
