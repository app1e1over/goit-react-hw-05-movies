import React from 'react';
import "./style.css"
import { findByQuery } from 'javascript/MovieFetcher';
import { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';


function Movies(props) {
    const [result, setResults]=useState([]);
    function search(e){
        e.preventDefault();
        let val = e.target[0].value;
        e.target[1].disabled = true;
        if(val.trim()==="")
            return;
        findByQuery(val).then(setResults)
    }

  return (
    <div>
      <div className='search-container'>
      <form className="search-local" onSubmit={search}>


        <input type="text" placeholder="Write your querry" />
        <button type='submit'>
          find
        </button>
      </form>
      </div>
      
      <MoviesList movies={result}></MoviesList>
    </div>
  );
}

export default Movies;
