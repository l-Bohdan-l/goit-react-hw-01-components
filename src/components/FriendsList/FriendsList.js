import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.scss';

export const FriendsList = ({ friends }) => {
  return (
    <section className={styles.friends}>
      <ul className={styles.friendsList}>
        {friends.map(friend => {
          const { isOnline, avatar, name, id } = friend;
          return (
            <li key={id} className={styles.item}>
              <span
                className={
                  isOnline === true ? styles.statusOnline : styles.statusOffline
                }
              ></span>
              <img
                className={styles.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={styles.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendsList.defaultProps = {
  title: 'Upload stats',
  label: 'no label',
  percentage: 'no percentage',
};

FriendsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
