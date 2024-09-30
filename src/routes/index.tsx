import Layout from '../Layout';
import Ant from '../pages/Ant';
import Login from '../pages/Login';
import Axios from '../pages/Axios';
import Tanstack from '../pages/Tanstack';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    id: 'layout',
    path: '/',
    element: <Layout />,
  },
  {
    id: 'ant',
    path: 'ant',
    element: <Ant />,
  },
  {
    id: 'login',
    path: 'login',
    element: <Login />,
  },
  {
    id: 'axios',
    path: 'axios',
    element: <Axios />,
  },
  {
    id: 'tanstack',
    path: 'tanstack',
    element: <Tanstack />,
  },
];
