import React from "react";
import styles from "./MemberCounter.module.css";

const MemberCounter = (props) => {
  return (
    <div className={styles["user-container"]}>
      <h1 className={styles}>Members</h1>
      <p className={styles["members-number"]}>0</p>
    </div>
  );
};

export default MemberCounter;
