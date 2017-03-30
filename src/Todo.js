import React from 'react';

const Todo = (props) => {
  return (
    <li 
      onClick={() => props.removeTodo(props.index)}
    >
      {props.content}
    </li>
  );
};

export default Todo;