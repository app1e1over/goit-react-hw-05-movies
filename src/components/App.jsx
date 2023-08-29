import Profile from './Profile/Profile';
import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  const [task, setTask] = useState(0);

  const avatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RaDHshWwSJpShiCvrf7-lEzf0UMlu-hu8uuZu3TF&s';

  switch (task) {
    case 0:
      return (
        <>
          <Profile
            avatar={avatar}
            username="OlegTheBest"
            tag="olg123"
            location="Uzhhorod, Ukraine"
            stats={{ Followers: 29, Views: 3023, Likes: 492 }}
          ></Profile>
          <button onClick={() => setTask(1)}>Next</button>
          <button onClick={() => setTask(3)}>Last</button>
        </>
      );
    case 1:
      return (
        <>
          <Statistics
            title="upload stats"
            stats={{ docx: 32, pdf: 4, mp3: 17, psd: 47 }}
            padStatTitleStart="."
            padStatValueEnd="%"
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
