import React from 'react';
import Counter from './components/Counter/';
import Dropdown from './components/Dropdown/';
import colorPickerData from './data/colorPickerData.json';
import ColorPicker from './components/ColorPicker/';
import TodoList from './components/TodoList';

// Рендер c помощю мап.

/* !!!!!!! --ВАЖНО----!!!!!
 * _ При создании колекции нужно обязательно прописать уникальный ключ (контейнеру Тегу в данном случае li)
 * - Ключ для того что бы реакт смог идентифицировать елемент в случаее динамического измен. елем колекци
 *  В данном случае Пишеться так -  <li key={painting.id}>
 */

class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Text number 1', complited: false },
      { id: 'id-2', text: 'Text number 2', complited: false },
      { id: 'id-3', text: 'Text number 3', complited: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => {
        console.log(todoId);
        if (todoId !== el.id) {
          return el.id;
        }
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Counter initialValue={10}></Counter>
        <Dropdown />
        <ColorPicker options={colorPickerData} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
