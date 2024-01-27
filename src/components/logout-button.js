import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link
      to="/"
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{ paddingRight: '75px', color: '#E2F0F7' }}
    >
      Log Out
    </Link>
  );
};

export default LogoutButton;
