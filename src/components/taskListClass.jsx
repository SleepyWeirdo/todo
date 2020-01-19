import React from 'react';
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

export default class taskListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      tasks: [{
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
      }]
    }
  }


  handleNewTodoChange = (e) => {
    e.preventDefault();
    this.setState({newTodo: e.target.value}, () => console.log(this.state));
    
  }

    
  handleNewTask = (e) => {
    e.preventDefault();
    let tasksCopy = JSON.parse(JSON.stringify(this.state.tasks));
    if (this.state.newTodo === '') return
    tasksCopy.push({title: this.state.newTodo, completed: false});
    this.setState({tasks: tasksCopy});
    e.target.reset();
  }
  
  removeTodo = (e, id) => {
    e.preventDefault();
    const removedTask = this.state.tasks.filter((item, index) => index !== id)
    this.setState({tasks: removedTask});
    console.log('removed');
  }


  render() {
    
    const styles = {
      list: {
        listStyle: 'none',
        color: '#f00',
      }
    }

    return (
      <div className="App">
        <div>Task list</div>
        <form
        onSubmit={this.handleNewTask}
        >
          <Styled.Search
            type='text'
            className='input'
            placeholder='Add new task'
            onChange={this.handleNewTodoChange}
            />
        </form>
        <StyledUl className='taskList' style={styles.list}>
          {
            this.state.tasks.map((item, index) => (
              <Styled.List key={index} title={item.title} style={{textDecoration: item.completeted ? 'line-through' : ''}}>
                {item.title} <Styled.BtnLinks href="/" title={`Delete ${item.title}`} onClick={(e) => this.removeTodo(e, index)} >X</Styled.BtnLinks>
                {console.log('index ' + index)}
              </Styled.List>
            ))
          }
        </StyledUl>
      </div>
    );
  }
}