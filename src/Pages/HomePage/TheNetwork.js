import React, { useContext } from "react";
import AuthContext from "../../Store/login-context";
import MemberCard from "../../Components/UI/MemberCard/MemberCard";
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
              name={user.name}
              email={user.email}
              language={user.language}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheNetwork;
