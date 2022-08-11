import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../Store/login-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <a href="/">My Network</a>
      <a href="/">Account</a>
      <button className={styles.logout} onClick={ctx.onLogOut}>
        Sign out
      </button>
    </nav>
  );
};

export default Navigation;
