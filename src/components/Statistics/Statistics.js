import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function genHex() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function Statistics({data, title}) {
  console.log(data);
  let stringRep = data.map(el =>( 
    <div className="node" key={el.id} style={{backgroundColor: genHex()}}>
      <h2>{el.label}</h2>
      <p>{el.percentage+"%"}</p>
    </div>)
  );

  return (
    <div className="statistics">
      {title && <h2>{title}</h2>}
      <div>{stringRep}</div>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
export default Statistics;
