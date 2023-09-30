import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import "./style.css"



class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" className={(this.props.active===0?"active":"inactive") + " link"}>
          Home
        </NavLink>
        <NavLink to="/movies" className={(this.props.active===1?"active":"inactive")+ " link"}>Movies</NavLink>
      </nav>
    );
  }
}

Header.propTypes = {};

export default Header;
