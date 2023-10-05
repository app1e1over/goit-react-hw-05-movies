import React, { useEffect } from 'react';
import "./style.css"
import { findByQuery } from 'javascript/MovieFetcher';
import { useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';


function Movies() {
    const [result, setResults]=useState([]);
    const [query, setQuery]=useSearchParams();
    

    useEffect(()=>{
      if(query.size===0)
          return;
      let queryText = query.get("query");
      findByQuery(queryText).then(setResults);
    }, [query])

  return (
    <div>
      <div className='search-container'>
      <form className="search-local" onSubmit={(e)=>{e.preventDefault(); setQuery("query="+e.target[0].value)}}>


        <input type="text" name='query' placeholder="Write your querry" defaultValue={query.get("query")}/>
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
