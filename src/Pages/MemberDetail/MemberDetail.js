import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/login-context";

const MemberDetail = () => {
  const params = useParams();
  const ctx = useContext(AuthContext);

  const clickedUser = ctx.checkUser.find(
    (user) => user.id === params.memberId
  ).info;

  return (
    <Fragment>
      <h1>{clickedUser.name}</h1>
      <p>{params.memberId}</p>

      <h2>{clickedUser.email}</h2>
      <h3>{clickedUser.language}</h3>
    </Fragment>
  );
};

export default MemberDetail;
