import FollowingAmount from "./FollowingAmount";
import styles from "./Connections.module.css";

const Connections = () => {
  return (
    <div className={styles["followers-container"]}>
      <div className={styles.numbers}>
        <label>Followers</label>
        <h2>0</h2>
      </div>

      <div className={styles["followers-container"]}>
        <div className={styles.numbers}>
          <label>Following</label>
          <h2>{FollowingAmount()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Connections;
