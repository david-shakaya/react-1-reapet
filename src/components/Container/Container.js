import React from 'react';
import propTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

Container.propTypes = {
  children: propTypes.node,
};

export default Container;
