import { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Connections from "../../Components/Account/Connections";
import LoadImage from "../../Components/Hooks/LoadImage";
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
    if (connections === undefined) {
      setFollowingState(false);
    } else {
      Object.entries(connections.following).map((connection) => {
        let userEmail = connection[1].email;
        if (userEmail === clickedUser.info.email) {
          setFollowingState(true);
        }
      });
    }
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
          <h1>{`${clickedUser.info.name}'s  Profile`}</h1>
        </header>
        <Connections />

        {!followingState && (
          <h2 className={styles.follow} onClick={followHandler}>
            Follow
          </h2>
        )}
        {followingState && (
          <h2 className={styles.unfollow} onClick={unfollowHandler}>
            Unfollow
          </h2>
        )}

        <img
          className={styles["profile-img"]}
          src={LoadImage(clickedUser.info.name)}
          alt="profile-pic"
        />
      </div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Information</label>
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
              <label> Programming Language</label>
              <h2>{clickedUser.info.language}</h2>
            </div>
            <div>
              <label> Wants to connect</label>
              <h2>Yes!</h2>
            </div>
          </main>
        </div>

        <div>
          <label className={styles.label}>Skills</label>

          <main>
            <div>
              <label>Framweorks</label>
              <h2>{checkProvided(clickedUser.skills.frameworks)}</h2>
            </div>
            <div>
              <label>Education Pathway</label>
              <h2>{checkProvided(clickedUser.skills.education)}</h2>
            </div>
            <div>
              <label>Years Experience</label>
              <h2>{checkProvided(clickedUser.skills.experience)}</h2>
            </div>
            <div>
              <label>Current Role</label>
              <h2>{checkProvided(clickedUser.skills.currentRole)}</h2>
            </div>
          </main>
        </div>
        <div>
          <label className={styles.label}>To check out...</label>
          <main>
            <div>
              <label>Twitter</label>
              <h2>{checkProvided(clickedUser.contact.twitter)}</h2>
            </div>
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
      </div>
    </div>
  );
};

export default MemberDetail;
