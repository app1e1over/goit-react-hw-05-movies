import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MovieDetails from "./MovieDetails/MovieDetails";
import Movies from "./Movies/Movies";


export const App = () => {
  return (
    <div>
    1
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route path="/goit-react-hw-05-movies/movies/:movieId/*" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<MovieDetails  additional={"cast"}/>} />
        <Route path="/movies/:movieId/reviews" element={<MovieDetails additional={"reviews"}/>} /> */}
      </Routes>
    </div>
  );
};
