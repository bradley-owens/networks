import React from "react";
import { Link } from "react-router-dom";
import CreateUserForm from "../../Components/CreateUser/CreateUserForm";
import MemberCounter from "../../Components/MemberCounter/MemberCounter";
import styles from "./CreateUserPage.module.css";
import img from "../../Components/IMG/CreateAccImg.svg";

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
          <Link className={styles["link"]} to="/sign-in">
            Sign in!
          </Link>
        </div>
      </div>
      <img className={styles.img} src={img} alt="network"></img>
      <MemberCounter />
    </div>
  );
};

export default CreateUserPage;
