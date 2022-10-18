import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Home/Header";
import TheNetwork from "../../Components/Home/TheNetwork";

const HomePage = () => {
  const user = useSelector((state) => state.authentication.loggedInUser);

  return (
    <Fragment>
      <Header />
      <TheNetwork />
    </Fragment>
  );
};

export default HomePage;
