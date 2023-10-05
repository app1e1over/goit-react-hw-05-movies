import React, { useState, useEffect } from 'react';
import { getAdditional } from 'javascript/MovieFetcher';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const Actor = lazy(() => import('components/Actor/Actor'))
function Actors() {
  const [values, setValues] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getAdditional(movieId, 'cast').then(v => {
      setValues(
        v.cast.map(a => (
          <Actor
            key={a.id}
            name={a.name}
            profile_path={a.profile_path}
            character={a.character}
          ></Actor>
        ))
      );
    });
  }, [movieId]);
  
  return <div className='actors-container'>{values}</div>;
}

export default Actors;
