import React, { useState } from 'react';
import Header from 'components/Header/Header';
import { Routes, useParams, Route } from 'react-router-dom';
import { getById, getImage } from 'javascript/MovieFetcher';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import './style.css'
import { lazy } from 'react';

const Actors = lazy(() => import('components/Actors/Actors'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();

  if (movie === undefined) {
    getById(movieId).then(d => setMovie(d));
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className='container'>
        <img src={getImage(movie.poster_path, 400)} alt="poster"></img>
        <div>
          {' '}
          <h1>
            {movie.title}({movie.release_date.split('-')[0]})
          </h1>
          <p>User score: <span className='score'>{(movie.vote_average * 10).toFixed(2)}%</span></p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(g => g.name + ' ')}</p>
        </div>
      </div>

      <div className='links'>
        <NavLink
          style={{ marginRight: 10 }}
          to={'/movies/' + movieId + '/cast'}
          end
        >
          Cast
        </NavLink>

        <NavLink to={'/movies/' + movieId + '/reviews'} end>
          Reviews
        </NavLink>
      </div>
      <Routes>
        <Route
          path="/reviews"
          element={<Suspense fallback={"Loading..."}><Reviews movieId={movieId}></Reviews></Suspense>}
        ></Route>
        <Route
          path="/cast"
          element={<Suspense fallback={"Loading..."}><Actors movieId={movieId}></Actors></Suspense>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MovieDetails;
