import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavbarItem extends Component {
  render() {
    return (
      // Nav Item
      <NavLink
        exact
        to={this.props.route}
        activeClassName={`navigation__icon--${this.props.cssModifier}--active`}
        className={`navigation__item navigation__item--${this.props.cssModifier}`}
      >
        {/* Icon */}
        <FontAwesomeIcon
          className={`navigation__icon navigation__icon--${this.props.cssModifier}`}
          icon={['fas', this.props.icon]}
        />

        {/* Tag */}
        <div className={`navigation__tag navigation__tag--${this.props.cssModifier}`}>      {this.props.itemName}
        </div>
      </NavLink>
    );
  }
}

export default NavbarItem;