import React from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Test React Ant Design Todo List',
      status: 'unfinished',
    },

    {
      id: 2,
      title: 'Write About React And Ant Design',
      status: 'unfinished',
    },

    {
      id: 3,
      title: 'Finalize Presentation',
      status: 'finish',
    },

    {
      id: 4,
      title: 'Book Fights To Ireland',
      status: 'unfinished',
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Test frontend</h2>

      <TodoForm />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
