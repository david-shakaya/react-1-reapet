import React from 'react';
import paintings from './paintings.json';
import PaintingsList from './components/PaintingList/PaintingsList';
import Panel from './components/Panel/Panel';
import ColorPiecer from './components/ColorPicer/ColorPiecer';
import Notification from './components/Notification/Notification';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
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
    <>
      <Header />
      <Container>
        <ColorPiecer option={ColorPiecerOption} />
        <Notification text={'Нотификация с помощью composes в css'} />
        <Notification
          text={'Нотификация с помощью composes в css ТИП-error'}
          type="error"
        />
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
      </Container>
    </>
  );
};

export default App;
