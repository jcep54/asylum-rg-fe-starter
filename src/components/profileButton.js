import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const ProfileButton = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Link to="/profile" style={{ color: '#E2F0F7' }}>
        Profile
      </Link>
    );
  }
  return <></>;
};

export default ProfileButton;
