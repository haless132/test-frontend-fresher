import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Container } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

function TodoList(props) {
  const { todoList } = props;
  return (
    <div>
      <Container>
        <div className='todo'>
          <h2 className='todo__title'>TodoList</h2>
          <ul className='todo__list'>
            {todoList.map((todo) => (
              <li className='todo__item' key={todo.id}>
                <div className='item-title'>
                  <input type='checkbox' className='checkbox' />
                  <div className='checked'>
                    <span className='line'>-</span>
                    <div className='check' />
                  </div>
                  <p className='desc'>{todo.title}</p>
                </div>
                <div className='item-delete'>
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
