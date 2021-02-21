import React from 'react';
import style from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visibleDropdown: false,
  };

  togle = () => {
    this.setState(prevState => ({
      visibleDropdown: !prevState.visibleDropdown,
      // !prevState таким образом меняем наобород pyfxtybt! С тру на фолс и наобород
    }));
  };

  render() {
    return (
      <div className={style.Dropdown__wrapper}>
        <div>
          <button
            type="button"
            className={style.Dropdown__btn}
            onClick={this.togle}
          >
            {this.state.visibleDropdown ? 'Скрыть' : 'Показать'}
          </button>
        </div>

        {this.state.visibleDropdown && (
          <div className={style.Dropdown}>Dropdawn</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
