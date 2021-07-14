import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from '../Pages/signIn';

const Routes=()=> {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
