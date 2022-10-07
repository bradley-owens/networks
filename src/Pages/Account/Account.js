import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.name
  );
  return (
    <Fragment>
      <div className={styles["account-container"]}>
        <h1>{`${userName}'s Account`}</h1>
        <p>
          Edit your profile to show more information about yourself to other
          members
        </p>
        <Link to="/edit-profile">
          <button>Edit Profile</button>
        </Link>
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
