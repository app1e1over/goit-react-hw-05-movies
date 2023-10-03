import Loader from 'components/Loader/Loader';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

function MoviesList(props) {
  sessionStorage.setItem("link", window.location.pathname);
  const {movies}=props;
  if(movies===undefined){
    return <Loader></Loader>
  }
  let res = movies.map(m => {
    return (
      <li key={m.id}>
        <NavLink to={`/movies/${m.id}`}>{m.original_title}</NavLink>
      </li>
    );
  });
  return <ul className='film'>{res}</ul>;
}

export default MoviesList;
