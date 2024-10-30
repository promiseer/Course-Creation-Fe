import { useEffect, useState } from "react";
import Icons from "../components/Icons.js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

  // Get course progress to check if completed lesson
  const { data: courseProgressResponse, isLoading: isGettingCourseProgress } =
    useQuery({
      queryKey: ["course-progress", { courseId, userId: parsedUserCookie?.id }], // Use object for clarity
      queryFn: () =>
        apiService.get(
          `/cct/v1/course-progress?course_id=${courseId}&user_id=${parsedUserCookie?.id}`
        ),
    });

  const lessonCompleted =
    courseProgressResponse?.data.topics[moduleId]?.[lessonId]; // Added optional chaining

  const { data: lessonDetailsResponse, isLoading: isGettingCourseDetails } =
    useQuery({
      queryKey: ["lesson-details", lessonId],
      queryFn: () => apiService.get(`/ldlms/v2/sfwd-lessons/${lessonId}`),
    });

  const lessonDetails = lessonDetailsResponse?.data;
  console.log(lessonDetails)

  const { data: moduleLessonsResponse, isLoading: isGettingCourseModules } =
    useQuery({
      queryKey: ["moduleLessons", moduleId],
      queryFn: () =>
        apiService.get(
          `/ldlms/v2/sfwd-lessons?module=${moduleId}&course=${courseId}`
        ),
    });

  // Mutation for marking as complete
  const { mutate: markAsCompleteOrIncomplete, isLoading: isMarkingComplete } =
    useMutation({
      mutationFn: (data) =>
        apiService.post(`/cct/v1/mark-lesson-complete`, data),
      onSuccess: () => {
        queryClient.invalidateQueries(["lesson-details", lessonId]);
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
    };

    markAsCompleteOrIncomplete(data);
  };

  const findAdjacentIds = (arr, targetId) => {
    const index = arr.findIndex((item) => item.id == targetId);
    if (index === -1) {
      return { message: "ID not found" };
    }

    const previousId = index > 0 ? arr[index - 1].id : null;
    const nextId = index < arr.length - 1 ? arr[index + 1].id : null;

    return {
      previousId,
      nextId,
    };
  };

  const adjacentIds = moduleLessonsResponse?.data
    ? findAdjacentIds(moduleLessonsResponse.data, lessonId)
    : {};
  const courseDetails = undefined;
  const moduleDetails = undefined;
  return (
    <section className="section section-welcome px-[1vw] sm:px-[1vw]">
      <div className="col-span-12 md:col-span-12 flex flex-col px-[1vw] sm:px-[1vw] md:px-[15vw]">
        {/* Breadcrumb Section */}
        <div className="breadcrumb flex font-mognolia text-sm  text-textPrimary mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
          <Link
            to={`/courses/${courseId}`}
            className="hover:underline truncate"
          >
            {courseDetails?.name || "Course Name"}
          </Link>
          <span>/</span>
          <Link
            to={`/courses/${courseId}/modules/${moduleId}`}
            className="hover:underline truncate"
          >
            {moduleDetails?.name || "Module Name"}
          </Link>
          <span>/</span>
        </div>
        <div className="text-welcome">
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
          <img src={Icons.BottomVidioLine} className="bottomBgVidio" alt="" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-start sm:justify-center  md:justify-between gap-4 mt-1">
          <div className=" md:w-1/4">
            {adjacentIds.previousId && (
              <Link
                to={`/courses/${courseId}/modules/${moduleId}/lesson/${adjacentIds.previousId}`}
                className="btn customBtnPrimary"
              >
                <i className="bi bi-chevron-left"></i>
                <span className="ml-2">Previous Lesson</span>
              </Link>
            )}
          </div>
          <div className=" md:w-1/4">
            {!isGettingCourseProgress &&
              (lessonCompleted ? (
                <div className="btn customBtnPrimary">
                  <span>Lesson Completed</span>
                  <span className="text-green text-[16px]">&#10003;</span>
                </div>
              ) : (
                <div
                  onClick={handleMarkAsComplete}
                  className="btn customBtnPrimary"
                >
                  <span>Mark as Complete</span>
                </div>
              ))}
          </div>
          {adjacentIds.nextId && (
            <div className=" md:w-1/4 mb-2.5">
              <Link
                to={
                  lessonCompleted
                    ? `/courses/${courseId}/modules/${moduleId}/lesson/${adjacentIds.nextId}`
                    : ""
                }
                className="btn customBtnPrimary"
              >
                <span>Next Lesson</span>
                <i className="bi bi-chevron-right ml-2"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
