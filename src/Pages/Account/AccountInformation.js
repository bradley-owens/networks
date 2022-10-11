import { useSelector } from "react-redux";
import AccountCard from "../../Components/UI/AccountCards/AccountCard";
import styles from "./AccountInformation.module.css";

const AccountInformation = () => {
  const user = useSelector((state) => state.authentication.loggedInUser);

  return (
    <div className={styles["modal-container"]}>
      <div className={styles.personal}>
        <AccountCard>
          <h1>Personal Details</h1>
          <label>Name</label>
          <h3>{user.name}</h3>
          <label>Current Position</label>
          <h3>None</h3>
          <label>Email</label>
          <h3>{user.email}</h3>
          <label>Location</label>
          <h3>None</h3>
          {/* <button>Edit</button> */}
        </AccountCard>
      </div>

      <div className={styles.skills}>
        <AccountCard>
          <h1>Skills and Expereince</h1>
          <label>Programming Language</label>
          <h3>{user.language}</h3>
          <label>Frameworks</label>
          <h3>None</h3>
          <label>Years Expereince</label>
          <h3>None</h3>
          {/* <button>Edit</button> */}
        </AccountCard>
      </div>

      <div className={styles.contact}>
        <AccountCard>
          <h1>Contact Information</h1>
          <label>LinkedIN</label>
          <h3>None</h3>
          <label>Github</label>
          <h3>None</h3>
          <label>Portfolio Website</label>
          <h3>None</h3>
          {/* <button>Edit</button> */}
        </AccountCard>
      </div>

      <div className={styles.connect}>
        <AccountCard>
          <h1>Want to Connect</h1>
          <label>
            This will display to all users that you want to connect with others
            on Networks!
          </label>
        </AccountCard>
      </div>
    </div>
  );
};

export default AccountInformation;
