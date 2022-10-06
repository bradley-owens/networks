import { Fragment } from "react";
import Navigation from "../UI/Navigation/Navigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <div className={styles.page}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
