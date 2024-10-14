import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { Link } from "react-router-dom";
import { decode } from "he";
import { LoadingOverlay } from "@mantine/core";
import c1 from '../assets/c1.svg';
import c2 from '../assets/c2.svg';
import hat from '../assets/hat.svg';
import checkmark from '../assets/done.svg';
import lock from '../assets/lock.svg';
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const FirstCourseCard = ({ image, title, description, progress }) => (
  <div className="relative w-full h-[390px] md:h-[550px] flex flex-col overflow-hidden transition-transform duration-300">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-[#E4C1C999]"></div>
    <div className="relative z-10 p-6">
      <h2 className="mt-[20px] font-montserrat text-[34px] md:text-[40px] font-extrabold text-[#274C69]">
        {title}
      </h2>
    </div>
    <div className="relative mt-auto bg-[#274C6999] md:h-[200px] h-[170px] md:pl-[40px] p-6 text-white flex flex-col justify-between">
      <p className="font-montserrat font-extrabold md:text-[19px] text-[14px] md:leading-[28.72px] leading-[17.68px] mb-4">
        {description}
      </p>
      {progress !== undefined && (
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[14px] font-bold font-montserrat">
              {progress}% to complete
            </p>
            <div className="flex items-center space-x-2">
              <img src={hat} alt="Hat icon" className="w-6 h-6" />
              <p className="text-sm font-bold text-white">18</p>
            </div>
          </div>
          <div className="w-full border border-white bg-[#274C6999] h-[9px]">
            <div
              className="h-[9px] bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const CourseCard = ({ image, title, description, progress, isLocked }) => (
  <div className="relative w-full h-[390px] md:h-[550px] bg-[#274C6999] overflow-hidden transition-transform duration-300">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-[#274C69] opacity-60"></div>
    <h3 className="relative font-montserrat ml-[10px] leading-[48px] text-white text-[38px] mt-2 mr-[20px] z-10">
      {title}
    </h3>
    {/* Show checkmark only if progress is 100% */}
    {progress === 100 && (
      <div className="absolute top-4 right-4 z-10">
        <img src={checkmark} alt="Checkmark" className="w-10 h-10" />
      </div>
    )}
    {isLocked && (
      <div className="absolute bottom-4 right-4 z-10">
        <img src={lock} alt="Locked" className="w-[56px] h-[56px]" />
      </div>
    )}
  </div>
);

const Courses = ({ courses }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 w-full mt-[10px] md:px-0">
      {courses.map((course, index) => (
        <div
          key={index}
          onMouseEnter={() => !course.isLocked && setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="md:w-[99.7%] w-[95%] md:mx-0 mx-auto transition-transform duration-300"
        >
          <Link to={`/courses/${course.id}`} key={course.id + index}>
            {hoveredIndex === index && !course.isLocked ? (
              <FirstCourseCard
                image={course.image || c2}
                title={course.label}
                description={
                  course.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                progress={course.progress}
              />
            ) : (
              <CourseCard
                image={course.image || c2}
                title={course.label || "Course"}
                description={
                  course.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                progress={course.progress}
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
  const userCookie = cookies.get("user");
  const parsedUserCookie = userCookie ? userCookie : null;
  const apiService = useApiService();

  const { data: courseListResponse, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => apiService.get("/cct/v1/courses"),
    onSuccess: (data) => {
      console.log("Course List Response:", data);
    }
  });

  const { data: courseAccessListResponse } = useQuery({
    queryKey: ["courses", `userId=${parsedUserCookie?.id}`],
    queryFn: () =>
      apiService.get(`/ldlms/v2/users/${parsedUserCookie?.id}/courses`),
    enabled: !!parsedUserCookie?.id,
  });

  const userCourseAccessIds =
    courseAccessListResponse?.data?.map((course) => course.id) || [];

  const courseList =
    courseListResponse?.data?.map((value) => {
      const hasAccess = userCourseAccessIds.includes(value.id);

      return {
        id: value.id,
        label: decode(value.title),
        image: value.thumbnail,
        description: value.description || "",
        isLocked: !hasAccess,
        progress: hasAccess ? value.progress || 0 : undefined,
      };
    }) || [];

  return (
    <>
      <LoadingOverlay zIndex={999} visible={isLoading} />
      <div className="h-full bg-[#FAF5F0] overflow-hidden flex flex-col justify-between pt-20">
        <div className="flex-grow bg-[#FAF5F0]">
          <div className="text-center md:h-[300px]">
            <p className="text-[40px] text-rose md:text-[50px] font-mognolia font-bold leading-[70px]">
              Courses
            </p>
            <div className="flex justify-center md:mt-[20px]">
              <p className="md:w-[1000px] w-[365px] h-[40px] text-[12px] md:text-[19px] font-medium text-[#376489] font-montserrat leading-[14px] md:leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-[34px]">
          <Courses courses={courseList || []} />
        </div>
      </div>
    </>
  );
}
