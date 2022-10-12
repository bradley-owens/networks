import { editAccountActions } from "../../Store/editAccount-slice";
import { useDispatch } from "react-redux";
import { db } from "../../Store/Firebase";
import Modal from "../../Components/UI/Modal/Modal";

const AccountEdit = () => {
  const dispatch = useDispatch();
  const database = db.collection("Users");

  const editPersonalDetailsHandler = (e) => {
    e.preventDefault();

    dispatch(
      editAccountActions.editPersonalDetails({
        name: "TESTSLICE",
        email: "TESTSLICE",
      })
    );
  };
  return <Modal></Modal>;
};

export default AccountEdit;

{
  /* <h1 className={styles.title}>Edit Profile</h1>
<div className={styles["modal-flex"]}>
  <div className={styles["account-modal"]}>
  
  </div>
  <div className={styles["personal-modal"]}>
   
      <input type="text" placeholder="LinkedIN"></input>
      <input type="text" placeholder="Github"></input>
      <input type="text" placeholder="Portfolio Website"></input>
      <button>Submit</button>
    </form>
  </div>
</div> */
}
