import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import arrow from "../../Components/IMG/arrow.png";
import styles from "./Header.module.css";

const Header = () => {
  const loggedInName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  return (
    <Fragment>
      <img className={styles.arrow} alt="pointer" src={arrow}></img>
      <div className={styles["home-header"]}>
        <div className={styles["home-modal"]}>
          <h2 className={styles.welcome}>{`Hi ${loggedInName}!`}</h2>
          <p>
            Welcome to NetWORKS! The casual fling of linkedIN. Follow other
            developers and connect to grow your network!
          </p>
        </div>
        <div className={styles["home-modal"]}>
          <h2 className={styles.tip}> Tip</h2>
          <p>Finish setting up your account to display throughout networks.</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
