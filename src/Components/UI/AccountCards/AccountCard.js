import styles from "./AccountCard.module.css";

const AccountCard = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default AccountCard;
