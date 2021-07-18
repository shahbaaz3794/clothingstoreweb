import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuthenticated = false;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthenticated = true;
      } else {
        isAuthenticated = true;
      }
    });
  }, []);

  const isPending = useSelector((state) => state.user.isAuthenticating);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPending) {
          return <Loading />;
        } else if (!isAuthenticated) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
export default PrivateRoute;
