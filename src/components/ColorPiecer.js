import React from 'react';

// Делаем стилизацию динамическую по приходу с якобы бекенда масива цветов

const styleColorPiecer = {
  width: '20px',
  height: '20px',
};

const ColorPiecer = ({ option }) => {
  return (
    <>
      {option.map(({ color }) => (
        <span
          key={color}
          style={{ backgroundColor: color, ...styleColorPiecer }}
        >
          {'fdfggd'}
        </span>
      ))}
    </>
  );
};

export default ColorPiecer;
