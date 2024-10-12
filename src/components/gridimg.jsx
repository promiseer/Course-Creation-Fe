import React, { useState, useEffect } from 'react';
import download from '../assets/download.svg';
import next from '../assets/next.svg'; // Make sure the 'next' icon is imported

const ImageCard = ({ imagePath, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[217px] md:h-[490px]" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imagePath} alt={text} className="w-full h-full object-cover" />
      
      <div className={`absolute inset-0 flex items-center justify-center  bg-[#274C6999] transition duration-300 ease-in-out ${isHovered ? 'bg-[#E4C1C999] text-bblue' : 'text-white'} font-extrabold`}> 
             <span className="  max-w-[70px] h-[48px] leading:[21px] text-[16px] md:max-w-[180px] md:h-[74px] md:text-[40px] font-extrabold font-montserrat md:leading-[50px] text-center">{text}</span> {/* Control text width here */}      </div>

      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-end md:mb-[40px]">
          <button className="bg-dark-blue font-montserrat font-medium md:text-[24px] md:h-[45px] text-[10px] text-white md:w-[250px] h-[28px] w-[147px] rounded-full flex items-center justify-center gap-3 mb-4">
            <img src={download} alt="Download" className="w-[13px] h-[13px] md:w-[15px] md:h-[15px] object-cover" />
            Download Now
          </button>
        </div>
      )}
    </div>
  );
};

const ImageGrid = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(images);

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth >= 768) {
        setVisibleImages(images.slice(0, 9));
      } else {
        setVisibleImages(images.slice(0, 8));
      }
    };

    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);
    
    return () => {
      window.removeEventListener('resize', updateVisibleImages);
    };
  }, [images]);

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
      {visibleImages.map((image, index) => (
        <ImageCard key={index} imagePath={image.path} text={image.text} />
      ))}

      {/* Return Button */}
      <div className="w-full mt-4 mb-8 flex justify-center md:justify-end col-span-2 md:col-span-3">
        <button className="bg-dark-blue font-montserrat font-semibold text-[18px] text-white w-[270px] h-[50px] rounded-full flex items-center justify-center gap-3">
          RETURN TO COURSE
          <img src={next} alt="Next" className=" w-[8px] h-[15px] md:w-[8px] md:h-[15px] object-cover" />
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;