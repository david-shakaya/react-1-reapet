import React from 'react';
import propTypes from 'prop-types';
import style from './Header.module.css';
import Logo from './Logo/Logo';

const Header = ({ children }) => (
  <div className={style.Header}>{<Logo text={'Логотип'} />}</div>
);

Header.propTypes = {
  children: propTypes.node,
};

export default Header;
