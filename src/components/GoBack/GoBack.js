import React from 'react';
import { NavLink } from 'react-router-dom';

function GoBack() {
  let link = sessionStorage.getItem('link')
  link="/"+link.replace("goit-react-hw-05-movies", "").replaceAll("/", "");

  return (
    <div>
      <NavLink to={link}>
        <button>Go back</button>
      </NavLink>
    </div>
  );
}

export default GoBack;
