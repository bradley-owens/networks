import React, { useEffect, useContext, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/authentication-slice";
import AuthContext from "../../Store/login-context";
import Input from "../UI/Inputs/Input";
import styles from "./SignInForm.module.css";

const SignInForm = (props) => {
  const usernameReducer = (state, action) => {
    if (action.type === "USER-INPUT") {
      return {
        value: action.val,
        isValid: action.val.includes(".com") && action.val.length > 16,
      };
    }
    if (action.type === "INPUT-BLUR") {
      return {
        value: state.value,
        isValid: state.value.includes(".com") && state.value.length > 16,
      };
    }
    return { value: "", isValid: false };
  };

  const pinReducer = (state, action) => {
    if (action.type === "USER-INPUT") {
      return {
        value: action.val,
        isValid: action.val > 999,
      };
    }
    if (action.type === "INPUT-BLUR") {
      return {
        value: state.value,
        isValid: state.value > 999,
      };
    }
    return { value: "", isValid: false };
  };

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [pinState, dispatchPin] = useReducer(pinReducer, {
    value: "",
    isValid: null,
  });

  const userNameHandler = (e) => {
    dispatchUsername({ type: "USER-INPUT", val: e.target.value });
  };
  const userPinHandler = (e) => {
    dispatchPin({ type: "USER-INPUT", val: e.target.value });
  };

  const validateUsername = () => {
    dispatchUsername({ type: "INPUT-BLUR" });
  };
  const validatePin = () => {
    dispatchPin({ type: "INPUT-BLUR" });
  };

  const { isValid: emailIsValid } = usernameState;
  const { isValid: pinIsValid } = pinState;

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(emailIsValid && pinIsValid);
  }, [emailIsValid, pinIsValid]);

  const [userCorrect, setUserCorrect] = useState(true);

  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();

  const checkForUser = (username, password) => {
    setUserCorrect(true);
    ctx.checkUser.forEach((user) => {
      if (user.email.includes(username) && user.pin.includes(password)) {
        dispatch(authActions.login(user));
      } else {
        setUserCorrect(false);
      }
    });
  };

  const submitCreateUserForm = (e) => {
    e.preventDefault();

    if (formIsValid) {
      checkForUser(usernameState.value, pinState.value);
    }
  };

  const signInAsGuest = () => {
    const guest = {
      email: "guest12345@guest.com",
      pin: 1234,
      name: "Guest",
      language: "None",
    };

    dispatch(authActions.login(guest));
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitCreateUserForm}>
      <Input
        isValid={emailIsValid}
        accCorrect={userCorrect}
        placeholder="E-Mail"
        type="email"
        value={usernameState.value}
        onChange={userNameHandler}
        onBlur={validateUsername}
      ></Input>

      <Input
        isValid={pinIsValid}
        accCorrect={userCorrect}
        placeholder="Pin"
        type="password"
        value={pinState.value}
        onChange={userPinHandler}
        onBlur={validatePin}
        maxLength={4}
      ></Input>
      <div className={styles["flex-button"]}>
        <button
          type="submit"
          className={
            formIsValid
              ? styles["login-button"]
              : styles["login-button_disabled"]
          }
        >
          Sign In
        </button>

        <button className={styles["login-button"]} onClick={signInAsGuest}>
          Sign in as Guest
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
