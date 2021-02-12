import React from 'react';
import Painting from '../Painting/Painting';
import propTypes from 'prop-types';
import './PaintingList.css';

// ПРимер инлайн стилей

const ulStyle = {
  //CТИЛИ В ПЕРЕМЕННОй
  marginRight: '5px',
  border: '1px black solid',
};

const PaintingsList = ({ item }) => {
  return (
    <ul
      style={{
        //CТИЛИ В САМОМ ТЕГЕ
        display: 'flex',
        justifyContent: 'center',
        ...ulStyle,
      }}
    >
      {item.map(painting => (
        <li className="Painting-list-item" key={painting.id}>
          <Painting
            url={painting.url}
            title={painting.title}
            price={painting.price}
            tag={painting.author.tag}
            authorURL={painting.author.url}
            author={painting.author.tag}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

// Проа тайп для айдишнкика типа проверка на тип. Что бы обязательно был строкой. Другие методы типа масив

PaintingsList.propTypes = {
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};

export default PaintingsList;
