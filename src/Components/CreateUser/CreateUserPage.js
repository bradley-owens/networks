import React from "react";
import CreateUserForm from "./CreateUserForm";
import MemberCounter from "../MemberCounter/MemberCounter";
import styles from "./CreateUserPage.module.css";
import img from "../IMG/CreateAccImg.svg";

const CreateUserPage = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles["main-title"]}>NetWORKS</h1>
      <div className={styles["main-container"]}>
        <h1 className={styles["login-title"]}>Create an Account</h1>
        <CreateUserForm />
        <div className={styles["create-login-container"]}>
          <p className={styles["create-login-description"]}>
            Already have one?
          </p>
          <button className={styles["link"]}>Sign in!</button>
        </div>
      </div>
      <img className={styles.img} src={img} alt="network"></img>
      <MemberCounter />
    </div>
  );
};

export default CreateUserPage;
