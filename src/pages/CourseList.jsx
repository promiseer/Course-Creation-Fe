import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { Link } from "react-router-dom";
import { decode } from "he";
import { LoadingOverlay } from "@mantine/core";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import hat from "../assets/hat.svg";
import checkmark from "../assets/done.svg";
import lock from "../assets/lock.svg";
import { Cookies } from "react-cookie";
import calculateCompletion from "../utils/calculatePercentage";

const cookies = new Cookies();

const FirstCourseCard = ({ image, title, description, progress }) => (
  <div className="relative w-full h-[390px] md:h-[550px] flex flex-col overflow-hidden transition-transform duration-300 text-center ">
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
    <div className="relative mt-auto bg-[#274C6999] md:h-[200px] h-[170px] md:pl-[40px] p-6 text-white flex flex-col justify-between px-2">
      <p className="font-montserrat font-extrabold md:text-[19px] text-[14px] md:leading-[28.72px] leading-[17.68px] mb-4">
        {description}
      </p>
      {progress !== undefined && (
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[14px] font-bold font-montserrat">
              {progress?.progressPercent}% to complete
            </p>
            <div className="flex items-center space-x-2">
              <img src={hat} alt="Hat icon" className="w-6 h-6" />
              <p className="text-sm font-bold text-white">
                {progress?.steps_total}
              </p>
            </div>
          </div>
          <div className="w-full border border-white bg-[#274C6999] h-[9px]">
            <div
              className="h-[9px] bg-white"
              style={{ width: `${progress?.progressPercent}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const CourseCard = ({ image, title, description, progress, isLocked }) => (
  <div className="relative w-full h-[390px] md:h-[550px] bg-[#274C6999] overflow-hidden transition-transform duration-300 text-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-[#274C69] opacity-60"></div>
    <h3 className="relative font-montserrat ml-[10px] leading-[48px] text-white text-[38px] mt-2 mr-[20px] z-10">
      {title}
    </h3>
    {/* Show checkmark only if progress is 100% */}
    {progress?.status === "completed" && (
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

  const handleMouseEnter = (index) => {
    if (!courses[index].isLocked) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleTouchStart = (index) => {
    setHoveredIndex(index);
  };

  const handleTouchEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 w-full mt-[10px] md:px-0">
      {courses.map((course, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleTouchStart(index)}
          onTouchEnd={handleTouchEnd}
          className={`md:w-[99.7%] w-[95%] md:mx-0 mx-auto transition-transform duration-300 transform ${
            hoveredIndex === index && !course.isLocked
              ? " shadow-lg active"
              : ""
          }`}
        >
          <Link to={course.isLocked?`/upsale?courseId=${course.id}`:`/courses/${course.id}`} key={course.id + index}>
          {hoveredIndex === index && !course.isLocked ? (
              <FirstCourseCard
                image={course.image || c2}
                title={course?.label}
                description={
                  course.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                price={course?.price || 0}
                progress={course.progress}
              />
            ) : (
              <CourseCard
                image={course.image || c2}
                title={course?.label || "Course"}
                description={
                  course.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
                price={course?.price || 0}
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

  const { data: courseListResponse, isLoadingCourses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => apiService.get("/cct/v1/courses/"),
  });

  const { data: courseProgressResponse, isLoading: isLoadingProgress } =
    useQuery({
      queryKey: ["course-progress"],
      queryFn: () =>
        apiService.get(
          `/ldlms/v2/users/${parsedUserCookie?.id}/course-progress`
        ),
      enabled: !!parsedUserCookie?.id,
    });

  const { data: courseAccessListResponse, isLoading: isLoadingAccess } =
    useQuery({
      queryKey: ["courses-access", `userId=${parsedUserCookie?.id}`],
      queryFn: () =>
        apiService.get(`/ldlms/v2/users/${parsedUserCookie?.id}/courses`),
      enabled: !!parsedUserCookie?.id,
    });

  const isLoading = isLoadingCourses || isLoadingProgress || isLoadingAccess;

  const getCourseProgress = (courseId) => {
    const progressData = courseProgressResponse?.data?.find(
      (progress) => progress.course === courseId
    );

    return progressData
      ? {
          status: progressData?.progress_status,
          steps_completed: progressData?.steps_completed,
          steps_total: progressData?.steps_total,
          last_step: progressData?.last_step,
          progressPercent: calculateCompletion(
            progressData?.steps_completed,
            progressData?.steps_total
          ),
        }
      : undefined;
  };

  // Helper function to check access
  const hasAccess = (courseId) => {
    return courseAccessListResponse?.data?.some(
      (course) => course.id === courseId
    );
  };

  const courseList =
    courseListResponse?.data?.map((course) => {
      const courseHasAccess = hasAccess(course.id);
      return {
        id: course.id,
        label: decode(course?.title || ""),
        image: course.thumbnail,
        description: course.description || "",
        isLocked: !courseHasAccess,
        price: course?.price?.price,
        progress: courseHasAccess ? getCourseProgress(course.id) : undefined,
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
