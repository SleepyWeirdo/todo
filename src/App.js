import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import routes from './components/routes';

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
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              // component={route.component}
              exact={route.exact && route.exact}
            >
              {<route.component/>}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
   )
}

export default App;
