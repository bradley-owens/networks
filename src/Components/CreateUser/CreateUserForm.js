import React, { useEffect, useReducer, useState } from "react";
import styles from "./CreateUserForm.module.css";

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
  const [createdUsers, setCreatedUsers] = useState([]);

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
      let newUser = new user(
        usernameState.value,
        pinState.value,
        languageState.value
      );

      createdUsers.push(newUser);
      props.onLogin(createdUsers);
    }
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitCreateUserForm}>
      <input
        className={`${styles.input} ${
          usernameState.isValid === false ? styles.invalid : ""
        }`}
        placeholder="Email"
        value={usernameState.value}
        onChange={userNameHandler}
        onBlur={validateUsername}
      />
      <input
        className={`${styles.input} ${
          pinState.isValid === false ? styles.invalid : ""
        }`}
        placeholder="Pin"
        type="password"
        maxLength={4}
        onChange={userPinHandler}
        value={pinState.value}
        onBlur={validatePin}
      />

      <select
        className={`${styles.input} ${
          languageState.isValid === false ? styles.invalid : ""
        }`}
        name="Language"
        id="Language"
        onChange={userLanguageHandler}
        value={languageState.value}
        onBlur={validateLanguage}
      >
        <option value="" disabled selected>
          What's your language?
        </option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="Ruby">Ruby</option>
        <option value="PHP">PHP</option>
        <option value="Swift">Swift</option>
        <option value="None">Don't have one yet</option>
      </select>
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
