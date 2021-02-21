import React from 'react';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

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
    </>
  );
};

export default App;
