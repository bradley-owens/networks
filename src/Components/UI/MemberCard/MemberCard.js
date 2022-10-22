import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connectActions } from "../../../Store/connect-slice";
import AuthContext from "../../../Store/login-context";
import styles from "./MemberCard.module.css";

const MemberCard = (props) => {
  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const followHandler = () => {
    const clickedUser = ctx.checkUser.find((user) => {
      if (user.id.id === props.id) return user;
    });
    dispatch(connectActions.follow({ clickedUser, loggedInUser }));
    ctx.fetchData();
  };

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
        <button className={styles.button} onClick={followHandler}>
          Follow
        </button>
      </div>
    </div>
  );
};

export default MemberCard;
