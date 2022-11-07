import React, { useContext } from "react";
import AuthContext from "../../Store/login-context";
import MemberCard from "../UI/MemberCard/MemberCard";
import styles from "./TheNetwork.module.css";
import LoadImage from "../Hooks/LoadImage";

const TheNetwork = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles["network-container"]}>
      <h1 className={styles.title}>The Network</h1>
      <div className={styles["network-grid"]}>
        {ctx.checkUser.map((user) => {
          return (
            <MemberCard
              key={Math.random()}
              id={user.id.id}
              name={user.info.name}
              email={user.info.email}
              language={user.info.language}
              imgSrc={LoadImage(user.info.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheNetwork;
