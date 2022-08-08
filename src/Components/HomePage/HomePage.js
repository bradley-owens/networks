import React, { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <h1>Signed in</h1>
      <button onClick={props.onLogOut}>Sign out</button>
    </Fragment>
  );
};

export default HomePage;
