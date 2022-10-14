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
