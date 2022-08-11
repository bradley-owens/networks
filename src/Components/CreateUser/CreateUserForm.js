import React, { useEffect, useReducer, useState, useContext } from "react";
import AuthContext from "../../Store/login-context";
import styles from "./CreateUserForm.module.css";
import Input from "../UI/Input";
import Select from "../UI/Select";

const CreateUserForm = (props) => {
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

  const languageReducer = (state, action) => {
    if (action.type === "USER-INPUT") {
      return {
        value: action.val,
        isValid: true,
      };
    }
    if (action.type === "INPUT-BLUR") {
      return {
        value: state.value,
        isValid: true,
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

  const [languageState, dispatchLanguage] = useReducer(languageReducer, {
    value: "",
    isValid: null,
  });
  //////////////////////////////////////////////////////////////
  const [formIsValid, setFormIsValid] = useState(false);
  const ctx = useContext(AuthContext);

  const userNameHandler = (e) => {
    dispatchUsername({ type: "USER-INPUT", val: e.target.value });
  };
  const userPinHandler = (e) => {
    dispatchPin({ type: "USER-INPUT", val: e.target.value });
  };
  const userLanguageHandler = (e) => {
    dispatchLanguage({ type: "USER-INPUT", val: e.target.value });
  };

  const validateUsername = () => {
    dispatchUsername({ type: "INPUT-BLUR" });
  };
  const validatePin = () => {
    dispatchPin({ type: "INPUT-BLUR" });
  };
  const validateLanguage = () => {
    dispatchLanguage({ type: "INPUT-BLUR" });
  };

  const { isValid: emailIsValid } = usernameState;
  const { isValid: pinIsValid } = pinState;
  const { isValid: languageIsValid } = languageState;
  useEffect(() => {
    setFormIsValid(emailIsValid && pinIsValid && languageIsValid);
  }, [emailIsValid, pinIsValid, languageIsValid]);

  const user = class {
    //making password a private field (instance)
    #password;
    constructor(userName, password, language) {
      this.userName = userName;
      this.#password = password;
      this.language = language;
    }
  };

  const submitCreateUserForm = (e) => {
    e.preventDefault();

    if (formIsValid) {
      const newUser = new user(
        usernameState.value,
        pinState.value,
        languageState.value
      );

      ctx.onLogin(newUser);
    }
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitCreateUserForm}>
      <Input
        isValid={emailIsValid}
        placeholder="E-Mail"
        type="email"
        value={usernameState.value}
        onChange={userNameHandler}
        onBlur={validateUsername}
      ></Input>

      <Input
        isValid={pinIsValid}
        placeholder="Pin"
        type="password"
        value={pinState.value}
        onChange={userPinHandler}
        onBlur={validatePin}
        maxLength={4}
      ></Input>

      <Select
        isValid={languageIsValid}
        placeholder="Language"
        onChange={userLanguageHandler}
        value={languageState.value}
        onBlur={validateLanguage}
      ></Select>

      <button
        type="submit"
        disabled={!formIsValid}
        className={styles["login-button"]}
      >
        Join
      </button>
    </form>
  );
};

export default CreateUserForm;
