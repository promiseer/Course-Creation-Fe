import React, { useState } from "react";
import next from "../assets/next.svg";
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { Link, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import { CourseAccessChecker } from "./access/CourseAccessChecker.jsx";
import calculateCompletion from "../utils/calculatePercentage.js";

const cookies = new Cookies();



const CoursePage = ({ courseName, firstLessonId, CouserTitle }) => {
  const apiService = useApiService();
  const { courseId, moduleId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const userCookie = cookies.get("user");
  const parsedUserCookie = userCookie ? userCookie : null;
  const userId = parsedUserCookie?.id;

  const [checklistItems, setChecklistItems] = useState([
    { label: "Checklist 1", color: "bblue", completed: false },
    { label: "Checklist 2", color: "frose", completed: false },
    { label: "Checklist 3", color: "frose", completed: false },
  ]);

  const toggleChecklistItem = (index) => {
    const updatedChecklist = [...checklistItems];
    updatedChecklist[index].completed = !updatedChecklist[index].completed;
    setChecklistItems(updatedChecklist);
  };

  const tabs = [
    { label: "CHECKLIST", index: 0 },
    { label: "WORKSHEET", index: 1 },
    { label: "RESOURCES", index: 2 },
  ];

  const { data: courseProgressResponse, isLoading: isGettingCourseDetails } =
    useQuery({
      queryKey: ["course-progress", `id=${courseId}`],
      queryFn: () =>
        apiService.get(
          `/cct/v1/course-progress?course_id=${courseId}&user_id=${parsedUserCookie?.id}`
        ),
    });

  const courseProgress = courseProgressResponse?.data;

  const progressPercent =
    (courseProgress &&
      calculateCompletion(courseProgress?.completed, courseProgress?.total)) ||
    0;
  //console.log(userId);
  return (
    <div className="w-full bg-[#FAF5F0] flex flex-col items-center px-4 md:px-0">
      {/* Header */}
      <div className="text-center md:mb-[20px] mb-[50px] w-full max-w-[890px]">
        <div className="font-normal text-rose text-[41px] font-mognolia leading-[56.4px]">
          {courseName}
        </div>
      </div>

      {/* Video and Button Section */}
      <div className="mb-[40px] w-full max-w-[890px] flex flex-col items-center">
        {/* Video Section */}
        <div className="relative w-[95%] md:w-[850px] mb-[50px]">
          {/* Overlapping Borders */}
          <div className="relative">
            <div className="absolute -top-[16px] -left-[16px]">
              {/* Outer Border */}
              <div className="absolute left-[3px] top-[2px] md:left-[0px] md:top-[0px] w-[130px] h-[90px] border-blue md:w-[170px] md:h-[130px] md:border-t-[10px] md:border-l-[10px] border-t-[8px] border-l-[7px]"></div>
              {/* Inner Border */}
              <div className="absolute left-[10px] top-[8px] md:left-[8px] md:top-[8px] w-[160px] h-[100px] md:w-[200px] md:h-[150px] md:border-t-[8px] md:border-l-[8px] border-dark-blue border-t-[8px] border-l-[6px]"></div>
            </div>
            <div className="absolute bottom-[-16px] right-[-16px]">
              {/* Outer Bottom-Right Border */}
              <div className="absolute bottom-[2px] right-[3px]  w-[130px] h-[90px] md:w-[170px] md:h-[130px] border-blue md:border-b-[10px] md:border-r-[10px] border-b-[10px] border-r-[8px]"></div>
              {/* Inner Bottom-Right Border */}
              <div className="absolute bottom-[8px] right-[10px] w-[160px] h-[100px] md:w-[200px] md:h-[150px] md:border-b-[8px] md:border-r-[8px] border-b-[10px] border-r-[6px] border-dark-blue"></div>
            </div>

            {/* Video Element */}
            <div className="relative w-full h-[200px] md:h-[340px] overflow-hidden">
              <iframe
                width="100%"
                height="100% "
                src="https://www.youtube.com/embed/dQw4w9WgXcdQ"
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Start Course Button (Centered) */}
        <div className="flex justify-center w-full">
          <CourseAccessChecker courseId={courseId} userId={userId}>
            <Link to={firstLessonId}>
              <button className="bg-dark-blue font-montserrat font-semibold text-[14px] md:text-[22px] text-white w-[170px] h-[30px] md:w-[240px] md:h-[45px] rounded-full flex items-center justify-center gap-3">
                {CouserTitle}
                <img
                  src={next}
                  alt="Next"
                  className="w-[8px] h-[15px] md:w-[18px] md:h-[18px]"
                />
              </button>
            </Link>
          </CourseAccessChecker>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full max-w-[850px] flex justify-between mb-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(tab.index)}
            className={`text-center font-oswald font-semibold text-[16px] md:text-[23px] tracking-wider cursor-pointer ${
              activeTab === tab.index
                ? "text-[#2c3e50] border-b-2 border-[#2c3e50]" // Active tab
                : "text-[#c39ea0] border-b-2 border-transparent hover:text-bblue hover:border-bblue" // Inactive tab with hover effect
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Tab Content (Dynamic) */}
      <div className="w-full max-w-[850px] mb-2">
        {activeTab === 0 && (
          <div>
            {/* Checklist Section */}
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                {/* Custom styled checkbox */}
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleChecklistItem(index)}
                  className={`appearance-none w-5 h-5 border-2 rounded-sm focus:ring-0 cursor-pointer 
                    ${
                      item.color === "bblue"
                        ? "border-bblue"
                        : "border-dark-rose"
                    }`}
                  style={{
                    backgroundColor: item.completed
                      ? "transparent"
                      : "transparent",
                    backgroundImage: item.completed
                      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${
                          item.color === "bblue" ? "%23274C69" : "%23C1989F"
                        }' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 13l4 4L19 7'%3E%3C/path%3E%3C/svg%3E")`
                      : "none",
                    backgroundPosition: "center",
                    backgroundSize: "120%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <span
                  className={`font-montserrat text-[14px] md:text-[20px] ml-3 ${
                    item.color === "bblue" ? "text-bblue" : "text-dark-rose"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <p className="font-montserrat text-[16px] text-dark-blue">
              Worksheet content goes here.
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p className="font-montserrat text-[16px] text-dark-blue">
              Resources content goes here.
            </p>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[850px] flex flex-col items-start mb-[30px]">
        <div className="font-montserrat text-bblue font-bold text-[14px] md:text-[16px] mb-2">
          {progressPercent}% Completed
        </div>
        <div className="w-full border border-bblue h-[5px] md:h-[12px]">
          <div
            className="bg-bblue h-[5px] md:h-[12px]"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
