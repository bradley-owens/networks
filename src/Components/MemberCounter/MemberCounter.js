import React, { useContext } from "react";
import AuthContext from "../../Store/login-context";
import styles from "./MemberCounter.module.css";

const MemberCounter = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <h1>Members</h1>
      <p>{ctx.checkUser.length}</p>
    </div>
  );
};

export default MemberCounter;
