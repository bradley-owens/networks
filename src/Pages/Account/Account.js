import { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";
import displayImg from "../../Components/IMG/noProfile.png";
import AuthContext from "../../Store/login-context";
import { editAccountActions } from "../../Store/editAccount-slice";
import { storage } from "../../Store/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );

  const ctx = useContext(AuthContext);

  const [imageFile, setImageFile] = useState(null);
  const [url, setUrl] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      const imageRef = ref(storage, "image");
      uploadBytes(imageRef, imageFile).then(() => {
        getDownloadURL(imageRef).then((url) => {
          setUrl(url);
        });
        // .catch((error) => alert(error.message));
        setImageFile(null);
      });
      // .catch((error) => alert(error.message));
      ctx.fetchData();
    }
  };

  console.log(url);

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
          <input type="file" onChange={onImageChange} className="filetype" />
        </div>
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
