import React from 'react';
import Counter from './components/Counter/Counter';

// Рендер c помощю мап.

/* !!!!!!! --ВАЖНО----!!!!!
 * _ При создании колекции нужно обязательно прописать уникальный ключ (контейнеру Тегу в данном случае li)
 * - Ключ для того что бы реакт смог идентифицировать елемент в случаее динамического измен. елем колекци
 *  В данном случае Пишеться так -  <li key={painting.id}>
 */

const App = () => {
  return <Counter></Counter>;
};

export default App;
