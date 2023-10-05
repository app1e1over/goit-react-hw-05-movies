import React, { useEffect } from 'react';
import { getPopular } from 'javascript/MovieFetcher';
import { useState } from 'react';
import { lazy } from 'react';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
function Home() {
  const [popular, setPopular] = useState();
  useEffect(()=>{
    getPopular().then(setPopular);
  }, [])
  return (
    <div>
     <MoviesList movies = {popular}/>
    </div>
  );
}

export default Home;
