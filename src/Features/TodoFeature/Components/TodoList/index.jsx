import { Container } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func,
};

function TodoList({ todoList, onTodoClick = null }) {
  const handleClick = (todo) => {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  };

  return (
    <div>
      <Container>
        <div className='todo'>
          <h2 className='todo__title'>TodoList</h2>
          <ul className='todo__list'>
            {todoList.map((todo, idx) => (
              <li className='todo__item' key={todo.id}>
                <div className='item-title'>
                  <input
                    onChange={(e) => onTodoClick && onTodoClick(idx, e.target.checked)}
                    type='checkbox'
                    className='checkbox'
                    checked={todo.status === 'completed'}
                  />

                  <div className='checked'>
                    <span className='line'>-</span>
                    <div className='check' />
                  </div>

                  <p className='desc'>{todo.title}</p>
                </div>
                <div className='item-delete' onClick={() => handleClick(todo)}>
                  <DeleteOutlineIcon />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default TodoList;
