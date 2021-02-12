import React from 'react';
import propTypes from 'prop-types';
import './Painting.css'

const Painting = props => {
  return (
    <>
      <img src={props.url} alt={props.title} width="300px" />
      <p>{props.title}</p>
      <p>
        Автор: <a href={props.authorURL}> {props.tag}</a>
      </p>

      <p className="Painting-list-item-price">Цена: {props.price} грн.</p>
      <p>
        Доступность {props.quantity > 10 ? 'Есть в наличии' : 'Заканчивается'}
      </p>
      <button>Добавить в корзину</button>
    </>
  );
};

// Дефолтное значение если картинка не найдена
Painting.defaultProps = {
  url:
    'https://cdn.pixabay.com/photo/2020/08/17/17/43/page-not-found-5496035_960_720.png',
};

// Описываем propTypes Для отлова ошибок если типы число строка и так далее перепутали
Painting.propTypes = {
  url: propTypes.string,
  title: propTypes.string.isRequired,
  authorURL: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};

export default Painting;
