import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { connectActions } from "../../Store/connect-slice";
import AuthContext from "../../Store/login-context";
import styles from "./MemberDetail.module.css";

const MemberDetail = () => {
  const params = useParams();
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const clickedUser = ctx.checkUser.find((user) => {
    if (user.id.id === params.memberId) return user;
  });

  const [followingState, setFollowingState] = useState();

  const connections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  const checkFollowing = () => {
    Object.entries(connections.following).map((connection) => {
      let userEmail = connection[1].email;
      if (userEmail === clickedUser.info.email) {
        setFollowingState(true);
      }
    });
  };

  useEffect(() => {
    checkFollowing();
  }, [connections]);

  const followHandler = () => {
    dispatch(connectActions.follow({ clickedUser, loggedInUser }));
    ctx.fetchData();
  };

  const unfollowHandler = () => {
    dispatch(connectActions.unfollow({ clickedUser, loggedInUser }));
    ctx.fetchData();
  };

  const checkProvided = (info) => {
    if (info === undefined || info === "") {
      return "Not Provided";
    }
    return info;
  };

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles["header-flex"]}>
        <header>
          <h1>{`${clickedUser.info.name}'s Profile`}</h1>
        </header>

        {!followingState && (
          <h2 className={styles.follow} onClick={followHandler}>
            Follow
          </h2>
        )}
        {followingState && (
          <h2 className={styles.follow} onClick={unfollowHandler}>
            Unfollow
          </h2>
        )}

        <h2
          className={styles.connect}
        >{`${clickedUser.info.name} wants to connect`}</h2>
      </div>

      <label
        className={styles.label}
      >{`${clickedUser.info.name}'s Information`}</label>
      <main>
        <div>
          <label>Email</label>
          <h2>{clickedUser.info.email}</h2>
        </div>
        <div>
          <label>Current Role</label>
          <h2>{checkProvided(clickedUser.skills.currentRole)}</h2>
        </div>
        <div>
          <label>Education Pathway</label>
          <h2>{checkProvided(clickedUser.skills.education)}</h2>
        </div>
      </main>

      <label
        className={styles.label}
      >{`${clickedUser.info.name}'s skills`}</label>

      <main>
        <div>
          <label>Framweorks</label>
          <h2>{checkProvided(clickedUser.skills.frameworks)}</h2>
        </div>
        <div>
          <label> Programming Language</label>
          <h2>{clickedUser.info.language}</h2>
        </div>
        <div>
          <label>Years Experience</label>
          <h2>{checkProvided(clickedUser.skills.experience)}</h2>
        </div>
      </main>

      <label className={styles.label}>To check out...</label>
      <main>
        <div>
          <label>LinkedIN</label>
          <h2>{checkProvided(clickedUser.contact.linkedIn)}</h2>
        </div>
        <div>
          <label>Github</label>
          <h2>{checkProvided(clickedUser.contact.github)}</h2>
        </div>
        <div>
          <label>Portfolio Website</label>
          <h2>{checkProvided(clickedUser.contact.website)}</h2>
        </div>
      </main>
    </div>
  );
};

export default MemberDetail;
