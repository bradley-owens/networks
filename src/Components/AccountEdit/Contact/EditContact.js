import styles from "../Edit.module.css";
import Modal from "../../UI/Modal/Modal";
import { useContext, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import AuthContext from "../../../Store/login-context";

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

  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const editContactSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editAccountActions.setContactInformation({
        linkedIn: linkedInState.value,
        github: githubState.value,
        website: websiteState.value,
      })
    );

    dispatch(
      editAccountActions.editContactDetails({
        linkedIn: linkedInState.value,
        github: githubState.value,
        website: websiteState.value,
      })
    );

    ctx.fetchData();

    dispatch(editAccountActions.modalStateHandler());
  };

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );
  const userInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).contact;

  const checkLinkedInProvided = () => {
    if (userInfo === undefined) return "";
    else if (userInfo.linkedIn === undefined || userInfo.linkedIn === "None") {
      return "";
    }
    return userInfo.linkedIn;
  };

  const checkGithubProvided = () => {
    if (userInfo === undefined) return "";
    else if (userInfo.github === undefined || userInfo.github === "None") {
      return "";
    }
    return userInfo.github;
  };

  const checkWebsiteProvided = () => {
    if (userInfo === undefined) return "";
    else if (userInfo.website === undefined || userInfo.website === "None") {
      return "";
    }
    return userInfo.website;
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Contact Information</h1>
      <p>Optional</p>
      <form onSubmit={editContactSubmit}>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkLinkedInProvided()}
          onChange={linkedInHandler}
          placeholder="LinkedIN"
        ></input>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkGithubProvided()}
          onChange={githubHandler}
          placeholder="Github"
        ></input>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkWebsiteProvided()}
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
