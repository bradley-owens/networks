import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/login-context";
import styles from "./MemberDetail.module.css";

const MemberDetail = () => {
  const params = useParams();
  const ctx = useContext(AuthContext);

  const clickedUser = ctx.checkUser.find((user) => {
    if (user.id.id === params.memberId) return user;
  });

  const checkProvided = (info) => {
    if (info === undefined || info === "") {
      return "Not Provided";
    }
    return info;
  };

  return (
    <div className={styles.container}>
      <div className={styles["header-flex"]}>
        <header>
          <h1>{`${clickedUser.info.name}'s Profile`}</h1>
        </header>
        <h2 className={styles.follow}>Follow</h2>
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
