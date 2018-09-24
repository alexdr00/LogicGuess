import React from 'react';
import SignInButton from './SignInButton';

const RequireLoginPage = () => {
  return (
    <div className="require-login">
      <div className="require-login__welcome">
        <h3>¡Bienvenido a Logical Guess!</h3>
      </div>
      <SignInButton />
    </div>
  );
};

export default RequireLoginPage;