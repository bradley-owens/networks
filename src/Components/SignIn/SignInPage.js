import React, { useState } from "react";
import img from "../IMG/CreateAccImg.svg";
import SignInForm from "./SignInForm";
import styles from "./SignInPage.module.css";
import CreateUserPage from "../CreateUser/CreateUserPage";

const SignInPage = (props) => {
  const [clickedLinkState, setClickedLinkState] = useState(false);
  const toCreateAccountPage = () => {
    setClickedLinkState(true);
  };

  if (clickedLinkState) {
    return <CreateUserPage />;
  }
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>NetWORKS</h1>
      <div className={styles["main-container"]}>
        <h1 className={styles["login-title"]}>Sign in </h1>
        <SignInForm />
        <div className={styles["create-login-container"]}>
          <button className={styles["link"]} onClick={toCreateAccountPage}>
            Create Account
          </button>
        </div>
      </div>
      <img className={styles.img} src={img} alt="network"></img>
    </div>
  );
};

export default SignInPage;
