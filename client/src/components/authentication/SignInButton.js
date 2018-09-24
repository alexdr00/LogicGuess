import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignInButton = () => {
  return (
    <a href="/auth/google" className="require-login__sign-in-button">
      <p>Inicia sesión o regístrate con Google</p>
      <FontAwesomeIcon
        className="require-login__google-icon"
        icon={['fab', 'google-plus']}
      />
    </a>
  );
};

export default SignInButton;