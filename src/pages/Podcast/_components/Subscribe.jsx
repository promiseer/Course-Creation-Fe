import React from 'react';
import women from '../../../../public/images/Podcast/Layer 1.png';
import BlueLayer from '../../../../public/images/Podcast/bluebg.png';
import background from '../../../../public/images/Podcast/subscribeBG.jpg';

const Subscribe = () => {
  return (
    <div
      className='relative flex items-center justify-center min-h-[500px] md:h-[685px] bg-center bg-cover py-16 md:py-32'
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Blue overlay */}
      <div
        className='absolute inset-0 bg-center bg-cover opacity-70'
        style={{ backgroundImage: `url(${BlueLayer})` }}
      ></div>

      {/* Content */}
      <div className='container relative z-10 flex flex-col items-center gap-8 px-4 mx-auto md:gap-16 lg:flex-row'>
        {/* Left side - Subscribe Form */}
        <div className='flex flex-col justify-center w-full p-4 lg:w-1/2 md:p-8'>
          <h2 className='mb-2 md:mb-4 text-2xl md:text-3xl 2xl:text-[36px] font-extrabold text-[#376489] font-montserrat'>
            LOVE WHAT YOU'RE READING
          </h2>
          <h3 className='mb-4 md:mb-6 text-4xl md:text-5xl 2xl:text-[60px] text-[#376489] font-mognolia'>
            Subscribe for more.
          </h3>
          <p className='mb-6 md:mb-8 text-base md:text-lg 2xl:text-[20px] text-[#376489] font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla
            nec. Risus id risus risus duis quisque dignissim amet. Tempus enim
            volutpat elit vel a nisi eu felis. Leo eget donec ullamcorper
            adipiscing
          </p>
          <form className='flex flex-col sm:flex-row bg-[#FAF5F0] rounded-full overflow-hidden'>
            <input
              type='email'
              placeholder='Enter Email ID'
              className='flex-grow px-4 py-3 border-none outline-none'
              required
            />
            <button
              type='submit'
              className='px-8 sm:px-12 py-3 text-white transition duration-300 bg-[#376489] hover:bg-blue-700 font-semibold'
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className='w-full mt-8 lg:w-1/2 lg:mt-0'>
          <div className='relative max-w-sm mx-auto md:max-w-md 2xl:max-w-max'>
            <img
              src={women}
              alt='Smiling woman'
              className='w-full h-auto rounded-full bg-cyan-800/90'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
