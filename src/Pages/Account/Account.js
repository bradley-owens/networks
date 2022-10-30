import { Fragment, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";
import displayImg from "../../Components/IMG/noProfile.png";
import AuthContext from "../../Store/login-context";
import { editAccountActions } from "../../Store/editAccount-slice";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();
  const imageSrc = useSelector((state) => state.edit.user.image.src);
  console.log(imageSrc);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      dispatch(
        editAccountActions.editProfileImage(
          URL.createObjectURL(event.target.files[0])
        )
      );
      ctx.fetchData();
    }
  };
  return (
    <Fragment>
      <div className={styles["account-container"]}>
        <div className={styles.flex}>
          <h1>{`${userName}'s Account`}</h1>
          <p>
            Edit your profile to show more information about yourself to other
            members
          </p>
        </div>
        <Connections />
        <div className={styles["choose-img"]}>
          <img src={imageSrc} className={styles.picture} alt="preview image" />
          <input type="file" onChange={onImageChange} className="filetype" />
        </div>
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
