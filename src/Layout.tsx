import './App.css';
import { Link } from 'react-router-dom';
import { routes } from './routes';

function Layout() {
  return (
    <>
      <div>page contents</div>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.path ?? ''}>{route.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Layout;
