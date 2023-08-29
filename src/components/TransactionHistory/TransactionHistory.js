import React from 'react';
import PropTypes from 'prop-types';
import Transaction from 'components/Transaction/Transaction';

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

function TransactionHistory({ items }) {
  let fields = {};
  items.forEach(e => {
    for (let key in e) {
      if (fields[key] == undefined && key.toLowerCase() != 'id')
        fields[key] = '';
    }
  });
  const header = Object.keys(fields).map(k => {
    return <th key={k}>{k}</th>;
  });

  const body = items.map(i => {
    console.log(i);
    return (<Transaction key={i.id} trans={i}></Transaction>)});

  return (
    <table>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default TransactionHistory;
