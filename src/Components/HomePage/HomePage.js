import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import AuthContext from "../../Store/login-context";
import Layout from "../Layout/Layout";
import Header from "./Header";
import TheNetwork from "./TheNetwork";

const HomePage = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      <TheNetwork />
    </Fragment>
  );
};

export default HomePage;
