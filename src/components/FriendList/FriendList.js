import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

function FriendList(props) {
  const { friends } = props;
  let stringRep = friends.map((friend, i) => (
    <FriendListItem 
    className="node"
    key={friend.id}
    user={friend}>

    </FriendListItem>
      
      
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
