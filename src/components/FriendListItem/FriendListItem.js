import React from 'react';
import './style.css';
import PropTypes from 'prop-types'; 

function FriendListItem(props) {
    const {user:{name, avatar, isOnline}}=props;
    const className = "wrap-compact-user "+(isOnline?"active":"inactive");
    return (<div className={className} >
       <div className='avatar'>
       <img alt={`${name}'s pfp`} src={avatar} ></img>
       </div>
       <h2>
        {name}
       </h2>
    </div>)
}
FriendListItem.propTypes={
    user:PropTypes.object
}
export default FriendListItem;