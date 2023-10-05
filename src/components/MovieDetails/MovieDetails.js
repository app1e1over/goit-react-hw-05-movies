import React, { Suspense, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getById, getImage } from 'javascript/MovieFetcher';
import { NavLink } from 'react-router-dom';

import './style.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();

  if (movie === undefined) {
    getById(movieId).then(d => setMovie(d));
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="container">
        <img src={getImage(movie.poster_path, 400)} alt="poster" onError={(e)=>{let img=e.target; img.src="https://images.template.net/wp-content/uploads/2017/02/17221912/Printable-Blank-Movie-Poster.jpg"; }}></img>
        <div>
          {' '}
          <h1>
            {movie.title}({movie.release_date.split('-')[0]})
          </h1>
          <p>
            User score:{' '}
            <span className="score">
              {(movie.vote_average * 10).toFixed(2)}%
            </span>
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(g => g.name + ' ')}</p>
        </div>
      </div>

      <div className="links">
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
