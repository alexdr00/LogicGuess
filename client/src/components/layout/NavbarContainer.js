import React, { Component } from 'react';
import NavbarItem from './NavbarItem';
import LogoutButton from '../authentication/LogoutButton';

class Navbar extends Component {
  renderLogout(user) {
    if (user) {
      return (
        <LogoutButton />
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

        {this.renderLogout(this.props.isUserLoggedIn)}

      </nav>

    );
  }
}

export default Navbar;