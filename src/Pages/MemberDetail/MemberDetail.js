import { click } from "@testing-library/user-event/dist/click";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/login-context";
import styles from "./MemberDetail.module.css";

const MemberDetail = () => {
  const params = useParams();
  const ctx = useContext(AuthContext);

  const clickedUser = ctx.checkUser.find(
    (user) => user.id === params.memberId
  ).info;

  const checkProvided = (info) => {
    if (info === undefined) {
      return "Not Provided";
    }
    return info;
  };

  if (!clickedUser) {
    return <p> User does not exist</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles["header-flex"]}>
        <header>
          <h1>{`${clickedUser.name}'s Profile`}</h1>
        </header>
        <h2 className={styles.follow}>Follow</h2>
        <h2
          className={styles.connect}
        >{`${clickedUser.name} wants to connect`}</h2>
      </div>

      <label
        className={styles.label}
      >{`${clickedUser.name}'s Information`}</label>
      <main>
        <div>
          <label>Email</label>
          <h2>{clickedUser.email}</h2>
        </div>
        <div>
          <label>Position</label>
          <h2>{checkProvided(clickedUser.postion)}</h2>
        </div>
        <div>
          <label>Location</label>
          <h2>{checkProvided(clickedUser.location)}</h2>
        </div>
        <div>
          <label>Education Pathway</label>
          <h2>{checkProvided(clickedUser.education)}</h2>
        </div>
      </main>

      <label className={styles.label}>{`${clickedUser.name}'s skills`}</label>

      <main>
        <div>
          <label>Framweorks</label>
          <h2>{checkProvided(clickedUser.frameworks)}</h2>
        </div>
        <div>
          <label> Programming Language</label>
          <h2>{clickedUser.language}</h2>
        </div>
        <div>
          <label>Years Experience</label>
          <h2>{checkProvided(clickedUser.experience)}</h2>
        </div>
      </main>

      <label className={styles.label}>To check out...</label>
      <main>
        <div>
          <label>LinkedIN</label>
          <h2>{checkProvided(clickedUser.linkedin)}</h2>
        </div>
        <div>
          <label>Github</label>
          <h2>{checkProvided(clickedUser.github)}</h2>
        </div>
        <div>
          <label>Portfolio Website</label>
          <h2>{checkProvided(clickedUser.ortfolio)}</h2>
        </div>
      </main>
    </div>
  );
};

export default MemberDetail;
