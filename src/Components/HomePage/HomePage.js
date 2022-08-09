import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import Navigation from "./Navigation";

const HomePage = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles["header-title"]}>NetWORKS</h1>
        <Navigation logout={props.onLogOut} />
      </header>

      <div className={styles["home-main"]}>
        <h1>{`Welcome back ${props.savedUser}!`}</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
