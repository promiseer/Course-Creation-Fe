import React from 'react';
import ImageGrid from '../components/gridimg'; // Adjust the import path as necessary
import img from '../assets/mn.svg';
import Navbar from '../components/Navbar';
import next from '../assets/next.svg'
import t1 from '../assets/t1.svg';
import t2 from '../assets/t2.svg';
import t4 from '../assets/t4.svg';
import t5 from '../assets/t5.svg';
import t7 from '../assets/t7.svg';
import t8 from '../assets/t8.svg';
import t9 from '../assets/t9.svg';
import Navbarr from '../components/navdeux';
import Navbarrr from '../components/navv';
import Header from '../components/shared/Header';

const Resources = () => {
  // Array of image objects with paths and text
  const images = [
    { path: t1, text: 'TOPIC NAME 1' },
    { path: t2, text: 'TOPIC NAME 2' },
    { path: img, text: 'TOPIC NAME 3' },
    { path: t4, text: 'TOPIC NAME 4' },
    { path: t5, text: 'TOPIC NAME 5' },
    { path: t2, text: 'TOPIC NAME 6' },
    { path: t7, text: 'TOPIC NAME 7' },
    { path: t8, text: 'TOPIC NAME 8' },
    { path: t9, text: 'TOPIC NAME 9' },

  ];

  return (
    <div className="bg-[#FAF5F0]">
      {/* Header Section */}
      <Header/>
      <div className="  mx-auto flex flex-col items-center justify-center text-center mb-8 md:mb-[30px] mt-[10px] md:mt-[50px]">
        <h1 className="font-normal  text-[#376489]  font-mognolia text-[40px] md:text-[50px] md:leading-[56px] mt-4">Course Name Resources</h1>
        <p className=" md:mb-[80px] w-[344px] h-[87px]  leading-[18px] md:w-[990px] md:h-[72px]  text-center text-bblue md:text-[18px]  font-montserrat md:leading-[30px]  text-[12px]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">876 Hug × 159 Hug</button> */}
      </div>

      {/* Image Grid Section */}
      <ImageGrid images={images} />

      
    </div>
  );
};

export default Resources;
