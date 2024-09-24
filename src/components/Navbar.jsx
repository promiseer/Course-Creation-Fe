import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Import useLocation and Link
import Icons from "../../public/index.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to determine if a menu item is active
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };
  return (
    <nav className="navbars">
      <span className="nav-brands" onClick={handleSubmit}>
        <img src={Icons.brandLogo} alt="logo" />
      </span>
      <button className="nav-navigations" onClick={() => setIsOpen(!isOpen)}>
        <img src={Icons.humbergerMenu} alt="menu" />
      </button>
      <div className={`navbars-menus-block ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          <li className={`menu-item ${isActive("/courses") ? "active" : ""}`}>
            <Link to="/courses" className="menu-link">
              COURSES
            </Link>
          </li>
          <li className={`menu-item ${isActive("/qna") ? "active" : ""}`}>
            <Link to="/qna" className="menu-link">
              Q&A VAULT
            </Link>
          </li>
          <li className={`menu-item ${isActive("/resources") ? "active" : ""}`}>
            <Link to="/resources" className="menu-link">
              RESOURCES
            </Link>
          </li>
          <li className={`menu-item ${isActive("/support") ? "active" : ""}`}>
            <Link to="/support" className="menu-link">
              SUPPORT
            </Link>
          </li>
          <li className={`menu-item ${isActive("/profile") ? "active" : ""}`}>
            <Link to="/profile" className="menu-link">
              MY PROFILE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
