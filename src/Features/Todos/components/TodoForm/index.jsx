import { Container } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.scss';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit = null }) {
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);

    setValue('');
  };
  return (
    <div>
      <Container>
        <form className='todo-form'>
          <input type='text' value={value} onChange={handleValueChange} />

          <button onClick={handleClick}>
            <AddCircleOutlineIcon />
            <p> Add</p>
          </button>
        </form>
      </Container>
    </div>
  );
}

export default TodoForm;
