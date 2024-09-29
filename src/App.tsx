import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>page contents</div>
      <div>
        <Link to="about">About</Link>
      </div>
      <div>
        <Link to="recruit">Recquit</Link>
      </div>
    </>
  );
}

export default App;
