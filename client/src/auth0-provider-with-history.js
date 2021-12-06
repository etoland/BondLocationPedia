import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory } from "react-dom";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTHO_DOMAIN;
  const clientId = process.env.REACT_APP_AUTHO_CLIENT_ID;

  const onRedirectCallBack = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallBack={onRedirectCallBack}
    ></Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
