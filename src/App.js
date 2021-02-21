import React from 'react';
import Counter from './components/Counter/';
import Dropdown from './components/Dropdown/';
import colorPickerData from './data/colorPickerData.json';
import ColorPicker from './components/ColorPicker/';

// Рендер c помощю мап.

/* !!!!!!! --ВАЖНО----!!!!!
 * _ При создании колекции нужно обязательно прописать уникальный ключ (контейнеру Тегу в данном случае li)
 * - Ключ для того что бы реакт смог идентифицировать елемент в случаее динамического измен. елем колекци
 *  В данном случае Пишеться так -  <li key={painting.id}>
 */

const App = () => {
  return (
    <>
      <Counter initialValue={10}></Counter>
      <Dropdown />
      <ColorPicker options={colorPickerData} />
    </>
  );
};

export default App;
