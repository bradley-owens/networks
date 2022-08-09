import React from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <a href="/">My Network</a>
      <a href="/">Account</a>
      <button className={styles.logout} onClick={props.logout}>
        Sign out
      </button>
    </nav>
  );
};

export default Navigation;
