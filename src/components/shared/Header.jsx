import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";

const navItems = [
  { id: 1, title: "ABOUT", path: "/about" },
  { id: 2, title: "COURSES", path: "/courses-info" },
  { id: 3, title: "RESOURCES", path: "/resources" },
  {
    id: 4, com: <Link to="/home">
      <img
        src={Icons.BrandLogo}
        alt="Logo"
        className="mx-4 w-32"
      />
    </Link>
  },
  { id: 5, title: "BOOK", path: "/books" },
  { id: 6, title: "WORK WITH ME", path: "/work-with-me" },
  { id: 7, title: "BLOG", path: "/blogs" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-2 container text-[#274C69] font-bold">
      <nav className="hidden md:flex md:justify-between items-center space-x-4 w-full">
        {navItems.map((item) => {
          return (
            <Fragment key={item.id}>
              {item.id === 4 ? item.com : <Link
                key={item.id}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 font-raleway"
              >
                {item.title}
              </Link>}

            </Fragment>
          )
        })}
      </nav>

      <div className="w-full flex justify-between items-center md:hidden">
      <Link to="/home">
      <img
        src={Icons.BrandLogo}
        alt="Logo"
        className="!ml-22 md:ml-4  mx-4 w-32"
      />
    </Link>
        <button
          onClick={toggleMenu}
          className="text-gray-600 text-3xl hover:text-gray-900"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 font-raleway"
              onClick={toggleMenu}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
