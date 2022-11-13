import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";
import { useContext } from "react";
import AuthContext from "../../../Store/login-context";
import { useSelector } from "react-redux";

const EditSkills = (props) => {
  const frameworkInputRef = useRef();
  const educationInputRef = useRef();
  const experienceInputRef = useRef();
  const currentRoleInputRef = useRef();

  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const submitEditSkills = (e) => {
    e.preventDefault();

    const enteredFrameworks = frameworkInputRef.current.value;
    const enteredEducation = educationInputRef.current.value;
    const enteredExperience = experienceInputRef.current.value;
    const enteredCurrentRole = currentRoleInputRef.current.value;

    const skillsData = {
      frameworks: enteredFrameworks,
      education: enteredEducation,
      experience: enteredExperience,
      currentRole: enteredCurrentRole,
    };

    dispatch(editAccountActions.setSkillsInformation(skillsData));

    dispatch(editAccountActions.editSkillsDetails(skillsData));

    ctx.fetchData();

    dispatch(editAccountActions.modalStateHandler());
  };

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
      <h1>Skills and Experience</h1>
      <p>Optional</p>
      <form onSubmit={submitEditSkills}>
        <input
          className={styles.input}
          type="text"
          ref={frameworkInputRef}
          placeholder="Frameworks"
          defaultValue={checkProvided(userInfo.skills.frameworks)}
        ></input>
        <select
          className={styles.input}
          ref={educationInputRef}
          placeholder="Education"
          defaultValue={checkProvided(userInfo.skills.education)}
        >
          <option value="" disabled selected>
            How do you know how to code?
          </option>
          <option value="university">University</option>
          <option value="bootcamp">Bootcamp</option>
          <option value="self-taught">Self Taught</option>
          <option value="tafe">Tafe</option>
          <option value="none">Looking for right path</option>
        </select>
        <input
          className={styles.input}
          type="number"
          min="0"
          ref={experienceInputRef}
          placeholder="How many years experience (years)"
          defaultValue={checkProvided(userInfo.skills.experience)}
        ></input>
        <input
          className={styles.input}
          type="text"
          ref={currentRoleInputRef}
          placeholder="Current Role"
          defaultValue={checkProvided(userInfo.skills.currentRole)}
        ></input>
        <div className={styles.buttons}>
          <button className={styles.button}>Submit</button>
          <button onClick={props.onClose} className={styles.button}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditSkills;
