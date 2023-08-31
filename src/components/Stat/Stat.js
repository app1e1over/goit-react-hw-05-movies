import React from "react";
import "./style.css";
import PropTypes from 'prop-types'


function Stat(props){
    const {name, value} = props;
    return (
        <div className="stat">
            <p className="stat-name">{name}</p>
            <p className="stat-value">{value}</p>
        </div>);
}

Stat.prototypes={
    name: PropTypes.string,
    value: PropTypes.string
}
export default Stat;