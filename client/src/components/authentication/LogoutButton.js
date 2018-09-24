import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogoutButton = () => {
  return (
    <a
      href="/api/logout"
      className={`navigation__item navigation__item--logout`}
    >

      <FontAwesomeIcon
        className={`navigation__icon navigation__icon--logout`}
        icon={['fas', 'sign-out-alt']} />

      <div className={`navigation__tag navigation__tag--logout`}>
        Cerrar Sesión
      </div>
    </a>
  );
};

export default LogoutButton;