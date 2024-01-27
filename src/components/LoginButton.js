import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link
      to="/"
      style={{ color: '#E2F0F7' }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Link>
  );
};

export default LoginButton;
