import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;
  console.log(redirUri, domain, clientId);
  const history = useHistory();

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`http://localhost:3000`}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;
