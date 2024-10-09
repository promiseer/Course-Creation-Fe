import { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import StudentsIcon from '../assets/stu.svg';
import playIcon from '../assets/play.svg';
import WhiteClockIcon from '../assets/whiteclock.svg';

const Card = ({
  url,
  moduleName,
  title,
  duration,
  students,
  description,
  imageSrc,
  textColor = 'text-white',
  showStudentsIcon = true,
  imageOverlayColor,
  cardOverlayColor,
  textAreaColor,
  borderColor = 'border-dark-rose',
  courseId= '',
  moduleId=''
}) => {
  const [activeTab, setActiveTab] = useState('My Courses');

  return (
    <div>
      {/* Tabs - Only visible on mobile */}
      <Link to={url}>

      {/* Card Component */}
      <div
        className={classNames(
          'relative flex flex-col md:flex-row w-full max-w-[740px] h-auto mb-4 overflow-hidden hover:border-[10px] transition-all duration-300',
          borderColor
        )}
      >
        {/* Full Card Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${cardOverlayColor} opacity-60 transition-opacity duration-300 hover:opacity-80`} />

        {/* Image Section with Overlay Play Button */}
        <div className="relative w-full h-[65vw] md:h-[171px] md:w-[230px]">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          <div className={`absolute inset-0 bg-gradient-to-t ${imageOverlayColor} opacity-60 transition-opacity duration-300 hover:opacity-80`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={playIcon} alt="Play Button" className="w-[20vw] h-[20vw] md:w-[112px] md:h-[121px]" />
          </div>
        </div>

        {/* Content Section */}
        <div className={`relative flex flex-col w-full md:h-[171px] md:w-[520px] p-4 ${textAreaColor}`}>
          {/* Module Title */}
          <div className="font-source text-[5vw] md:text-[0.8vw] tracking-13 font-bold text-white mb-1 mt-[10px] md:mt-[5px]">
            {title}
          </div>

          {/* Top Row with Module Name, Duration, and Students */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-oswald text-[6vw] md:text-[1.4vw] font-bold text-white">
              {moduleName}
            </span>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex text-white font-source leading-4 items-center">
                <img src={WhiteClockIcon} alt="Duration" className="h-[4vw] w-[4vw] md:h-[15px] md:w-[15px] mr-1" /> {duration}
              </span>
              {showStudentsIcon && (
                <span className="flex items-center text-[4vw] md:text-[14px] text-white font-bold">
                  <img src={StudentsIcon} alt="Students" className="h-[5vw] w-[5vw] md:h-[15px] md:w-[24px] mr-1" /> {students}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className={`font-source text-[4vw] md:text-[1.1vw] leading-[22px] m-0 ${textColor}`}>
            {description}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
