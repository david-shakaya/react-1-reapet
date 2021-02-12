import React from 'react';
import paintings from './paintings.json';
import PaintingsList from './components/PaintingsList';
import Logo from './components/Logo';
import Panel from './components/Panel';
import ColorPiecer from './components/ColorPiecer';
// Рендер c помощю мап.

/* !!!!!!! --ВАЖНО----!!!!!
 * _ При создании колекции нужно обязательно прописать уникальный ключ (контейнеру Тегу в данном случае li)
 * - Ключ для того что бы реакт смог идентифицировать елемент в случаее динамического измен. елем колекци
 *  В данном случае Пишеться так -  <li key={painting.id}>
 */

const ColorPiecerOption = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
];

const App = () => {
  return (
    <div>
      <ColorPiecer option={ColorPiecerOption} />
      <Logo text={'Логотип'} />
      <Panel title={'Title Панели 1'}>
        <p>Ребенок Панел 1</p>
        <p>Ребенок Панел 1</p>
        <a href="#">Ccилка ребенок, читать далее</a>
      </Panel>
      <Panel>
        <p>Ребенок Панел 2</p>
      </Panel>
      <Panel title={'Title Панели 3'}>
        <p>Ребенок Панел 3</p>
        <a href="#">Ccылка панели 3</a>
      </Panel>
      <PaintingsList item={paintings} />
    </div>
  );
};

export default App;
