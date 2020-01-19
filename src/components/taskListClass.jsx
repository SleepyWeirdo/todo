import React from 'react';
// import Task from './components/Task';


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
          <input
            type='text'
            className='input'
            placeholder='Add new task'
            onChange={this.handleNewTodoChange}
            />
        </form>
        <ul className='taskList' style={styles.list}>
          {
            this.state.tasks.map((item, index) => (
              <li key={index} title={item.title} style={{textDecoration: item.completeted ? 'line-through' : ''}}>
                {item.title} <a href="/" title={`Delete ${item.title}`} onClick={(e) => this.removeTodo(e, index)} >X</a>
                {console.log('index ' + index)}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}