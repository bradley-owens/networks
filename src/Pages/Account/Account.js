import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";
import displayImg from "../../Components/IMG/noProfile.png";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  const [image, setImage] = useState(displayImg);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
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
          <img src={image} className={styles.picture} alt="preview image" />
          {/* <h2>Change your profile picture</h2> */}
          <input type="file" onChange={onImageChange} className="filetype" />
        </div>
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
