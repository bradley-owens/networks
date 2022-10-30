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
        <div>
          <h1>{`${userName}'s Account`}</h1>
          <p>
            Edit your profile to show more information about yourself to other
            members
          </p>
          <div>
            <h3>Change your profile picture</h3>
            <input type="file" onChange={onImageChange} className="filetype" />
            <img src={image} className={styles.picture} alt="preview image" />
          </div>
        </div>
        <Connections />
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
