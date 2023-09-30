import React from 'react';
import Header from 'components/Header/Header';
import "./style.css"
import { findByQuery } from 'javascript/MovieFetcher';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Movies(props) {
    const [result, setResults]=useState([]);
    function search(e){
        e.preventDefault();
        let val = e.target[0].value;
        e.target[1].disabled = true;
        if(val.trim()==="")
            return;
        findByQuery(val).then(d=>setResults(d.map(m=>{console.log(m);return (<p key={m.id}><NavLink  to={`/movies/${m.id}`}>{m.original_title}</NavLink></p>)})))
    }

  return (
    <div>
      <Header active={1}></Header>
      <div className='search-container'>
      <form className="search-local" onSubmit={search}>


        <input type="text" placeholder="Write your querry" />
        <button type='submit'>
          <a href="#">Find</a>
        </button>
      </form>
      </div>
      
      {result}
    </div>
  );
}

export default Movies;
