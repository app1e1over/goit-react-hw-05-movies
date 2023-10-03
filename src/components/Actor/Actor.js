import { getImage } from 'javascript/MovieFetcher';
import React from 'react';
import Riddler from './Riddler.png'
import './style.css'

function Actor({ name, character, profile_path }) {
  const fix = e => {
    var image = e.target;
    image.src = Riddler;
  };

  return (
    <li className='actor-container'>
      <img src={getImage(profile_path, 200)} alt={name} onError={fix} className='actor-image'></img>
      <h3 className='actor-name'>{name}</h3>
      <p className='actor-character'>Character: {character}</p>
    </li>
  );
}

export default Actor;
