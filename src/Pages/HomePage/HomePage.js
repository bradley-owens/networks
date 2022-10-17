import React, { Fragment, useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../Components/Home/Header";
import TheNetwork from "../../Components/Home/TheNetwork";
import AuthContext from "../../Store/login-context";
import MemberDetail from "../MemberDetail/MemberDetail";

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
