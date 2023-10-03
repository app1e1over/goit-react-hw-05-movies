import React, { useState, useRef, useEffect } from 'react';
import { getAdditional } from 'javascript/MovieFetcher';
import { lazy } from 'react';

const Actor = lazy(() => import('components/Actor/Actor'))
function Actors({ movieId }) {
  const [values, setValues] = useState([]);
  const previousValues = useRef(null);

  if (previousValues.current===null) {
    getAdditional(movieId, 'cast').then(v => {
      drawActors(v.cast);
    });
  }

  useEffect(() => {
    previousValues.current = values;
  }, [values]);
  function drawActors(actors) {
    console.log(actors);
    setValues(
      actors.map(a => (
        <Actor
          key={a.id}
          name={a.name}
          profile_path={a.profile_path}
          character={a.character}
        ></Actor>
      ))
    );
  }

  useEffect(() => {
    previousValues.current = values;
  }, [values]);
  
  return <div className='actors-container'>{values}</div>;
}

export default Actors;
