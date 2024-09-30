import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './Root';
import Ant from './Ant';
import Login from './Login';
import Axios from './Axios';
import Tanstack from './Tanstack';

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
  {
    path: 'tanstack',
    element: <Tanstack />,
    name: 'Tanstack',
  },
];

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
