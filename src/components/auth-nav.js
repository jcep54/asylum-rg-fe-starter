import React from 'react';
import AuthenticationButton from './authentication-button';
import ProfileButton from './profileButton';

const AuthNav = () => {
  return (
    <div className="navbar-nav ml-auto">
      <AuthenticationButton />
      <ProfileButton />
    </div>
  );
};

export default AuthNav;
