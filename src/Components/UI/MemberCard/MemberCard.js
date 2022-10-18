import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <Link to={`/${props.id}`} className={styles.button}>
          View
        </Link>
        <button className={styles.button}>Follow</button>
      </div>
    </div>
  );
};

export default MemberCard;
