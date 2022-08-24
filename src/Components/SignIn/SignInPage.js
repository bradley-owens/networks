import React from "react";
import AuthContext from "../../Store/login-context";
import { db } from "../../Store/Firebase";
import img from "../IMG/CreateAccImg.svg";
import SignInForm from "./SignInForm";

import styles from "./SignInPage.module.css";

const SignInPage = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>NetWORKS</h1>
      <div className={styles["main-container"]}>
        <h1 className={styles["login-title"]}>Sign in </h1>
        <SignInForm />
        <div className={styles["create-login-container"]}>
          <button className={styles["link"]}>Create Account</button>
        </div>
      </div>
      <img className={styles.img} src={img} alt="network"></img>
    </div>
  );
};

export default SignInPage;
