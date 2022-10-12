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
        <button>Submit</button>
      </form>
    </Modal>
  );
};

export default EditContact;
