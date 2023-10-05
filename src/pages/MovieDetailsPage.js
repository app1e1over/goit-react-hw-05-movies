import React from 'react';
import Header from 'components/Header/Header';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import GoBack from 'components/GoBack/GoBack';

function MovieDetailsPage(props) {
    return (
        <div>
            <GoBack></GoBack>
            <MovieDetails></MovieDetails>
        </div>
    );
}

export default MovieDetailsPage;