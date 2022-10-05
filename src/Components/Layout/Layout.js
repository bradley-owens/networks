import { Fragment } from "react";
import Navigation from "../UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
