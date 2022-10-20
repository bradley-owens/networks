import { Fragment, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditContact from "../../Components/AccountEdit/Contact/EditContact";
import EditPersonal from "../../Components/AccountEdit/Personal/EditPersonal";
import EditSkills from "../../Components/AccountEdit/Skills/EditSkills";
import AccountCard from "../../Components/UI/AccountCards/AccountCard";
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
  const contactInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).contact;

  const skillsInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).skills;

  const personalInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).info;

  ///////////////////////////////////////

  const checkLinkedInProvided = () => {
    if (contactInfo === undefined) {
      return "None";
    } else if (
      contactInfo.linkedIn === undefined ||
      contactInfo.linkedIn === ""
    ) {
      return "None";
    }
    return contactInfo.linkedIn;
  };

  const checkGithubProvided = () => {
    if (contactInfo === undefined) {
      return "None";
    } else if (contactInfo.github === undefined || contactInfo.github === "") {
      return "None";
    }
    return contactInfo.github;
  };

  const checkWebsiteProvided = () => {
    if (contactInfo === undefined) {
      return "None";
    } else if (
      contactInfo.website === undefined ||
      contactInfo.website === ""
    ) {
      return "None";
    }
    return contactInfo.website;
  };

  ///////////////////////////////////////////////////////////////////
  const checkFrameworksProvided = () => {
    if (skillsInfo === undefined) return "None";
    else if (
      skillsInfo.frameworks === undefined ||
      skillsInfo.frameworks === ""
    ) {
      return "None";
    }
    return skillsInfo.frameworks;
  };

  const checkEducationProvided = () => {
    if (skillsInfo === undefined) return "None";
    else if (
      skillsInfo.education === undefined ||
      skillsInfo.education === ""
    ) {
      return "None";
    }
    return skillsInfo.education;
  };

  const checkExperienceProvided = () => {
    if (skillsInfo === undefined) return "None";
    else if (
      skillsInfo.experience === undefined ||
      skillsInfo.experience === ""
    ) {
      return "None";
    }
    return skillsInfo.experience;
  };

  const checkCurrentRoleProvided = () => {
    if (skillsInfo === undefined) return "None";
    else if (
      skillsInfo.currentRole === undefined ||
      skillsInfo.currentRole === ""
    ) {
      return "None";
    }
    return skillsInfo.currentRole;
  };
  ///////////////////////////////////////////////////////////////////

  const editChoice = clickedEditModal;

  if (modalState)
    switch (editChoice) {
      case "personal":
        return <EditPersonal user={user} onClose={closeModalHandler} />;

      case "skills":
        return <EditSkills user={user} onClose={closeModalHandler} />;

      case "contact":
        return <EditContact user={user} onClose={closeModalHandler} />;
    }

  return (
    <Fragment>
      <div className={styles["modal-container"]}>
        <div className={styles.personal}>
          <AccountCard>
            <h1>Personal Details</h1>
            <label>Name</label>
            <h3>{personalInfo.name}</h3>
            <label>Password Pin</label>
            <h3>{personalInfo.pin}</h3>
            <label>Email</label>
            <h3>{personalInfo.email}</h3>
            <label>Programming Language</label>
            <h3>{personalInfo.language}</h3>

            <button id="personal" onClick={modalHandler}>
              Edit
            </button>
          </AccountCard>
        </div>

        <div className={styles.skills}>
          <AccountCard>
            <h1>Skills and Expereince</h1>
            <label>Frameworks</label>
            <h3>{checkFrameworksProvided()}</h3>
            <label>Education</label>
            <h3>{checkEducationProvided()}</h3>
            <label>Years Expereince</label>
            <h3>{checkExperienceProvided()}</h3>
            <label>Current Position</label>
            <h3>{checkCurrentRoleProvided()}</h3>
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
            <h3>{checkLinkedInProvided()}</h3>
            <label>Github</label>
            <h3>{checkGithubProvided()}</h3>
            <label>Portfolio Website</label>
            <h3>{checkWebsiteProvided()}</h3>
            <button id="contact" onClick={modalHandler}>
              Edit
            </button>
          </AccountCard>
        </div>

        <div className={styles.connect}>
          <AccountCard>
            <h1>Want to Connect</h1>
            <label>
              This will display to all users that you want to connect with
              others on Networks!
            </label>
          </AccountCard>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountInformation;
