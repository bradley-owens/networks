import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";
import displayImg from "../../Components/IMG/noProfile.png";
import { storage } from "../../Store/Firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  const [imageFile, setImageFile] = useState(null);

  const [url, setUrl] = useState(displayImg);

  const imageListRef = ref(storage, "images/users/");

  const onImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const submitImage = () => {
    if (imageFile === null) {
      return;
    }
    const imageRef = ref(storage, "images/users/" + userName);
    uploadBytes(imageRef, imageFile).then(() => {
      LoadImage();
      alert("Profile Picture Updated");
    });
  };

  function LoadImage() {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        if (item._location.path_ === "images/users/" + userName)
          getDownloadURL(item).then((url) => {
            setUrl(url);
          });
      });
    });
  }

  useEffect(() => {
    LoadImage();
  }, []);

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
          <img src={url} className={styles.picture} alt="preview" />

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
