import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
        <h4> Code: {props.language}</h4>
      </div>
      <div className={styles.buttons}>
        <button>View</button>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default MemberCard;
