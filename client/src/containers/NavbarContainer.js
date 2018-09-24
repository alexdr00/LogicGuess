import React, { Component } from 'react';
import NavbarItem from '../components/layout/NavbarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderLogout(user) {
    if (user) {
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
    }
  }

  render() {
    return (
      <nav className="navigation">
        <NavbarItem
          icon="trophy"
          cssModifier="leaderboard"
          itemName="Clasificación"
          route="/" />

        <NavbarItem
          icon="book"
          cssModifier="manual"
          itemName="Instrucciones"
          route="/manual" />

        <NavbarItem
          icon="dice"
          cssModifier="play"
          itemName="Jugar"
          route="/game" />

        {this.renderLogout(this.props.auth)}

      </nav>

    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);