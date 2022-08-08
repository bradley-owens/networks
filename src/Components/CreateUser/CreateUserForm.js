import React, { useEffect, useState } from "react";
import styles from "./CreateUserForm.module.css";

const CreateUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userPin, setUserPin] = useState("");
  const [userLanguage, setUserLanguage] = useState();

  const [userNameValid, setUserNameValid] = useState();
  const [userPinValid, setUserPinValid] = useState();
  const [userLanguageValid, setUserLanguageValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [createdUsers, setCreatedUsers] = useState([]);

  let upperCaseLetters = /[A-Z]/g;
  let letters = /[a-zA-Z]/;

  const userNameHandler = (e) => {
    setUserName(e.target.value);
    setUserNameValid(!userName.match(upperCaseLetters) && userName.length > 5);
  };
  const userPinHandler = (e) => {
    setUserPin(e.target.value);
    setUserPinValid(!userPin.match(letters) && userPin.length > 2);
  };
  const userLanguageHandler = (e) => {
    setUserLanguage(e.target.value);
    setUserLanguageValid(true);
  };

  useEffect(() => {
    setFormIsValid(userNameValid && userPinValid && userLanguageValid);
  }, [userName, userPin, userLanguage]);

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

    if (
      userNameValid === true &&
      userPinValid === true &&
      userLanguageValid === true
    ) {
      let newUser = new user(userName, userPin, userLanguage);
      createdUsers.push(newUser);

      props.onLogin(createdUsers);
    } else {
      alert("Failed to create User! Try again!");
    }
  };

  return (
    <form className={styles["form-container"]} onSubmit={submitCreateUserForm}>
      <input
        className={`${styles.input} ${
          userNameValid === false ? styles.invalid : ""
        }`}
        placeholder="username"
        value={userName}
        onChange={userNameHandler}
      />
      <input
        className={`${styles.input} ${
          userPinValid === false ? styles.invalid : ""
        }`}
        placeholder="pin"
        type="password"
        maxLength={4}
        onChange={userPinHandler}
        value={userPin}
      />

      <select
        className={`${styles.input} ${
          userLanguageValid === false ? styles.invalid : ""
        }`}
        name="Language"
        id="Language"
        onChange={userLanguageHandler}
        value={userLanguage}
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
