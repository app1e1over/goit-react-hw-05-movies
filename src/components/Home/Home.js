import React from 'react';
import { getPopular } from 'javascript/MovieFetcher';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Suspense } from 'react';


function Home(props) {
  const [popular, setPopular] = useState([]);
  if (popular.length === 0)
    getPopular().then(d =>
      setPopular(
        d.map(m => {
          console.log(m);
          return (
            <p key={m.id}>
              <NavLink to={`/movies/${m.id}`}>{m.original_title}</NavLink>
            </p>
          );
        })
      )
    );
  return (
    <div>
      <Header active={0}></Header>
      <Suspense fallback={'Loading...'}>{popular}</Suspense>
    </div>
  );
}

export default Home;
