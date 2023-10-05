import React from 'react';
import { useState, useEffect } from 'react';
import { getAdditional } from 'javascript/MovieFetcher';

import { lazy } from 'react';
import { useParams } from 'react-router-dom';
const Review = lazy(() => import('components/Review/Review'));
function Reviews() {
  const [values, setValues] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getAdditional(movieId, 'reviews').then(v => {
      setValues(v.results.map(a => <Review key={a.id} review={a}></Review>));
    });
  }, [movieId]);

  return <ul>{values.length > 0 ? values : 'no reviews were left'}</ul>;
}

export default Reviews;
