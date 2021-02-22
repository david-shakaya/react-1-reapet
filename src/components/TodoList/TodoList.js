import React from 'react';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <>
      <h2>Тудушки</h2>

      <ul>
        {todos.map(({ text, id }) => {
          return (
            <li key={id}>
              <p>{text}</p>
              <button type="button" onClick={() => onDeleteTodo(id)}>
                Удалить
              </button>
              <p>Создать</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
