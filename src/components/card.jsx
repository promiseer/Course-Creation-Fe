import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import StudentsIcon from '../assets/stu.svg';
import playIcon from '../assets/play.svg';
import WhiteClockIcon from '../assets/whiteclock.svg';
import { decode } from "he";
import { LoadingOverlay } from "@mantine/core";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

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
  cardOverlayColor,
  textAreaColor,
  borderColor = 'border-dark-rose',
}) => {
  const [activeTab, setActiveTab] = useState('My Courses');
  const userCookie = cookies.get("user");
  const parsedUserCookie = userCookie ? userCookie : null;
  const apiService = useApiService();

  // Fetching course data using useQuery
  const { data: courseListResponse, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => apiService.get("/ldlms/v1/sfwd-courses"),
    onSuccess: (data) => {
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
        label: decode(value?.title?.rendered||""),
        image: value.thumbnail,
        description: value.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isComplete: hasAccess,
        isLocked: !hasAccess,
        progress: hasAccess ? value.progress || 0 : undefined,
        duration: value.duration || "1 hour 24 minutes", // Default duration fallback
        students: value.students || "16", // Default students fallback
      };
    }) || [];

  return (
    <>
      <LoadingOverlay zIndex={999} visible={isLoading} />
      <div>
        {/* Wrap the card content with a Link for navigation */}
        <Link to={url}>
          {/* Card Component */}
          <div
            className={classNames(
              'relative flex flex-col md:flex-row w-full md:w-[740px] h-auto mb-3 overflow-hidden hover:border-[10px] transition-all duration-300',
              borderColor
            )}
          >
            {/* Full Card Background Overlay */}
            <div className={`absolute inset-0 ${cardOverlayColor} opacity-60 transition-opacity duration-300 hover:opacity-80`} />

            {/* Image Section with Background Color */}
            <div className="relative flex-shrink-0 w-full md:w-[230px]">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div
                className={`absolute inset-0 ${
                  textAreaColor.includes('blue') ? 'bg-gradb' : 'bg-gradr'
                } `}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={playIcon} alt="Play Button" className="w-[20vw] h-[20vw] md:w-[112px] md:h-[121px]" />
              </div>
            </div>

            {/* Content Section */}
            <div className={`relative flex flex-col w-full p-3 ${textAreaColor}`}>
              {/* Module Title */}
              <div className="font-source text-[5vw] md:text-[0.8vw] tracking-13 font-bold text-white mb-1 mt-1">
                {title}
              </div>

              {/* Module Name */}
              <div className="font-oswald text-[6vw] md:text-[1.4vw] font-bold text-white">
                {moduleName}
              </div>

              {/* Duration and Students - Right Aligned */}
              <div className="flex items-center justify-start space-x-2 mb-1 md:mt-[-2px]">
                <span className="flex text-white font-source leading-4 items-center">
                  <img src={WhiteClockIcon} alt="Duration" className="h-[4vw] w-[4vw] md:h-[15px] md:w-[15px] mr-1" /> {duration || "1 hour 24 minutes"}
                </span>
                {showStudentsIcon && (
                  <span className="flex items-center text-[4vw] md:text-[14px] text-white font-bold">
                    <img src={StudentsIcon} alt="Students" className="h-[5vw] w-[5vw] md:h-[15px] md:w-[24px] mr-1" /> {students || "16"}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`font-source text-[4vw] md:text-[1.1vw] leading-[22px] m-0 ${textColor}`}>
                {description}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
