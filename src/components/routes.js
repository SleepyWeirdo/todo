import TaskList from './taskList';
import taskListClass from './taskListClass';
import {Login, Register} from './login/index';
import NoDirection from './nodirection';
import Home from './home';

const routes = [
  {
    path: '/tasklist/class',
    component: taskListClass
  },
  {
    path: '/tasklist/function',
    component: TaskList
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '*',
    component: NoDirection
  }
];

export default routes;