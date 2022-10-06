import { Fragment } from "react";
import styles from "./AccountEdit.module.css";

const AccountEdit = () => {
  return (
    <Fragment>
      <h1 className={styles.title}>Edit Profile</h1>
      <div className={styles["modal-flex"]}>
        <div className={styles["account-modal"]}>
          <h3>Account Information</h3>
          <p>Must be completed</p>
          <form>
            <input type="text" placeholder="name"></input>
            <input type="email" placeholder="email"></input>
            <input type="pin" placeholder="pin"></input>
            <input type="text" placeholder="Programming Language"></input>
            <button>Submit</button>
          </form>
        </div>
        <div className={styles["personal-modal"]}>
          <h3>Personal Information</h3>
          <p>Optional</p>
          <form>
            <input type="text" placeholder="Frameworks"></input>
            <select placeholder="Education">
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
              type="number"
              placeholder="How many years experience (years)"
            ></input>
            <input type="text" placeholder="LinkedIN"></input>
            <input type="text" placeholder="Github"></input>
            <input type="text" placeholder="Portfolio Website"></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountEdit;
