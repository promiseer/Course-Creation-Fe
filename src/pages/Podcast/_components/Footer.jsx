import React from 'react';
import logo from '../../../assets/Podcast/stephanie pinto_burned 1.png';
import award1 from './../../assets/Podcast/BRONZE AusMumpreneur Awards WINNER  1.png';
import award2 from './../../assets/Podcast/award2.png';
import { socialMediaIcons, aboutLinks, courseLinks } from './constants';

const SocialIcon = ({ icon, alt }) => (
  <a href='#' className='flex items-center justify-center'>
    <img src={icon} alt={alt} className='w-full h-full' />
  </a>
);

const LinkSection = ({ title, links }) => (
  <div className='space-y-6 font-raleway text-sm md:text-base 2xl:text-[15px] text-[#274C69] font-bold'>
    <h2 className='font-extrabold mb-4 text-2xl md:text-3xl 2xl:text-[36px] text-[#376489] font-montserrat'>
      {title}
    </h2>
    {links.map((link, index) => (
      <a
        key={index}
        href='#'
        className='block hover:text-[#376489] transition-colors'
      >
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className='bg-white mt-20 md:mt-[200px] lg:mt-[300px]'>
      <main className='container flex flex-col px-4 py-8 mx-auto lg:flex-row'>
        <aside className='w-full mb-8 space-y-4 lg:w-1/4 lg:mb-0'>
          <img src={logo} alt='logo' className='mx-auto lg:mx-0 2xl:mb-8' />
          <div className='flex items-center justify-center mb-6 space-x-4 lg:justify-start'>
            {socialMediaIcons.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} alt={social.alt} />
            ))}
          </div>
        </aside>

        <div className='grid w-full grid-cols-1 gap-8 lg:w-3/4 md:grid-cols-2 lg:grid-cols-3 2xl:ms-12'>
          <LinkSection title='ABOUT' links={aboutLinks} />
          <LinkSection title='COURSES' links={courseLinks} />
          <div className='space-y-2'>
            <h2 className='font-extrabold text-2xl md:text-3xl 2xl:text-[36px] mb-4 text-[#376489] font-montserrat'>
              AWARDS
            </h2>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start sm:gap-8'>
              <img
                src={award1}
                alt='award1'
                className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain'
              />
              <img
                src={award2}
                alt='award2'
                className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-contain'
              />
            </div>
          </div>
        </div>
      </main>

      <footer className='py-4 mt-8 bg-[#C1989F]'>
        <div className='container px-4 mx-auto text-center text-gray-600'>
          © {new Date().getFullYear()} Stephanie Pinto. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
