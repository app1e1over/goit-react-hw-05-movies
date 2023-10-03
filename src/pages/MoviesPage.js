import Header from 'components/Header/Header';
import Movies from 'components/Movies/Movies';
import React from 'react';

function MoviesPage(props) {
    return (
        <div>
            <Header active={1}></Header>
            <Movies></Movies>
        </div>
    );
}

export default MoviesPage;