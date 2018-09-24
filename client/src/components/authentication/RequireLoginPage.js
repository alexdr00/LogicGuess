import React from 'react';
import SignInButton from './SignInButton';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RequireLoginPage = () => {
  return (
    <div className="require-login">
      <section className="require-login__section require-login__section--welcome">
        <p>¡Bienvenido a Logical  Guess!</p>
      </section>

      <section className="require-login__section require-login__section--should-login">
        <p>Para ver tus puntajes y los de otras personas debes inicar sesión</p>
      </section>

      <section className="require-login__section require-login__section--should-login-2">
        <p>También debes inicar sesión para guardar tu puntaje</p>
      </section>

      <section className="require-login__section require-login__section--login">
        <SignInButton />
      </section>
    </div>
  );
};

export default RequireLoginPage;