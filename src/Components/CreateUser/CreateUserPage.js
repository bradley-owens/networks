import React, { Fragment, useState } from "react";
import CreateUserForm from "./CreateUserForm";
import MemberCounter from "../MemberCounter/MemberCounter";
import styles from "./CreateUserPage.module.css";

const CreateUserPage = (props) => {
  return (
    <Fragment>
      <h1 className={styles["main-title"]}>NetWORKS</h1>
      <div className={styles["main-container"]}>
        <h1 className={styles["login-title"]}>Join My Group!</h1>
        <CreateUserForm onLogin={props.onLogin} />
        <div className={styles["create-login-container"]}>
          <p className={styles["create-login description"]}>
            Already have one?
          </p>
          <button className={styles["link"]}>Sign in!</button>
        </div>
      </div>
      <MemberCounter />
    </Fragment>
  );
};

export default CreateUserPage;
