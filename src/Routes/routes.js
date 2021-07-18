import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../Pages/signIn";
import PrivateRoute from "./privateRoutes";
import Home from "../Pages/home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <PrivateRoute path="/home" exact component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
