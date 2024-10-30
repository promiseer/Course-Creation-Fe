import HeroImage from '../../../assets/Podcast/heroimage.jpg';
import background from './../../assets/Podcast/background.png';
import BlueLayer from './../../assets/Podcast/bluebg.png';
import LeftShape from './../../assets/Podcast/Shape 1.png';
import RightShape from './../../assets/Podcast/Shape 2.png';
import { socialMediaIcons } from './constants';
import BlueStar from './../../assets/Podcast/Blue-Star.svg';
import WhiteStar from './../../assets/Podcast/WhiteStar.svg';
import React from 'react';

function SocialIcon({ icon, alt }) {
  return (
    <a href='#' className='flex items-center justify-center'>
      <img src={icon} alt={alt} className='w-full h-full' />
    </a>
  );
}

function Hero() {
  const rating = 4; // Adjust the rating dynamically if needed

  return (
    <div
      className='relative flex items-center justify-center min-h-screen pt-32 bg-center bg-cover'
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Blue overlay */}
      <div
        className='absolute inset-0 opacity-70'
        style={{ backgroundImage: `url(${BlueLayer})` }}
      ></div>

      {/* Left shape */}
      <img
        src={LeftShape}
        alt='Left Shape'
        className='absolute left-0 transform -translate-y-1/2 top-1/2'
      />

      {/* Right shape */}
      <img
        src={RightShape}
        alt='Right Shape'
        className='absolute right-0 transform -translate-y-1/2 top-1/2'
      />

      {/* Content */}
      <div className='container relative z-10 flex flex-col items-center gap-16 px-4 mx-auto lg:flex-row'>
        {/* Left side - Podcast Cover */}
        <div className='lg:w-1/2'>
          <div className='relative mx-auto xs:max-w-md 2xl:max-w-max'>
            {/* Absolute Square Border */}
            <div className='absolute -bottom-5 left-4 w-[650px] h-[620px] border-r border-b border-[#376489] rounded-lg'></div>

            {/* Image */}
            <img
              src={HeroImage}
              alt='Emotionally Intelligent Parenting Podcast'
              className='object-cover 2xl:w-[650px] 2xl:h-[650px] rounded-lg shadow-lg'
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className='text-center lg:w-1/2 lg:text-left'>
          <h1 className='mb-4 text-[60px] font-extrabold text-[#376489]'>
            PARENTING FOR EMOTIONAL GROWTH
          </h1>
          <h2 className='mb-4 text-[60px] text-[#376489] font-mognolia'>
            With Stephanie Pinto
          </h2>
          <p className='mb-6 text-[20px] text-[#274C69] font-medium'>
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla
            nec. Risus id risus rius duis quisque dignissim amet.
          </p>

          {/* Social Media Icons */}
          <div className='flex items-center justify-center mb-6 space-x-4'>
            {socialMediaIcons.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} alt={social.alt} />
            ))}
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
              <span className='mr-2 text-[20px] text-[#274C69] font-medium font-montserrat'>
                {rating}.0
              </span>
              <div className='flex'>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={index < rating ? BlueStar : WhiteStar}
                      alt={index < rating ? 'Blue Star' : 'White Star'}
                      className='w-5 h-5'
                    />
                  ))}
              </div>
            </div>
            <button className='px-10 ml-2 py-[12px] mt-2 text-white transition duration-300 bg-[#376489] rounded-full hover:bg-[#274C69]'>
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
