import React from "react";
import Stat from "components/Stat/Stat";
import "./style.css";
import PropTypes from 'prop-types'

function Stats(props){
    const {obj } = props;
    let stringRep=Object.entries(obj).map((stat, i)=>(<Stat key={Date.now()+i} name={stat[0]} value={stat[1]}></Stat>));

    return (        
        <div className="stats">
          {stringRep}
        </div>
        );
}

Stats.propTypes = {
    obj: PropTypes.object
  }
export default Stats;