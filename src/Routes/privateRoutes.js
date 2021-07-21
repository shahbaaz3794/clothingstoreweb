import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  const isPending = useSelector((state) => state.user.isAuthenticating);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated === true) {
          return <Component {...props} />;
        } else if (isAuthenticated === false) {
          return <Redirect to="/" />;
        } else {
          return <Loading />;
        }
      }}
    />
  );
};
export default PrivateRoute;
