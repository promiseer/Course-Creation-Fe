import { useEffect, useState } from "react";
import Icons from "../components/Icons.js";
import { useQuery, useMutation, useQueryClient  } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";
import { useParams, Link } from "react-router-dom";
import { decode } from "he";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export default function Lesson() {
  const apiService = useApiService();
  const { lessonId, courseId, moduleId } = useParams();

  const userCookie = cookies.get("user");
  const parsedUserCookie = userCookie ? userCookie : null;
  const queryClient = useQueryClient();

  const { data: lessonDetailsResponse, isLoading: isGettingCourseDetails } =
  useQuery({
    queryKey: ["lesson-details", `id=${lessonId}`],
    queryFn: () => apiService.get(`/ldlms/v2/sfwd-lessons/${lessonId}`),
  });

  const lessonDetails = lessonDetailsResponse?.data;

  const { data: moduleLessonsResponse, isLoading: isGettingCourseModules } =
  useQuery({
    queryKey: ["moduleLessons", `id=${moduleId}`],
    queryFn: () =>
      apiService.get(`/ldlms/v2/sfwd-lessons?module=${moduleId}&course=${courseId}`),
  });

  

   // Mutation for marking as complete
  const { mutate: markAsCompleteOrIncomplete, isLoading: isMarkingComplete } = useMutation({
    mutationFn: (data) => apiService.post(`/cct/v1/mark-lesson-complete`, data),
    //mutationFn: apiService.post(`/ldlms/v2/sfwd-courses/${courseId}/steps`),
    onSuccess: () => {
      queryClient.invalidateQueries(["lesson-details", `id=${lessonId}`]);
    },
    onError: (error) => {
      console.error("Error marking lesson as complete:", error);
    },
  });

  // Handle Mark as Complete click
  const handleMarkAsComplete = () => {
    const data = {
      course_id: courseId,
      user_id: parsedUserCookie?.id,
      module_id: moduleId,
      lesson_id: lessonId,
      status: "complete",
     }

     markAsCompleteOrIncomplete(data);
  };

  
  const findAdjacentIds= (arr, targetId) => {

    // Find the index of the object with the targetId
    const index = arr.findIndex(item => item.id == targetId);
    // If the targetId is not found, return null
    if (index === -1) {
      return { message: 'ID not found' };
    }

    // Get the previous and next IDs, if they exist
    const previousId = index > 0 ? arr[index - 1].id : null;
    const nextId = index < arr.length - 1 ? arr[index + 1].id : null;
  
    return {
      previousId: previousId,
      nextId: nextId
    };
  }
  const adjacentIds = moduleLessonsResponse?.data ? findAdjacentIds(moduleLessonsResponse?.data, lessonId) : {};
  
  return (
    <section className="section section-welcome">
      <div className="col-span-12 md:col-span-12 flex flex-col px-[15vw]">
        <div className="text-welcome">
          <span>Welcome</span>
          <span>{decode(lessonDetails?.title?.rendered || "")}</span>
        </div>
        <div className="vidio-player">
          <img src={Icons.TopVidioLine} className="topBgVidio" alt="" />
          <iframe
            width="100%"
            height="183.53"
            src="https://www.youtube.com/embed/dQw4w9WgXcdQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <img
            src={Icons.BottomVidioLine}
            className="bottomBgVidio"
            alt=""
          />
        </div>
        <div className="flex flex-row items-center justify-between gap-4 mt-5">
          <div className="w-1/4">
            {
              adjacentIds?.previousId &&
              <Link to={`/courses/${courseId}/modules/${moduleId}/lesson/${adjacentIds.previousId}`} className="btn customBtnPrimary">
                <span>Previous Lesson</span>
                <i className="bi bi-chevron-left"></i>
              </Link>
            }
          </div>
          <div className="w-1/4">
            <button onClick={handleMarkAsComplete} className="btn customBtnPrimary">
              <span>Mark as Complete</span>
            </button>
          </div>
          <div className="w-1/4">
            {
            adjacentIds?.nextId &&
            <Link to={`/courses/${courseId}/modules/${moduleId}/lesson/${adjacentIds.nextId}`} className="btn customBtnPrimary">
              <span>Next Lesson</span>
              <i className="bi bi-chevron-right"></i>
            </Link>
            }
          </div>
        </div>
      </div>
    </section>
  );
}