import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";

import { Link } from "react-router-dom";

import { decode } from "he";

import { LoadingOverlay } from "@mantine/core";
import { useCookies } from "react-cookie";

import c1 from '../assets/c1.svg'; // Sample image for the first card
import c2 from '../assets/c2.svg'; // Sample image for the second card
import c3 from '../assets/c3.svg'; // Sample image for the third card
import Navbar from '../components/navbar';
import hat from '../assets/hat.svg'; // Hat icon for the first card
import checkmark from '../assets/done.svg'; // Checkmark for completed courses
import lock from '../assets/lock.svg'; // Lock icon for locked courses


const FirstCourseCard = ({ image, title, description, progress }) => {
  return (
    <div className="relative w-[100%] h-[390px] md:w-full md:h-[550px] flex flex-col overflow-hidden">
      {/* Background image with rose tint */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[#E4C1C999]"></div>

      {/* Title at the top */}
      <div className="relative z-10 p-6">
        <h2 className="mt-[20px] font-montserrat text-[34px] md:text-[40px] font-extrabold text-[#274C69]">
          {title}
        </h2>
      </div>

      {/* Content section at the bottom */}
      <div className="relative mt-auto bg-[#274C6999] md:h-[250px] h-[170px] md:pl-[40px] p-6 text-white">
        <p className="font-montserrat md:w-[490px] md:h-[100px] font-extrabold md:text-[19px] text-[14px] md:leading-[28.72px]  leading-[17.68px] mb-4">
          {description}
        </p>

        {/* Progress bar */}
        {progress && (
          <div className="relative">
            <div className="md:w-[90%] w-[95%] border bg-[#274C6999] border-white md:mt-[80px] mt-[40px] md:h-[9px] h-[7px]">
              <div
                className="md:h-[9px] h-[7px] bg-white "
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Progress % and Hat icon - Positioned on top of the progress bar */}
            <div className="absolute top-[-30px] flex justify-between items-center w-full">
              <p className="text-[14px] font-bold font-montserrat">{progress}% to complete</p>
              {/* Hide hat in mobile view, show in larger screens */}
              <div className="hidden md:flex items-center space-x-2">
                <img src={hat} alt="Hat icon" className="w-6 h-6" />
                <p className="text-sm font-bold text-white">18</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// Course Card (Normal)
const CourseCard = ({
  image,
  title,
  courseName,
  description,
  progress,
  isComplete,
  isLocked,
  isHovered,
}) => {
  return (
    <div className="relative w-full md:h-[550px] h-[390px] bg-[#274C6999] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[#274C69] opacity-60"></div>

      {/* Title above the image */}
      <h3 className="relative font-montserrat ml-[10px] leading-[48px] text-white text-[40px] mt-2 z-10">
        {title}
      </h3>

      {/* Checkmark icon for completed courses */}
      {isComplete && (
        <div className="absolute top-4 right-4 z-10">
          <img src={checkmark} alt="Checkmark" className="w-6 h-6" />
        </div>
      )}

      {/* Progress bar - Only if course is not locked */}
      {!isLocked && progress !== undefined && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-full border border-white h-[9px]">
            <div
              className="h-[9px] bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Lock icon for locked courses */}
      {isLocked && (
        <div className="absolute bottom-4 right-4 z-10">
          <img src={lock} alt="Locked" className="w-[56px] h-[56px]" />
        </div>
      )}
    </div>
  );
};

const Courses = ({ courses }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="flex flex-wrap justify-between md:w-full w-[100%]  mt-[10px] gap-y-10 md:gap-0 px-4 md:px-0"> {/* Ensure no margin on desktop */}
      {courses.map((course, index) => (
          <div
            key={index}
            onMouseEnter={() => !course.isLocked && setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-[95%] mx-auto md:w-[33.2%]"  
          >
            <Link to={`/courses/${course.id}`} key={course.id + index}>
            {hoveredIndex === index && !course.isLocked ? (
              <FirstCourseCard
                image={course.image || c1}
                title={course.label}
                description={course.description}
                progress={course.progress}
              />
            ) : (
              <CourseCard
                image={course.image || c2}
                title={course.title || "Course"}
                courseName={course.label} // Pass the course name prop
                description={course.description}
                progress={course.progress}
                isComplete={course.isComplete}
                isLocked={course.isLocked}
              />
            )}
            </Link>
          </div>
      ))}
    </div>
  );
};

export default function CoursesPage() {
  var getBackgroundColor = (row, column) => {
    // Mendefinisikan warna berdasarkan posisi

    //NOTE: Silakan gunakan elemen semu :odd dari css saat menangani gaya bergantian.
    if (column === 0) {
      return row % 2 === 0 ? "bg-newprimary" : "bg-textPrimary";
    } else {
      return row % 2 === 0 ? "bg-textPrimary" : "bg-newprimary";
    }
  };
  const [userCookie] = useCookies(["user"]);
  const apiService = useApiService();

  const { data: courseListResponse, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => apiService.get("/cct/v1/courses"),
  });

  const { data: courseAccessListResponse } = useQuery({
    queryKey: ["courses", `userId=${userCookie.user.id}`],
    queryFn: () =>
      apiService.get(`/ldlms/v2/users/${userCookie.user.id}/courses`),
    enabled: !!userCookie.user.id,
  });

  const userCourseAccessIds =
    courseAccessListResponse?.data?.map((course) => course.id) || [];

  const courseList =
    courseListResponse?.data?.map((value, index) => {
      const hasAccess = userCourseAccessIds.includes(value.id);

      return {
        id: value.id,
        childLabel: "MODULE 1.3",
        label: decode(value.title),
        time: "1 Hour 24 Minutes",
        views: 8,
        image: value.thumbnail,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: hasAccess ? "Scheduled" : "Locked",
      };
    }) || [];

  return (
    <>
      <LoadingOverlay zIndex={999} visible={isLoading} />
      <div className="h-full bg-[#FAF5F0] overflow-hidden flex flex-col justify-between">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Content Section (Fills the remaining space above the footer) */}
        <div className="flex-grow bg-[#FAF5F0]">
          {/* Section Header */}
          <div className="text-center md:h-[300px]">
            <p className="text-[40px] text-rose md:text-[50px] font-magnolia font-bold leading-[70px]">
              Courses
            </p>
            <div className="flex justify-center md:mt-[20px]">
              <p className="md:w-[1000px] w-[365px] h-[40px] text-[12px] md:text-[19px] font-medium text-[#376489] font-montserrat leading-[14px] md:leading-[28px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation. 
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section (Bottom of the page) */}
        <div className="w-full mt-[34px]">
          <Courses courses={courseList || []} />
        </div>
      </div>
      {/* Courses articles */}
      {/* <section className="section section-welcome">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center md:min-h-[594px]">
          <div className="text-welcome">
            <span className="text-newprimary">Course Name</span>
            <span className="text-newprimary">Q&A Vault</span>
          </div>
          <form className="form-search-articles">
            <input type="search" placeholder="Search" />
            <button className="btn-search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 p-[20px] md:px-[357px]">
        {dummydata.coursesArticles.map((article, index) => {
          const row = Math.floor(index / 2);
          const column = index % 2;

          return (
            <div
              key={index}
              className={`p-4 flex flex-col text-white items-center justify-center text-center ${getBackgroundColor(
                row,
                column
              )} md:${index % 2 === 0 ? "bg-newprimary" : "bg-textPrimary"}`}
            >
              <p className="text-base font-montserrat font-[500]">
                {article.title}
              </p>
              <p className="text-base font-montserrat font-[700] mt-2">
                {article.counters} Articles
              </p>
            </div>
          );
        })}
      </section>
      <div className="my-[43px] flex items-center justify-center">
        <button className="btn-return">RETURN TO COURSE</button>
      </div> */}
    </>
  );
}
