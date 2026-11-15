import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h2>React Router App</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/details">Details</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;