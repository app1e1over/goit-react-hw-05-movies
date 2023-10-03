import React from 'react';
import { getPopular } from 'javascript/MovieFetcher';
import { useState } from 'react';
import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { lazy } from 'react';
import Loader from 'components/Loader/Loader'

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
function Home(props) {
  const [popular, setPopular] = useState();
  if (popular===undefined) getPopular().then(setPopular);
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}><MoviesList movies = {popular}></MoviesList></Suspense>
    </div>
  );
}

export default Home;
