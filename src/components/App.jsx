import { Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const MoviesPage = lazy(()=>import('pages/MoviesPage'))
const HomePage = lazy(()=>import('pages/HomePage'))
const MovieDetailsPage = lazy(()=>import('pages/MovieDetailsPage'))
export const App = () => {
  return (
    <div>
      <Routes>        
        <Route path="/movies" element={<Suspense fallback={<Loader></Loader>}><MoviesPage /></Suspense>} />
        <Route path="/movies/:movieId/*" element={<Suspense fallback={<Loader></Loader>}><MovieDetailsPage /></Suspense>} />
        <Route path="/*" element={<Suspense fallback={<Loader></Loader>}><HomePage /></Suspense>} />
      </Routes>
    </div>
  );
};
