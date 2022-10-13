import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";

const EditPersonal = (props) => {
  //////////////////////////////////////////////////////////
  const nameReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
        isValid: action.val.length > 2,
      };

    if (action.type === "INPUT-BLUR")
      return {
        value: state.value,
        isValid: state.value.length > 2,
      };

    return { value: "", isValid: false };
  };

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
  });

  const nameHandler = (e) => {
    dispatchName({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  const validateName = () => {
    dispatchName({
      type: "INPUT-BLUR",
    });
  };

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  const emailReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
        isValid: action.val.includes(".com") && action.val.length > 16,
      };

    if (action.type === "INPUT-BLUR")
      return {
        value: state.value,
        isValid: state.value.includes(".com") && action.val.length > 16,
      };

    return { value: "", isValid: false };
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const emailHandler = (e) => {
    dispatchEmail({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  const validateEmail = () => {
    dispatchEmail({
      type: "INPUT-BLUR",
    });
  };

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  const pinReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
        isValid: action.val > 999.9,
      };

    if (action.type === "INPUT-BLUR")
      return {
        value: state.value,
        isValid: state.value > 999.9,
      };
  };

  const [pinState, dispatchPin] = useReducer(pinReducer, {
    value: "",
    isValid: false,
  });

  const pinHandler = (e) => {
    dispatchPin({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  const validatePin = () => {
    dispatchPin({
      type: "INPUT-BLUR",
    });
  };

  //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////

  const languageReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
        isValid: true,
      };

    if (action.type === "INPUT-BLUR")
      return {
        value: state.value,
        isValid: state.value,
      };
  };

  const [languageState, dispatchLanguage] = useReducer(languageReducer, {
    value: "",
    isValid: false,
  });

  const languageHandler = (e) => {
    dispatchLanguage({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  const validateLanguage = () => {
    dispatchLanguage({
      type: "INPUT-BLUR",
    });
  };

  //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////

  const dispatch = useDispatch();
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    pin: "",
    language: "",
  });

  const editPersonalSubmit = (e) => {
    e.preventDefault();

    setPersonalDetails({
      name: nameState.value,
      email: emailState.value,
      pin: pinState.value,
      language: languageState.value,
    });

    dispatch(editAccountActions.modalStateHandler());
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Personal Information</h1>
      <p>Must be completed</p>
      <form onSubmit={editPersonalSubmit}>
        <input
          type="text"
          onChange={nameHandler}
          onBlur={validateName}
          placeholder="name"
        ></input>

        <input
          type="email"
          onChange={emailHandler}
          onBlur={validateEmail}
          placeholder="email"
        ></input>
        <input
          type="pin"
          onChange={pinHandler}
          onBlur={validatePin}
          placeholder="pin"
        ></input>
        <input
          type="text"
          onChange={languageHandler}
          onBlur={validateLanguage}
          placeholder="Programming Language"
        ></input>
        <div className={styles.buttons}>
          <button>Submit</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPersonal;
