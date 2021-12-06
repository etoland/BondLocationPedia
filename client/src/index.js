import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import AuthOProviderWithHistory from "./auth0-provider-with-history";

ReactDOM.render(
  <React.StrictMode>
    <AuthOProviderWithHistory>
      <App />
    </AuthOProviderWithHistory>
  </React.StrictMode>,
  document.getElementById("root")
);
