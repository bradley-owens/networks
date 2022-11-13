import styles from "../Edit.module.css";
import Modal from "../../UI/Modal/Modal";
import { useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import AuthContext from "../../../Store/login-context";

const EditContact = (props) => {
  const twitterInputRef = useRef();
  const linkedInInputRef = useRef();
  const githubInputRef = useRef();
  const websiteInputRef = useRef();

  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const editContactSubmit = (e) => {
    e.preventDefault();

    const enteredTwitter = twitterInputRef.current.value;
    const enteredLinkedIn = linkedInInputRef.current.value;
    const enteredGithub = githubInputRef.current.value;
    const enteredWebsite = websiteInputRef.current.value;

    const contactData = {
      twitter: enteredTwitter,
      linkedIn: enteredLinkedIn,
      github: enteredGithub,
      website: enteredWebsite,
    };

    dispatch(editAccountActions.setContactInformation(contactData));

    dispatch(editAccountActions.editContactDetails(contactData));

    ctx.fetchData();

    dispatch(editAccountActions.modalStateHandler());
  };

  // /////////////////////////////////////

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );
  const userInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  });
  const checkProvided = (info) => {
    if (info === undefined || info === "") {
      return;
    }
    return info;
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Contact Information</h1>
      <p>Optional</p>
      <form onSubmit={editContactSubmit}>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkProvided(userInfo.contact.twitter)}
          ref={twitterInputRef}
          placeholder="Twitter"
        ></input>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkProvided(userInfo.contact.linkedIn)}
          ref={linkedInInputRef}
          placeholder="LinkedIN"
        ></input>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkProvided(userInfo.contact.github)}
          ref={githubInputRef}
          placeholder="Github"
        ></input>
        <input
          className={styles.input}
          type="text"
          defaultValue={checkProvided(userInfo.contact.website)}
          ref={websiteInputRef}
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
