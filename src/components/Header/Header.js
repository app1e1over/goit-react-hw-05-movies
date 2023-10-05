import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import "./style.css"



class Header extends Component {
  render() {
    return (
      <nav className='header-nav'>
        <NavLink to="/" className={"link"}>
          Home
        </NavLink>
        <NavLink to="/movies" className={"link"}>Movies</NavLink>
      </nav>
    );
  }
}

Header.propTypes = {};

export default Header;
