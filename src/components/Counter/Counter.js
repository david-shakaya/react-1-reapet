import React from 'react';
import style from './Counter.module.css';

// ДЛЯ того что бы динамически менять дом узлы нужно работать через классы!
// Имеет необходимый метод рендер, для рендера разметки
class Counter extends React.Component {
  // Сюда можно записывать зачения которые будем показывать и изменяь в дом
  state = {
    valueCounter: 0,
  };

  //Таким образом меням содержимое state. И все это отображается в дом
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        valueCounter: prevState.valueCounter + 1,
      };
    });
  };

  handleDecrement = () => {
    //Если нам нужно просто перезаписать значение используем обьект
    // this.setState({ valueCounter: 0 });

    //Если нам нужно перезаписать значение основываясь на пред результате используем функц
    this.setState(prevState => {
      return {
        valueCounter: prevState.valueCounter - 1,
      };
    });
  };

  // таким образом можно визвать функцию при клике
  // onHadleIncrement = e => {
  //   console.log(this);
  // };

  render() {
    return (
      <div className={style.Counter__wrapper}>
        <span className={style.Span}> {this.state.valueCounter} </span>
        <div className={style.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
