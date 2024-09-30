import './App.css';
import { Link } from 'react-router-dom';
import { routes } from './main';

function Route() {
  return (
    <>
      <div>page contents</div>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Route;
