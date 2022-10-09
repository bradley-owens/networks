import React from "react";
import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../../Store/authentication-slice";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles["nav-title"]}>NetWORKS</h1>
      <div className={styles["flex-link"]}>
        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/my-network"
        >
          My Network
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to="/account"
        >
          Account
        </NavLink>

        <NavLink className={styles.link} onClick={logoutHandler} to="/sign-in">
          Sign out
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
