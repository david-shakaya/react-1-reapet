import React from 'react';
import style from './ColorPicker.module.css';
import {
  ColorPicker__option,
  ColorPicker__option__active,
} from './ColorPicker.module.css';

class ColorPicker extends React.Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  qwe = index => {
    const optionsClasses = [ColorPicker__option];
    if (index === this.state.activeOptionIdx) {
      optionsClasses.push(ColorPicker__option__active);
    }
    return optionsClasses.join(' ');
  };

  // handleClick = (){
  //     this.setState({
  //         activeOptionIdx:
  //     })
  // }

  render() {
    return (
      <div className={style.ColorPicker}>
        <h2 className={style.ColorPicker__title}>Color Picker</h2>
        <p>Выбран цвет:</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                style={{
                  backgroundColor: color,
                }}
                className={this.qwe(index)}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
