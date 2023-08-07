import React from 'react';
import Stat from 'components/Stat/Stat';
import './style.css';
import PropTypes from 'prop-types';

function genHex() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function Statistics(props) {
  const {
    title,
    stats,
    padStatTitleStart = '',
    padStatTitleEnd = '',
    padStatValueStart = '',
    padStatValueEnd = '',
  } = props;
  let stringRep = Object.entries(stats).map((stat, i) => (
    <div className="node" key={Date.now() + i} style={{backgroundColor: genHex()}}>
      <h2>{padStatTitleStart + stat[0] + padStatTitleEnd}</h2>
      <p>{padStatValueStart + stat[1] + padStatValueEnd}</p>
    </div>
  ));

  return (
    <div className="statistics">
      <h1>{title.toUpperCase()}</h1>
      <div>{stringRep}</div>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
  padStatValueStart: PropTypes.string,
  padStatValueEnd: PropTypes.string,
  padStatTitleStart: PropTypes.string,
  padStatTitleEnd: PropTypes.string,
};
export default Statistics;
