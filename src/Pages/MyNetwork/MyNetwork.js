import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import MemberCard from "../../Components/UI/MemberCard/MemberCard";
import AuthContext from "../../Store/login-context";

const MyNetwork = () => {
  const ctx = useContext(AuthContext);

  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const userInfo = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  });

  const userConnections = ctx.checkUser.find((user) => {
    return user.id.id === loggedInUser.id.id;
  }).connections;

  return (
    <Fragment>
      {userConnections === undefined && <h1>You have no connections!</h1>}
      {userConnections && (
        <div>
          <h1>Your Connections</h1>
          {Object.entries(userConnections.following).map((connection) => {
            return (
              <Fragment>
                <MemberCard
                  key={Math.random()}
                  id={userInfo.id.id}
                  name={connection[1].name}
                  email={connection[1].email}
                  language={userInfo.info.language}
                />
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default MyNetwork;
