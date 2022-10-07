import React, { useEffect, useReducer, useState } from "react";
import { authActions } from "../../Store/authentication-slice";
import { useDispatch } from "react-redux";
import Input from "../UI/Inputs/Input";
import Select from "../UI/Select";
import styles from "./CreateUserForm.module.css";
import { editAccountActions } from "../../Store/editAccount-slice";

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

  const nameReducer = (state, action) => {
    if (action.type === "USER-INPUT") {
      return {
        value: action.val,
        isValid: action.val.length > 2,
      };
    }

    if (action.type === "INPUT-BLUR") {
      return {
        value: state.value,
        isValid: state.value.length > 2,
      };
    }
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

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });

  const [languageState, dispatchLanguage] = useReducer(languageReducer, {
    value: "",
    isValid: null,
  });
  //////////////////////////////////////////////////////////////
  const [formIsValid, setFormIsValid] = useState(false);

  const userNameHandler = (e) => {
    dispatchUsername({ type: "USER-INPUT", val: e.target.value });
  };
  const userPinHandler = (e) => {
    dispatchPin({ type: "USER-INPUT", val: e.target.value });
  };

  const nameHandler = (e) => {
    dispatchName({ type: "USER-INPUT", val: e.target.value });
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

  const validateName = () => {
    dispatchName({ type: "INPUT-BLUR" });
  };
  const validateLanguage = () => {
    dispatchLanguage({ type: "INPUT-BLUR" });
  };

  const { isValid: emailIsValid } = usernameState;
  const { isValid: pinIsValid } = pinState;
  const { isValid: languageIsValid } = languageState;
  const { isValid: nameIsValid } = nameState;

  useEffect(() => {
    setFormIsValid(
      emailIsValid && pinIsValid && languageIsValid && nameIsValid
    );
  }, [emailIsValid, pinIsValid, languageIsValid, nameIsValid]);

  const user = class {
    constructor(userName, password, language, name) {
      this.userName = userName;
      this.password = password;
      this.language = language;
      this.name = name;
    }
  };

  const dispatch = useDispatch();

  const submitCreateUserForm = (e) => {
    e.preventDefault();

    if (formIsValid) {
      let newUser = new user(
        usernameState.value,
        pinState.value,
        languageState.value,
        nameState.value
      );

      dispatch(authActions.createUser(newUser));
      dispatch(editAccountActions.setUser(newUser));
    }
  };

  const lengthOfPassword = 4;

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
        maxLength={lengthOfPassword}
      ></Input>

      <Input
        isValid={nameIsValid}
        placeholder="Name"
        type="name"
        value={nameState.value}
        onChange={nameHandler}
        onBlur={validateName}
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
        className={
          formIsValid ? styles["login-button"] : styles["login-button_disabled"]
        }
      >
        Join
      </button>
    </form>
  );
};

export default CreateUserForm;
