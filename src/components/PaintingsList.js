import React from 'react';
import Painting from './Painting';
import propTypes from 'prop-types';

const PaintingsList = ({ item }) => {
  return (
    <ul>
      {item.map(painting => (
        <li key={painting.id}>
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
