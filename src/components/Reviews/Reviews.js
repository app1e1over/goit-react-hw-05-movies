import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { getAdditional } from 'javascript/MovieFetcher';
import { Suspense } from 'react';
import { lazy } from 'react';

const Review = lazy(() => import('components/Review/Review'))
function Reviews({movieId}) {
    const [values, setValues]=useState([]);
    const previousValues = useRef(null);

    if(previousValues.current===null){
        getAdditional(movieId, "reviews").then(v => {
            drawReviews(v.results);
        });
    }
 
    useEffect(() => {
        previousValues.current = values;
    }, [values]);


  function drawReviews(reviews) {
    setValues(reviews.map(a => <Review key={a.id} review={a}></Review>));
  }


  return <Suspense fallback={"Loading"}>{values.length>0 ? values : "no reviews were left"}</Suspense>;
}

export default Reviews;
