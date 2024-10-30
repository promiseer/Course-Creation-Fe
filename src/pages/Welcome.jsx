import React, { useState } from 'react';
import CoursePage from '../components/CourseDetails.jsx'; // Left column component (video & course content)
import CardList from '../components/CardList.jsx'; // Right column component (module list)

const CoursePagee = () => {
  const [activeTab, setActiveTab] = useState('My Courses'); // Adding state to track the active tab for mobile view

  return (
    <>
      <div className="bg-[#FAF5F0] md:min-h-screen h-full">
        {/* Wrapper for layout with proper alignment */}
        <div className="flex flex-col md:flex-row mt-[20px]">
          {/* Left Column: Course Page Content */}
          <div className="md:w-[60%] ml-[10px] md:ml-0 flex-grow">
            <CoursePage />
          </div>

          {/* Mobile Tabs Section (Visible only on mobile) */}
          {/* <div className="md:hidden flex justify-center space-x-[10vw] my-4 mb-[30px]"> */}
            {/* My Courses Tab */}
            {/* <div
              onClick={() => setActiveTab('My Courses')}
              className={`text-[4vw] leading-[20px] cursor-pointer font-oswald font-semibold ${
                activeTab === 'My Courses' ? 'text-bblue border-b-2 border-bblue' : 'text-dark-rose'
              }`}
            >
              My Courses
            </div> */}

            {/* Courses Tab */}
            {/* <div
              onClick={() => setActiveTab('Courses')}
              className={`text-[4vw] leading-[20px] font-semibold font-oswald cursor-pointer ${
                activeTab === 'Courses' ? 'text-bblue border-b-2 border-bblue' : 'text-dark-rose'
              }`}
            >
              Courses
            </div>
          </div> */}

          {/* Right Column: Card List, aligned to the right */}
          <div className="md:w-[40%] mt-[20px] md:mt-[50px] flex justify-center md:justify-end">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePagee;
