import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import MovieDetails from "./MovieDetails/MovieDetails";
import Movies from "./Movies/Movies";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<MovieDetails  additional={"cast"}/>} />
        <Route path="/movies/:movieId/reviews" element={<MovieDetails additional={"reviews"}/>} /> */}
      </Routes>
    </div>
  );
};
