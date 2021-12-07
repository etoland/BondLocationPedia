import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import SignInPage from "./SignInPage";
import Home from "./Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-in-page">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
