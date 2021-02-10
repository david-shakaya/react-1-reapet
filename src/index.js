import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

// Рендерим то что в апп
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* Создаем елемент виртуального дома */
// 1) а - тип тега
// 2)href - это обьект настроек.ПРОПС 
// 3) - Это дети. Текст созданной ссылки
const link = React.createElement('a', { href: 'https://www.google.com/', target:'_blank' }, 'Ссылка гугл')
console.log(link);

const root = document.querySelector('#root');
// Добавляем ел в настоящий дом
// ReactDOM.render(link, root)


/* 
* - Создаем тот же линк но с помощю JSX тега
 */

const jsxLink = <a className="link"
  href="'https://www.google.com/'
   target='_blank'">Ссылка на гугл с помощью JSX</a>

  //  ReactDOM.render(jsxLink, document.querySelector('#root'))