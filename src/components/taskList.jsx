import React, { useState } from 'react';
import styled from 'styled-components';
import * as Styled from './styles/styled'
// import Task from './components/Task';
  
const StyledUl = styled.ul`
list-style: none;
color: #f00;
font-size: 14px;
display: flex;
flex-flow: column wrap;
align-items: center;
max-width: 800px;
padding: 0;
margin: 0 auto;
`;

const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        {
          title: 'Pizza party!',
          completeted: false
        },
        {
          title: 'Shopping',
          completeted: true
        },
        {
          title: 'Call my brotha',
          completeted: false
        },
      ]);
  
      const [newTodo, setNewTodo] = useState('')

      const handleNewTodoChange = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
      }
  
      function handleNewTask(e) {
        e.preventDefault();
        if (newTodo === '') return
        setTasks([...tasks, {
          title: newTodo,
          completeted: false
        }])
        e.target.reset();
        console.log();
      }
      
      const removeTodo = (id) => {
          setTasks(tasks.filter((item, index) => index !== id))
      }
  
    return (
      <div className="App">
        <div>Task list</div>
        <form onSubmit={handleNewTask}>
          <input
            type='text'
            className='input'
            placeholder='Add new task'
            onChange={handleNewTodoChange}
            />
        </form>
        <StyledUl className='taskList'>
          {
            tasks.map((item, index) => (
              <Styled.List key={index} title={item.title} style={{textDecoration: item.completeted ? 'line-through' : ''}}>
                {item.title} <Styled.BtnLinks href="/" title={`Delete ${item.title}`} onClick={() => removeTodo(index)} >X</Styled.BtnLinks>
                {console.log('index ' + index)}
              </Styled.List>
            ))
          }
        </StyledUl>
      </div>
    );
}

export default TaskList;