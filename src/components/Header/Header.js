import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"



class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/goit-react-hw-05-movies/" className={(this.props.active===0?"active":"inactive") + " link"}>
          Home
        </NavLink>
        <NavLink to="/goit-react-hw-05-movies/movies" className={(this.props.active===1?"active":"inactive")+ " link"}>Movies</NavLink>
      </nav>
    );
  }
}

Header.propTypes = {};

export default Header;
