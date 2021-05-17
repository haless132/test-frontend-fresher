import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './styles.scss';

TodoForm.propTypes = {};

function TodoForm(props) {
  return (
    <div>
      <Container>
        <form className='todo-form'>
          <input type='text' />
          <button>
            <AddCircleOutlineIcon />
            <p> Add</p>
          </button>
        </form>
      </Container>
    </div>
  );
}

export default TodoForm;
