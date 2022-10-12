import Modal from "../UI/Modal/Modal";

const EditSkills = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>Skills and Experience</h1>
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
      </form>
    </Modal>
  );
};

export default EditSkills;
