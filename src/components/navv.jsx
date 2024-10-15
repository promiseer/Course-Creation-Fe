import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from "../assets/logoo.svg"; 
import userIcon from '../assets/profile.svg'; 
import menuIcon from '../assets/men.svg'; // Menu icon image

const Navbarrr = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [nav, setNav] = useState(false);
  const [activePage, setActivePage] = useState('RESOURCES'); // Set default active page

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'COURSES', path: '/courses' },
    { id: 3, text: 'RESOURCES', path: '/resources' },
    { id: 4, text: 'SUPPORT', path: '/support' },
    { id: 5, text: 'MY PROFILE', path: '/profile' },
  ];

  const handleNavItemClick = (item) => {
    setActivePage(item.text);
    navigate(item.path); // Navigate to the corresponding path
  };

  return (
    <div className="flex items-center justify-between h-[80px] w-full lg:px-20 bg-[#FAF5F0]">
      {/* Logo Section */}
      <div className="flex items-center mx-auto md:mx-0">
        <img src={logo} alt="Logo" className="h-[70px] w-[251px]" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end w-full">
        <ul className="font-raleway flex space-x-10 lg:space-x-16 text-bblue font-bold text-[20px]">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition duration-300 relative pb-1 `}
              onClick={() => handleNavItemClick(item)} // Handle click
            >
              {item.text}
    
           
            </li>
          ))}
        </ul>

        {/* Profile Icon */}
        <div className="flex items-center ml-8">
          <img src={userIcon} alt="Profile" className="h-10 w-10 rounded-full border-2 border-white" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button onClick={handleNav}>
          <img src={menuIcon} alt="Menu" className="h-8 w-8 mr-2" />
        </button>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-[80px] left-0 w-full bg-blue-500 text-white shadow-lg">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`p-4 border-b border-white hover:bg-blue-600 transition duration-300 cursor-pointer ${activePage === item.text ? 'underline' : ''}`}
                onClick={() => {
                  handleNavItemClick(item);
                  setNav(false); // Close mobile menu on item click
                }}
              >
                {item.text}
              </li>
            ))}
            <li className="p-4 border-b border-white hover:bg-blue-600 transition duration-300 cursor-pointer">
              <img src={userIcon} alt="Profile" className="h-10 w-10 rounded-full border-2 border-white inline" />
              MY PROFILE
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbarrr;
