import { Fragment, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import EditContact from "../../Components/AccountEdit/Contact/EditContact";
import EditPersonal from "../../Components/AccountEdit/Personal/EditPersonal";
import EditSkills from "../../Components/AccountEdit/Skills/EditSkills";
import AccountCard from "../../Components/UI/AccountCards/AccountCard";
import { authActions } from "../../Store/authentication-slice";
import { editAccountActions } from "../../Store/editAccount-slice";
import AuthContext from "../../Store/login-context";
import styles from "./AccountInformation.module.css";

const AccountInformation = () => {
  const user = useSelector((state) => state.authentication.loggedInUser);
  const ctx = useContext(AuthContext);
  const modalState = useSelector((state) => state.edit.modalState);
  const [clickedEditModal, setClickedEditModal] = useState();
  const dispatch = useDispatch();

  const modalHandler = (event) => {
    setClickedEditModal(event.target.id);
    dispatch(editAccountActions.modalStateHandler());
    ctx.fetchData();
  };

  const closeModalHandler = () => {
    dispatch(editAccountActions.modalStateHandler());
  };
  ///////////////////////////////////////
  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const userInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  });
  const checkProvided = (info) => {
    if (info === undefined || info === "") {
      return "None";
    }
    return info;
  };

  const editChoice = clickedEditModal;
  const history = useHistory();

  if (modalState)
    switch (editChoice) {
      case "personal":
        return <EditPersonal user={user} onClose={closeModalHandler} />;

      case "skills":
        return <EditSkills user={user} onClose={closeModalHandler} />;

      case "contact":
        return <EditContact user={user} onClose={closeModalHandler} />;
    }

  const deleteAccountHandler = () => {
    dispatch(authActions.deleteAccount());
    history.push("/sign-in");
    ctx.fetchData();
  };
  return (
    <Fragment>
      <div className={styles["modal-container"]}>
        <div className={styles.personal}>
          <AccountCard>
            <h1>Personal Details</h1>
            <label>Name</label>
            <h3>{userInfo.info.name}</h3>
            <label>Password Pin</label>
            <h3>{userInfo.info.pin}</h3>
            <label>Email</label>
            <h3>{userInfo.info.email}</h3>
            <label>Programming Language</label>
            <h3>{userInfo.info.language}</h3>

            <button id="personal" onClick={modalHandler}>
              Edit
            </button>
          </AccountCard>
        </div>

        <div className={styles.skills}>
          <AccountCard>
            <h1>Skills and Expereince</h1>
            <label>Frameworks</label>
            <h3>{checkProvided(userInfo.skills.frameworks)}</h3>
            <label>Education</label>
            <h3>{checkProvided(userInfo.skills.education)}</h3>
            <label>Years Expereince</label>
            <h3>{checkProvided(userInfo.skills.experience)}</h3>
            <label>Current Position</label>
            <h3>{checkProvided(userInfo.skills.currentRole)}</h3>
            <button id="skills" onClick={modalHandler}>
              Edit
            </button>
          </AccountCard>
        </div>

        <div className={styles.contact}>
          <AccountCard>
            <h1>Contact Information</h1>
            <label>Twitter</label>
            <h3>None</h3>
            <label>LinkedIN</label>
            <h3>{checkProvided(userInfo.contact.linkedIn)}</h3>
            <label>Github</label>
            <h3>{checkProvided(userInfo.contact.github)}</h3>
            <label>Portfolio Website</label>
            <h3>{checkProvided(userInfo.contact.website)}</h3>
            <button id="contact" onClick={modalHandler}>
              Edit
            </button>
          </AccountCard>
        </div>

        <div className={styles.connect}>
          <AccountCard>
            <h1>Want to Connect</h1>
            <div className={styles.flex}>
              <label>
                Clicking will display to all users that you want to connect with
                others on Networks!
              </label>
              <button> Connect!</button>
            </div>
          </AccountCard>
          <AccountCard>
            <h1>Remove Account</h1>
            <div className={styles.flex}>
              <label>
                If you wish to delete your account you can right here. However
                once clicked, this cannot be undone
              </label>
              <button onClick={deleteAccountHandler}>Delete</button>
            </div>
          </AccountCard>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountInformation;
