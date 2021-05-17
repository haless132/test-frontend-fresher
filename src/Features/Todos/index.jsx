import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Test React Ant Design Todo List',
      status: 'todo',
    },

    {
      id: 2,
      title: 'Write About React And Ant Design',
      status: 'todo',
    },

    {
      id: 3,
      title: 'Finalize Presentation',
      status: 'completed',
    },

    {
      id: 4,
      title: 'Book Fights To Ireland',
      status: 'todo',
    },
  ];

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem('todo_list')) || initTodoList;
  });

  const handleRemove = (todo) => {
    // console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);

    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  };

  const handleTodoClick = (idx, checked) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[idx],
      status: checked ? 'completed' : 'todo',
    };

    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);

    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  };

  const handleTodoFormSubmit = (formValues) => {
    // console.log('Form submit: ', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);

    localStorage.setItem('todo_list', JSON.stringify(newTodoList));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Test frontend Fresher</h2>

      <TodoForm onSubmit={handleTodoFormSubmit} />

      <TodoList todoList={todoList} onTodoClick={handleTodoClick} onTodoRemove={handleRemove} />
    </div>
  );
}

export default TodoFeature;
