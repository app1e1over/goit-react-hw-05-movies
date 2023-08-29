import React from 'react';
import PropTypes from 'prop-types';

Transaction.propTypes = {
  trans: PropTypes.object,
};

function Transaction({ trans }) {

  const vals = Object.values(trans).filter(v=>trans.id!==v).map(v => {
    return <td key={trans.id+v}>{v}</td>;
  });
  return <tr>{vals}</tr>;
}

export default Transaction;
