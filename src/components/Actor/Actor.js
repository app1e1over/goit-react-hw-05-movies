import { getImage } from 'javascript/MovieFetcher';
import React from 'react';

function Actor({name, character, profile_path}) {
    
    return (
        <li>
            <img src={getImage(profile_path, 200)}></img>
            <h3>{name}</h3>
            <p>Character: {character}</p>
        </li>
    );
}

export default Actor;