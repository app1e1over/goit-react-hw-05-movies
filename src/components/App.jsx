import Profile from './Profile/Profile';
import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import user from '../data/user.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import data from "../data/data.json";

export const App = () => {
  const [task, setTask] = useState(0);
  switch (task) {
    case 0:
      return (
        <>
          <Profile
          user={user}
        
          ></Profile>
          <button onClick={() => setTask(3)}>Last</button>

          <button onClick={() => setTask(1)}>Next</button>
        </>
      );
    case 1:
      return (
        <>
          <Statistics
            data = {data}
          ></Statistics>
          <button onClick={() => setTask(0)}>Prev</button>
          <button onClick={() => setTask(2)}>Next</button>
        </>
      );
    case 2:
      return (
        <>
          <FriendList friends={friends}></FriendList>
          <button onClick={() => setTask(1)}>Prev</button>
          <button onClick={() => setTask(3)}>Next</button>
        </>
      );
    default:
      return (
        <>
          <TransactionHistory items={transactions}></TransactionHistory>
          <button onClick={() => setTask(2)}>Prev</button>
          <button onClick={() => setTask(0)}>first</button>
        </>
      );
  }
};
