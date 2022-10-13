import styles from "../Edit.module.css";
import Modal from "../../UI/Modal/Modal";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";

const EditContact = (props) => {
  const linkedInReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [linkedInState, dispatchLinkedIn] = useReducer(linkedInReducer, {
    value: "",
  });

  const linkedInHandler = (e) => {
    dispatchLinkedIn({ type: "USER-INPUT", val: e.target.value });
  };

  //////////////////////////////////////////////////

  const githubReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [githubState, dispatchGithub] = useReducer(githubReducer, {
    value: "",
  });

  const githubHandler = (e) => {
    dispatchGithub({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  ////////////////////////////////////////////////////

  const websiteReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [websiteState, dispatchWebsite] = useReducer(websiteReducer, {
    value: "",
  });

  const websiteHandler = (e) => {
    dispatchWebsite({ type: "USER-INPUT", val: e.target.value });
  };

  // //////////////////////////////////////////////////

  const [contactDetails, setContactDetails] = useState({
    linkedIn: "",
    github: "",
    website: "",
  });
  const dispatch = useDispatch();

  const editContactSubmit = (e) => {
    e.preventDefault();

    setContactDetails({
      linkedIn: linkedInState.value,
      github: githubState.value,
      website: websiteState.value,
    });

    dispatch(editAccountActions.modalStateHandler());
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Contact Information</h1>
      <p>Optional</p>
      <form onSubmit={editContactSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={linkedInHandler}
          placeholder="LinkedIN"
        ></input>
        <input
          className={styles.input}
          type="text"
          onChange={githubHandler}
          placeholder="Github"
        ></input>
        <input
          className={styles.input}
          type="text"
          onChange={websiteHandler}
          placeholder="Portfolio Website"
        ></input>
        <div className={styles.buttons}>
          <button className={styles.button}>Submit</button>
          <button className={styles.button} onClick={props.onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditContact;
