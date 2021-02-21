import React from 'react';
import style from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    isVisibleDropdown: false,
  };

  showDropdown = () => {
    this.setState({ isVisibleDropdown: true });
  };

  hideDropdown = () => {
    this.setState({ isVisibleDropdown: false });
  };

  render() {
    return (
      <div className={style.Dropdown__wrapper}>
        <div>
          <button className={style.Dropdown__btn} onClick={this.showDropdown}>
            Показать
          </button>
          <button className={style.Dropdown__btn} onClick={this.hideDropdown}>
            Скрыть
          </button>
        </div>
        {this.state.isVisibleDropdown && (
          <div className={style.Dropdown}>Dropdawn</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
