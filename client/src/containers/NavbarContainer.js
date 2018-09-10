import React, { Component } from 'react';
import NavbarItem from '../components/layout/NavbarItem';

class Navbar extends Component {

  render() {
    return (
      <nav className="navigation">
        <NavbarItem
          icon="user"
          cssModifier="profile"
          itemName="Perfil"
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
      </nav>

    );
  }
}

export default Navbar;