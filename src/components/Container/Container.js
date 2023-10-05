import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

function Container(props) {
    return (
        <div>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    );
}

export default Container;