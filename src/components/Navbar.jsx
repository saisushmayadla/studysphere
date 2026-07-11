import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎓 StudySphere
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Groups</Link>
        <Link to="/profile">Profile</Link>

        <Link to="/create">
          <button>Create Group</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;