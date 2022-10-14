import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";

const EditSkills = (props) => {
  const frameworkReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [frameworkState, dispatchFramework] = useReducer(frameworkReducer, {
    value: "",
  });

  const frameworkHandler = (e) => {
    dispatchFramework({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////

  const educationReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [educationState, dispatchEducation] = useReducer(educationReducer, {
    value: "",
  });

  const educationHandler = (e) => {
    dispatchEducation({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////

  const experienceReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
        isValid: action.val >= 0,
      };

    if (state.isValid)
      return {
        value: state.value,
      };
  };

  const [experienceState, dispatchExperience] = useReducer(experienceReducer, {
    value: "",
    isValid: null,
  });

  const experienceHandler = (e) => {
    dispatchExperience({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////

  const dispatch = useDispatch();

  const [skillsDetails, setSkillsDetails] = useState({
    frameworks: "",
    education: "",
    experience: "",
  });

  const submitEditSkills = (e) => {
    e.preventDefault();

    setSkillsDetails({
      frameworks: frameworkState.value,
      education: educationState.value,
      experience: experienceState.value,
    });

    dispatch(editAccountActions.modalStateHandler());
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Skills and Experience</h1>
      <p>Optional</p>
      <form onSubmit={submitEditSkills}>
        <input
          className={styles.input}
          type="text"
          onChange={frameworkHandler}
          placeholder="Frameworks"
        ></input>
        <select
          className={styles.input}
          onChange={educationHandler}
          placeholder="Education"
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
          onChange={experienceHandler}
          placeholder="How many years experience (years)"
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
