import { useReducer } from "react";
import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";

const EditSkills = (props) => {
  const frameworkReducer = (state, action) => {
    if (action.type === "USER-INPUT") return { value: action.val };
  };

  const [frameworkState, dispatchFramework] = useReducer(frameworkReducer, {
    value: "",
  });

  const frameworkHandler = (e) => {
    dispatchFramework({
      val: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////

  return (
    <Modal onClose={props.onClose}>
      <h1>Skills and Experience</h1>
      <p>Optional</p>
      <form>
        <input
          className={styles.input}
          type="text"
          onChange={frameworkHandler}
          placeholder="Frameworks"
        ></input>
        <select className={styles.input} placeholder="Education">
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
