import React, { useState, useEffect } from 'react';
import CardGrid from '../components/cardd'; // Assuming CardGrid is for desktop
import MobileGrid from '../components/mobilegrid'; // Import your MobileGrid component
import search from "../assets/search.svg";
import next from '../assets/next.svg';
import father from '../assets/father.svg'; // Import the father image
import Navbarrr from '../components/navv';

const Qvault = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial state based on window size

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbarrr />
      <div className=" relative flex flex-col items-center bg-[#FAF5F0] py-10">
        {/* Container for Search Bar and Image */}
        <div className=' h-[350px] md:h-[500px] md:mt-[50px]'>
          <div className="text-center md:mb-[30px] mb-[60px]">
            <div className="text-[40px] leading-[40px] text-[#376489] md:text-[64px] font-magnolia md:leading-[90px]  md:mb-4 mb-8">
              Course Name
            </div>
            <div className="text-[40px] leading-[40px] text-[#376489] md:text-[40px] font-magnolia md:leading-[56px]">
              Q&A Vault
            </div>
          </div>

          <div className="flex items-center w-full justify-center ">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search feed ..."
              className="w-[350px] placeholder:text-dark-blue bg-[#D9D9D933] md:w-[627px] p-2 h-[40px] border border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className='md:ml-1 flex justify-center items-center w-[39px] h-[40px] bg-dark-blue'>
              <img
                src={search}
                alt="search-img"
                className="w-[12px] h-[17px]"
              />
            </div>
          </div>
        </div>

        {/* Conditional rendering for desktop and mobile */}
        {isMobile ? <MobileGrid /> : <CardGrid />}

        <div className="flex justify-center mb-8 mt-[50px]">
          <button className="bg-[#8C6D6D] font-montserrat font-semibold text-[18px] md:text-[18px] text-white w-[270px] h-[50px] md:w-[258px] md:h-[45px] rounded-full flex items-center justify-center gap-3">
            RETURN TO COURSE
            <img src={next} alt="Next" className="hidden md:block w-[4px] h-[9px] md:w-[8px] md:h-[15px] object-cover" />
          </button>
        </div>

        {/* Father Image at the bottom-left corner */}
        <img
          src={father}
          alt="Father"
          className="absolute bottom-0 right-0 hidden md:flex md:w-[550px] md:h-[670px] object-contain"
        />
      </div>
    </>
  );
};

export default Qvault;
