import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { editAccountActions } from "../../../Store/editAccount-slice";
import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";
import { useContext } from "react";
import AuthContext from "../../../Store/login-context";
import { useSelector } from "react-redux";

const EditSkills = (props) => {
  /////////////////////////////////////////////////////////////////////
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

  const currentRoleReducer = (state, action) => {
    if (action.type === "USER-INPUT")
      return {
        value: action.val,
      };
  };

  const [currentRoleState, dispatchCurrentRole] = useReducer(
    currentRoleReducer,
    {
      value: "",
    }
  );

  const currentRoleHandler = (e) => {
    dispatchCurrentRole({
      type: "USER-INPUT",
      val: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////

  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const submitEditSkills = (e) => {
    e.preventDefault();

    dispatch(
      editAccountActions.setSkillsInformation({
        frameworks: frameworkState.value,
        education: educationState.value,
        experience: experienceState.value,
        currentRole: currentRoleState.value,
      })
    );

    dispatch(
      editAccountActions.editSkillsDetails({
        frameworks: frameworkState.value,
        education: educationState.value,
        experience: experienceState.value,
        currentRole: currentRoleState.value,
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
          onChange={frameworkHandler}
          placeholder="Frameworks"
          defaultValue={checkProvided(userInfo.skills.frameworks)}
        ></input>
        <select
          className={styles.input}
          onChange={educationHandler}
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
          onChange={experienceHandler}
          placeholder="How many years experience (years)"
          defaultValue={checkProvided(userInfo.skills.experience)}
        ></input>
        <input
          className={styles.input}
          type="text"
          onChange={currentRoleHandler}
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
