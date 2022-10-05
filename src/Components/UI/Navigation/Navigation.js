import React from "react";
import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authentication-slice";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles["nav-title"]}>NetWORKS</h1>
      <div className={styles["flex-link"]}>
        <a className={styles.link} href="#home">
          Home
        </a>
        <a className={styles.link} href="/">
          My Network
        </a>
        <a className={styles.link} href="/">
          Account
        </a>
        <a className={styles.link} onClick={logoutHandler}>
          Sign out
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
