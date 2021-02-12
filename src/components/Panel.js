import React from 'react';
import propTypes from 'prop-types';

const Panel = ({ title, children }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

// ДЛя детей используем тип NODE необязательный
Panel.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Panel;
