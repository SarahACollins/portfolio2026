import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/education">Education & Experience</Link>
        </li>
        <li>
          <Link to="/extras">Extras</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </nav>
  );
};