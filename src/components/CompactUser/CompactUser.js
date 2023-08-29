import React from 'react';
import './style.css';
import PropTypes from 'prop-types'; 

function CompactUser(props) {
    const {user:{name, avatar, isOnline}}=props;
    const className = "wrap-compact-user "+(isOnline?"active":"inactive");
    return (<div className={className} >
       <div className='avatar'>
       <img alt='pfp' src={avatar} ></img>
       </div>
       <h2>
        {name}
       </h2>
    </div>)
}
CompactUser.propTypes={
    user:PropTypes.object
}
export default CompactUser;