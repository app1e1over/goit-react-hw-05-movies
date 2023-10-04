import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { getAdditional } from 'javascript/MovieFetcher';

import { lazy } from 'react';
import { useParams } from 'react-router-dom';
const Review = lazy(() => import('components/Review/Review'))
function Reviews() {
    const [values, setValues]=useState([]);
    const { movieId } = useParams();
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


  return <ul>{values.length>0 ? values : "no reviews were left"}</ul>;
}

export default Reviews;
