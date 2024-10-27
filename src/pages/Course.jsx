import { useState } from 'react';
import CoursePage from '../components/CourseDetails.jsx'; // Left column component (video & course content)
import Card from '../components/card.jsx'; // Right column component (module list)
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { useParams } from "react-router-dom";
import { decode } from "he";
import ModuleImage1 from '../assets/v1.png'; 
import ModuleImage2 from '../assets/v2.png';
import ModuleImage3 from '../assets/v3.png';

// import { LoadingOverlay } from "@mantine/core";

export default function Course() {
  const [activeTab, setActiveTab] = useState('My Courses'); // Adding state to track the active tab for mobile view
  const [isId, setisId] = useState(1);
  const [isClassId, setisClassId] = useState(1);
  const apiService = useApiService();
  const { courseId } = useParams();

  const { data: courseModulesResponse, isLoading: isGettingCourseModules } =
    useQuery({
      queryKey: ["course-modules", `id=${courseId}`],
      queryFn: () =>
        apiService.get(`/ldlms/v2/sfwd-modules?course=${courseId}`),
    });

  const { data: courseDetailsResponse, isLoading: isGettingCourseDetails } =
    useQuery({
      queryKey: ["course-details", `id=${courseId}`],
      queryFn: () => apiService.get(`/cct/v1/courses/${courseId}`),
    });

  const courseDetails = courseDetailsResponse?.data;

  const courseModules = courseModulesResponse?.data.map((value, index) => {
    return {
      id: value?.id,
      childLabel: `MODULE ${index + 1}`,
      label: decode(value?.title?.rendered || ""),
      time: "1 Hour 24 Minutes",
      views: 8,
      image: index % 2 ? ModuleImage1 : ModuleImage2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Scheduled",
      textColor: 'text-white',
      imageOverlayColor: 'gradb',
      textAreaColor: index % 2 ? 'bg-blue' : 'bg-brown',
      borderColor: index % 2 ? 'border-brown' : 'border-dark-blue',
    };
  });
  const firstModuleId = `/courses/${courseId}/modules/${courseModules?.[0]?.id}` 

  //console.log("@@ courseDetails", courseDetails)
  return (
      <div className="bg-[#FAF5F0] md:min-h-screen h-full pt-20">
        {/* Wrapper for layout with proper alignment */}
        <div className="flex flex-col md:flex-row mt-[20px]">
          {/* Left Column: Course Page Content */}
          <div className="md:w-[60%] ml-[10px] md:ml-0 flex-grow">
            <CoursePage courseName={decode(courseDetails?.title?.rendered || "")} firstLessonId={firstModuleId} CouserTitle={"Start Course"} />
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
            </div> */}
          {/* </div> */}

          {/* Right Column: Card List, aligned to the right */}
          <div className="md:w-[40%] mt-[20px] md:mt-[50px] flex justify-center md:justify-end">
            <div className="w-full md:p-0 p-4">
              <div className="grid grid-cols-1 gap-0.1">
                {courseModules && courseModules.map((item) => (
                  <Card
                    key={item.id}
                    url={`/courses/${courseId}/modules/${item.id}`}
                    moduleName={item.label}
                    title={item.childLabel}
                    duration={item.duration}
                    students={item.students}
                    description={item.description}
                    imageSrc={item.image}
                    textColor={item.textColor}
                    imageOverlayColor={item.imageOverlayColor}
                    textAreaColor={item.textAreaColor}
                    borderColor={item.borderColor} // Pass the correct prop
                  />
                ))}
              </div>
            </div>  
          </div>
        </div>
      </div>
  );
}
