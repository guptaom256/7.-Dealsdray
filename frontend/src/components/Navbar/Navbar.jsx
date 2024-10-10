import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/dashboard">
        <p>Dealsdray</p>
      </Link>
      <div className="navbar-left">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/list">Employees List</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
        <li><Link to="/profile">Om Gupta</Link></li>
        <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
