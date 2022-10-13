import Modal from "../../UI/Modal/Modal";
import styles from "../Edit.module.css";

const EditPersonal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>Personal Information</h1>
      <p>Must be completed</p>
      <form>
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input type="pin" placeholder="pin"></input>
        <input type="text" placeholder="Programming Language"></input>
        <div className={styles.buttons}>
          <button>Submit</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPersonal;
