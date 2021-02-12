import React from 'react';
import './ColorPiecer.css';

// Делаем стилизацию динамическую по приходу с якобы бекенда масива цветов

const ColorPiecer = ({ option }) => {
  return (
    <>
      <h2 className="color-piecer-title">{'ColorPiecer'}</h2>
      {option.map(({ color }) => (
        <span
          key={color}
          style={{ backgroundColor: color }}
          className="color-piecer-option"
        ></span>
      ))}
    </>
  );
};

export default ColorPiecer;
