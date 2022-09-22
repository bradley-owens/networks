import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const loggedInName = useSelector(
    (state) => state.authentication.loggedInUser.name
  );

  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles["header-title"]}>NetWORKS</h1>
        <Navigation />
      </header>

      <div className={styles["home-main"]}>
        <h1>{`Welcome back ${isLoggedIn === true && loggedInName}`}</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
