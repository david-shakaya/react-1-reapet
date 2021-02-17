import React from 'react';
import styles from './Notification.module.css';
import propTypes from 'prop-types';

// Модульный подход в CSS. Его использовать всегда!
// Также можно использовать composes . В стилях к этотму компоненту есть пример
const Notification = ({ text, type = 'success' }) => (
  <div className={styles.Notification__container}>
    <p className={styles[type]}>{text}</p>
  </div>
);

Notification.defaultProps = {
  type: 'success',
};
Notification.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['success', 'error']),
};

export default Notification;
