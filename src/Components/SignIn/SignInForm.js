import React from "react";
import Input from "../UI/Input";
import styles from "./SignInForm.module.css";

const SignInForm = (props) => {
  return (
    <form
      className={styles["form-container"]}
      // onSubmit={submitCreateUserForm}
    >
      <Input
      // isValid={emailIsValid}
      // placeholder="E-Mail"
      // type="email"
      // value={usernameState.value}
      // onChange={userNameHandler}
      // onBlur={validateUsername}
      ></Input>

      <Input
      // isValid={pinIsValid}
      // placeholder="Pin"
      // type="password"
      // value={pinState.value}
      // onChange={userPinHandler}
      // onBlur={validatePin}
      // inputProps={{ maxLength: lengthOfPassword }}
      ></Input>

      <button
        type="submit"
        className={
          // formIsValid ? styles["login-button"] :
          styles["login-button_disabled"]
        }
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
