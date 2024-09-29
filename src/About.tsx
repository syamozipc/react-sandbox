import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div>this is about page</div>
      <div>
        <Link to="/">go back to the top</Link>
      </div>
    </>
  );
}

export default About;
