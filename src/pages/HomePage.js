import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import React from 'react';

function HomePage(props) {
    return (
        <div>
            <Header active={0}></Header>
            <Home></Home>
        </div>
    );
}

export default HomePage;