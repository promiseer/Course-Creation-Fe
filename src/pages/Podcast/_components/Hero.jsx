import HeroImage from "../../../assets/Podcast/heroimage.jpg";
import background from "../../../assets/Podcast/background.png";
import BlueLayer from "../../../assets/Podcast/bluebg.png";
import LeftShape from "../../../assets/Podcast/Shape 1.png";
import RightShape from "../../../assets/Podcast/Shape 2.png";
import { socialMediaIcons } from "./constants";
import BlueStar from "../../../assets/Podcast/Blue-Star.svg";
import WhiteStar from "../../../assets/Podcast/WhiteStar.svg";
// import React from 're.act';

function SocialIcon({ icon, alt }) {
  return (
    <a href="#" className="flex items-center justify-center">
      <img src={icon} alt={alt} className="w-full h-full" />
    </a>
  );
}

export function Hero() {
  const rating = 4; // Adjust the rating dynamically if needed

  return (
    <div
      className="relative flex items-center justify-center min-h-screen pt-32 bg-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Blue overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: `url(${BlueLayer})` }}
      ></div>

      {/* Left shape */}
      <img
        src={LeftShape}
        alt="Left Shape"
        className="absolute left-0 transform -translate-y-1/2 top-1/2 hidden lg:block"
      />

      {/* Right shape */}
      <img
        src={RightShape}
        alt="Right Shape"
        className="absolute right-0 transform -translate-y-1/2 top-1/2 hidden lg:block"
      />

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center gap-8 px-4 mx-auto lg:flex-row lg:gap-16">
        {/* Left side - Podcast Cover */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-5/6 xs:max-w-xs sm:max-w-sm lg:max-w-lg 2xl:max-w-[650px]">
            {/* Absolute Square Border */}
            <div className="absolute -bottom-3 left-3 w-full h-full border-r border-b border-[#376489] rounded-lg"></div>

            {/* Image */}
            <img
              src={HeroImage}
              alt="Emotionally Intelligent Parenting Podcast"
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-2 text-3xl font-extrabold text-[#376489] md:text-5xl lg:text-[60px]">
            PARENTING FOR EMOTIONAL GROWTH
          </h1>
          <h2 className="mb-2 text-3xl text-[#376489] font-mognolia md:text-5xl lg:text-[60px]">
            With Stephanie Pinto
          </h2>
          <p className="mb-4 text-base text-[#274C69] font-medium md:text-lg lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla
            nec. Risus id risus rius duis quisque dignissim amet.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center mb-4 space-x-2 md:space-x-4">
            {socialMediaIcons.map((social, index) => (
              <SocialIcon key={index} icon={social.icon} alt={social.alt} />
            ))}
          </div>

          {/* Rating and Subscribe Button */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center justify-center">
              <span className="mr-1 text-base text-[#274C69] font-medium font-montserrat md:text-[20px]">
                {rating}.0
              </span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={index < rating ? BlueStar : WhiteStar}
                      alt={index < rating ? "Blue Star" : "White Star"}
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  ))}
              </div>
            </div>
            <button className="px-6 py-3 text-sm text-white transition duration-300 bg-[#376489] rounded-full hover:bg-[#274C69] md:px-10 md:text-base lg:py-[12px]">
              Subscribe now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


