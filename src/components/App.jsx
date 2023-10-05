import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Container from './Container/Container';

// import MoviesPage from 'pages/MoviesPage';
// import HomePage from 'pages/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import Reviews from 'components/Reviews/Reviews';
// import Actors from 'components/Actors/Actors';

const MoviesPage = lazy(() => import('pages/MoviesPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Actors = lazy(() => import('components/Actors/Actors'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Actors />} />
        </Route>
        <Route path='*' element={HomePage}></Route>
      </Route>
    </Routes>
  );
};

export const App = () => {
  const routeElement = AppRoutes();

  return (
    <div>
        {routeElement}
    </div>
  );
};