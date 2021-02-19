import React from 'react';
import style from './Counter.module.css';

// ДЛЯ того что бы динамически менять дом узлы нужно работать через классы!
// Имеет необходимый метод рендер, для рендера разметки
class Counter extends React.Component {
  render() {
    return (
      <div className={style.Counter__wrapper}>
        <span className={style.Span}> 0 </span>
        <div className={style.Counter__controls}>
          <button type="button">Увеличить на 1</button>
          <button type="button">Уменьшить на 1</button>
        </div>
      </div>
    );
  }
}
export default Counter;
