import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Auth0Provider } from "client/src/Components/Auth0Provider.js";
import { SignInContext } from "client/src/Components/SignInContext.js";

ReactDOM.render(
  <Auth0Provider>
    <SignInContext>
      <App />
    </SignInContext>
  </Auth0Provider>,
  document.getElementById("root")
);
