import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import TaskList from './components/taskList';
import taskListClass from './components/taskListClass';
import Home from './components/home';
import {Login, Register} from './components/login/index';

function App() {

   return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/taskList/class">[Class-based]TaskList</Link>
          </li>
          <li>
            <Link to="/taskList/function">[Function-based]TaskList</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>
      <div className="container">
        <Switch>
          <Route path="/tasklist/class" component={taskListClass}></Route>
          <Route path="/tasklist/function" component={TaskList}></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
   )
}

export default App;
