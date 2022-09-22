import React from "react";
import styles from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/authentication-slice";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={styles.nav}>
      <a href="/">My Network</a>
      <a href="/">Account</a>
      <button className={styles.logout} onClick={logoutHandler}>
        Sign out
      </button>
    </nav>
  );
};

export default Navigation;
