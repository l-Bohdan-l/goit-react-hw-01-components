import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.scss';

export const Transactions = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.defaultProps = {
  name: 'Friend name',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
};

Transactions.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
