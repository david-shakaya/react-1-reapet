import React from 'react'
import paintings from "./paintings.json"
import PaintingsList from './components/PaintingsList'
// Рендер c помощю мап. 

/* !!!!!!! --ВАЖНО----!!!!!
* _ При создании колекции нужно обязательно прописать уникальный ключ (контейнеру Тегу в данном случае li)
* - Ключ для того что бы реакт смог идентифицировать елемент в случаее динамического измен. елем колекци
*  В данном случае Пишеться так -  <li key={painting.id}>
 */
const App =  () => {
    return (
      <div>
        <h1>Главный Компонент страницы</h1>
        <PaintingsList item={paintings }/>
     </div>
  )
} 

export default App
