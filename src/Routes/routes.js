import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "../Pages/signIn";
import PrivateRoute from "./privateRoutes";
import Home from "../Pages/home";
import Men from "../Pages/men";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/men" exact component={Men} />
      </Switch>
    </>
  );
};

export default Routes;
