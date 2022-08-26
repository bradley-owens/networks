import React, { Fragment, useContext } from "react";
import styles from "./HomePage.module.css";
import Navigation from "./Navigation";
import AuthContext from "../../Store/login-context";

const HomePage = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles["header-title"]}>NetWORKS</h1>
        <Navigation />
      </header>

      <div className={styles["home-main"]}>
        <h1>{`Welcome ${ctx.signedIn.name}`}</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
