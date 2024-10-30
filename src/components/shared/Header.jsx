import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";

const navItems = [
  { id: 1, title: "ABOUT", path: "/about" },
  { id: 2, title: "COURSES", path: "/courses-info" },
  { id: 3, title: "RESOURCES", path: "/resources" },
  {
    id: 4, com: (
      <Link to="/home">
        <img src={Icons.BrandLogo} alt="Logo" className="mx-4 w-32" />
      </Link>
    ),
  },
  { id: 5, title: "BOOK", path: "/books" },
  {
    id: 6,
    title: "WORK WITH ME",
    path: "/work-with-me",
    submenu: [
      { id: 6.1, title: "Coaching", path: "/work-with-me/coaching" },
      { id: 6.2, title: "Speaking", path: "/work-with-me/speaking" },
    ],
  },
  { id: 7, title: "BLOG", path: "/blogs" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenuId(null); // Close submenus when the main menu toggles
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <header className="flex items-center justify-between p-2 container text-[#274C69] font-bold">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:justify-between items-center space-x-4 w-full">
        {navItems.map((item) => (
          <Fragment key={item.id}>
            {item.id === 4 ? (
              item.com
            ) : item.submenu ? (
              <div className="relative">
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className="text-gray-600 hover:text-gray-900 font-raleway"
                >
                  {item.title}
                </button>
                {openSubmenuId === item.id && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-md z-10">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className="text-gray-600 hover:text-gray-900 font-raleway"
              >
                {item.title}
              </Link>
            )}
          </Fragment>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="w-full flex justify-between items-center md:hidden">
        <Link to="/home">
          <img src={Icons.BrandLogo} alt="Logo" className="!ml-22 md:ml-4 mx-4 w-32" />
        </Link>
        <button onClick={toggleMenu} className="text-gray-600 text-3xl hover:text-gray-900">
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          {navItems.map((item) => (
            <Fragment key={item.id}>
              <div>
                <button
                  onClick={() => item.submenu ? toggleSubmenu(item.id) : (toggleMenu(), window.location.pathname = item.path)}
                  className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 font-raleway"
                >
                  {item.title}
                </button>
                {item.submenu && openSubmenuId === item.id && (
                  <div className="ml-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={toggleMenu}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
