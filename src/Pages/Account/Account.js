import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";
import displayImg from "../../Components/IMG/noProfile.png";
import AuthContext from "../../Store/login-context";
import { editAccountActions } from "../../Store/editAccount-slice";
import { storage } from "../../Store/Firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  const ctx = useContext(AuthContext);

  const [imageFile, setImageFile] = useState(null);
  const [url, setUrl] = useState(null);
  const imageListRef = ref(storage, "images/users/");
  const onImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const submitImage = () => {
    if (imageFile === null) return;
    const imageRef = ref(storage, "images/users/" + userName);
    uploadBytes(imageRef, imageFile).then(() => {
      alert("Profile Picture Updated");
    });
  };

  // useEffect(() => {
  listAll(imageListRef).then((res) => {
    res.items.forEach((item) => {
      if (item._location.path_ === "images/users/" + userName)
        getDownloadURL(item).then((url) => {
          setUrl(url);
        });
    });
  });
  // }, [url]);

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
          <img src={url} className={styles.picture} alt="preview image" />
          <div>
            <input type="file" onChange={onImageChange} className="filetype" />
            <button onClick={submitImage}>Submit</button>
          </div>
        </div>
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
