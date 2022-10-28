import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connectActions } from "../../../Store/connect-slice";
import AuthContext from "../../../Store/login-context";
import CheckFollowing from "../../Account/CheckFollowing";
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

  const unfollowHandler = () => {
    const clickedUser = ctx.checkUser.find((user) => {
      if (user.id.id === props.id) return user;
    });
    dispatch(connectActions.unfollow({ clickedUser, loggedInUser }));
    ctx.fetchData();
  };

  const [followingState, setFollowingState] = useState();

  const connections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  const checkFollowing = () => {
    if (connections === undefined) {
      setFollowingState(false);
    } else {
      Object.entries(connections.following).map((connection) => {
        let userEmail = connection[1].email;
        if (userEmail === props.email) {
          setFollowingState(true);
        }
      });
    }
  };

  useEffect(() => {
    checkFollowing();
  }, [connections]);

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
        {!followingState && (
          <button className={styles.button} onClick={followHandler}>
            Follow
          </button>
        )}
        {followingState && (
          <button className={styles.unfollow} onClick={unfollowHandler}>
            Unfollow
          </button>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
