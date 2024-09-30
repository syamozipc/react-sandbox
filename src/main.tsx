import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.tsx';
import Ant from './Ant.tsx';
import Login from './Login.tsx';
import Axios from './Axios.tsx';

export const routes = [
  {
    path: '/',
    element: <Root />,
    name: 'Root',
  },
  {
    path: 'ant',
    element: <Ant />,
    name: 'Ant',
  },
  {
    path: 'login',
    element: <Login />,
    name: 'Login',
  },
  {
    path: 'axios',
    element: <Axios />,
    name: 'Axios',
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
