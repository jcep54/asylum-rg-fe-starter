import React from 'react';

import LoginButton from './loginButton';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? <LoginButton /> : <LogoutButton />;
};

export default AuthenticationButton;
