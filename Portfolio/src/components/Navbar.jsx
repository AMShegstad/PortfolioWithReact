import { Link, useLocation } from 'react-router-dom';
import '../assets/Navbar.css'; // Import the custom CSS for Navbar

// Navbar component that renders a navigation bar with links to different pages
export default function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    // Bootstrap classes used for styling the navigation bar
    <ul className="nav nav-tabs navbar-expand-lg w-100 justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          // Conditional class assignment based on the current page
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Conditional class assignment based on the current page
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Conditional class assignment based on the current page
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Conditional class assignment based on the current page
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}