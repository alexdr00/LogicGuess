import React, { Component } from 'react';
import NavbarItem from '../components/NavbarItem';

// import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    return (
      <nav className="navigation">
        <NavbarItem
          icon="home"
          cssModifier="home"
          itemName="Inicio"
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