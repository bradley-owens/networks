import React, { useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/login-context";
import MemberCard from "../UI/MemberCard/MemberCard";
import styles from "./TheNetwork.module.css";

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
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheNetwork;
