import React from 'react';

const Task = props => {

    const removeTodo = (id) => {
        
    }

    return (
        <li className="task" style={{textDecoration: props.done ? 'line-through' : ''}}>
            {props.title} <button onClick={() => removeTodo(props.key)}>X</button>
        </li>
    )
}

export default Task;