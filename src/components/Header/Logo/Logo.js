import React from 'react';
import propTypes from 'prop-types';
import styles from './Logo.module.css';

const Logo = ({ text }) => <p className={styles.Logo}>{text}</p>;

Logo.propTypes = {
  text: propTypes.string.isRequired,
};
export default Logo;
