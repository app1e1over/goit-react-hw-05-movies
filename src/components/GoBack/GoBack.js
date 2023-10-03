import React from 'react';
import { NavLink, redirect } from 'react-router-dom';

function GoBack() {
  let link = sessionStorage.getItem('link')
  link=link.substring(link.indexOf('/', 2), link.length);
  return (
    <div>
      <NavLink to={link}>
        <button>Go back</button>
      </NavLink>
    </div>
  );
}

export default GoBack;
