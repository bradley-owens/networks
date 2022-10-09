import React, { useState } from "react";
import img from "../IMG/CreateAccImg.svg";
import SignInForm from "./SignInForm";
import styles from "./SignInPage.module.css";
import { Link } from "react-router-dom";
import CreateUserPage from "../CreateUser/CreateUserPage";

const SignInPage = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>NetWORKS</h1>
      <div className={styles["main-container"]}>
        <h1 className={styles["login-title"]}>Sign in </h1>
        <SignInForm />
        <div className={styles["create-login-container"]}>
          <Link className={styles["link"]} to="/create-user">
            Create Account
          </Link>
        </div>
      </div>
      <img className={styles.img} src={img} alt="network"></img>
    </div>
  );
};

export default SignInPage;
