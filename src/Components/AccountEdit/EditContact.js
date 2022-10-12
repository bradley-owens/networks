import styles from "./Edit.module.css";
import Modal from "../UI/Modal/Modal";

const EditContact = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>Contact Information</h1>
      <p>Optional</p>
      <form>
        <input type="text" placeholder="LinkedIN"></input>
        <input type="text" placeholder="Github"></input>
        <input type="text" placeholder="Portfolio Website"></input>
        <div className={styles.buttons}>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditContact;
