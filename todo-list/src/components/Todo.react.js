import React from 'react'
import PropType from 'prop-types'

const Todo = ({text, onClick, isCompleted}) => (
    <li onClick={onClick}
        style={{textDecoration: isCompleted ? "line-through" : 'none'}}>
        {text}
    </li>
);

Todo.PropTypes = {
    onClick: PropType.func.isRequired,
    text: PropType.string.isRequired,
    isCompleted: PropType.bool.isRequired
};

export default Todo

