import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import CompactUser from 'components/CompactUser/CompactUser';

function FriendList(props) {
  const { friends } = props;
  let stringRep = friends.map((friend, i) => (
    <CompactUser 
    className="node"
    key={friend.id}
    user={friend}>

    </CompactUser>
      
      
  ));

  return (
    <div className="friend-list">
        {stringRep}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;
