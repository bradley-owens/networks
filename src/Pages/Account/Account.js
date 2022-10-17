import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Connections from "../../Components/Account/Connections";
import styles from "./Account.module.css";
import AccountInformation from "./AccountInformation";

const Account = () => {
  const userName = useSelector(
    (state) => state.authentication.loggedInUser.info.name
  );
  return (
    <Fragment>
      <div className={styles["account-container"]}>
        <div>
          <h1>{`${userName}'s Account`}</h1>
          <p>
            Edit your profile to show more information about yourself to other
            members
          </p>
        </div>
        <Connections />
      </div>

      <AccountInformation />
    </Fragment>
  );
};

export default Account;
