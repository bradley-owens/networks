import Modal from "../UI/Modal/Modal";

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
        <button>Submit</button>
      </form>
    </Modal>
  );
};

export default EditPersonal;
