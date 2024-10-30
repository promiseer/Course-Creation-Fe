import React from 'react';
import img from '../assets/hero.svg'; // Replace with your actual image path
import Navbarr from '../components/navdeux';
import Icons from "../components/Icons.js";

const Support = () => {
  return (
    <>
          <div className=" w-full h-full  bg-[#FAF5F0]">

      <Navbarr/>

      {/* Hero Section with Image and Title */}
      <div className="relative  w-full    md:h-[380px] mt-[20px]">
        <img 
          src={img} 
          alt="Hero" 
          className="w-full h-full hidden md:block"
          
        />
      </div>

 {/* Mobile View with Support Icon */}
      <div className="md:hidden flex flex-col items-center justify-center h-[200px] bg-gray-100">
        <img 
          src={Icons.Suportimage} 
          alt="Support" 
        />
      </div>


      {/* Centered Title */}
      <div className="font-normal text-center text-[#376489]  text-[41px] font-mognolia leading-[56.4px]">
Support
      </div>

      {/* Content Section */}
      <div className="md:w-[1360px] md:h-[600px] w-[367px]  h-[650px] bg-[#FAF5F0]  mx-auto  md:px-0 text-[#376489]  md:text-start text-center font-montserrat  text-[18px] md:text-[24px] leading-[21px] md:leading-[34px]">
        <p className='md:mt-[50px] mt-[30px] ' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        </p>
        <p className=" md:mt-[50px] mt-[40px]  ">
        consequat <span className="text-dark-rose font-bold "> Duis  aute irure dolor in reprehenderit in voluptate </span> velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
        <p className=" md:mt-[50px] mt-[40px] md:mb-0 md:p-0">
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
       
      </div>
    </div>
    </>
  );
};

export default Support;
