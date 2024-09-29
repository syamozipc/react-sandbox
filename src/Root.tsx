import './App.css';
import { Link } from 'react-router-dom';

function Route() {
  return (
    <>
      <div>page contents</div>
      <div>
        <Link to="ant">Ant</Link>
      </div>
      <div>
        <Link to="login">Login</Link>
      </div>
    </>
  );
}

export default Route;
