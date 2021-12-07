import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  SignInContext,
  SignInContextProvider,
} from "./Components/SignInContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={"dev-my-xwmn3.us.auth0.com"}
    clientId={"FW1wnegWP17DRrX1FFW6yGQujpCgHZ1H"}
    redirectUri={window.location.origin}
    // onRedirectCallBack={onRedirectCallBack}
  >
    <SignInContextProvider>
      <App />
    </SignInContextProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
