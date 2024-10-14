import { useMutation, useQueryClient } from "@tanstack/react-query"; // Import queryClient
import { useApiService } from "../hooks/axios";
import React from "react";
import next from "../assets/next.svg";

function Enroll({ courseId, userId }) {  // Ensure courseId and userId are passed as props
    const apiService = useApiService();
    const queryClient = useQueryClient(); // Initialize queryClient

    const { mutate: markAsCompleteOrIncomplete, isLoading: isMarkingComplete } = useMutation({
        mutationFn: (data) =>
            //apiService.post(`/cct/v1/mark-lesson-complete`, data),
           apiService.post(`/ldlms/v1/users/${userId}/courses?course_ids=${[courseId]}&id=${userId}`), ///ldlms/v1/users/(?P<id>[\\d]+)/courses
        onSuccess: () => {
            //queryClient.invalidateQueries(["lesson-details", { id: courseId }]);
        },
        onError: (error) => {
            console.error("Error marking lesson as complete:", error.response?.data || error.message);
        },
    });

    const handleEnrollCourse = () => {
        const data = {
            course_id: courseId,
            user_id: userId,
            status: "processing",
        };

        markAsCompleteOrIncomplete(data);
    };

    return (
        <button
            onClick={handleEnrollCourse}
            disabled={isMarkingComplete}
            className={`bg-dark-blue font-montserrat font-semibold text-[14px] md:text-[22px] text-white w-[170px] h-[30px] 
                md:w-[290px] md:h-[45px] rounded-full flex items-center justify-center gap-3 ${
                isMarkingComplete ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
            {isMarkingComplete ? "PROCESSING..." : "ENROLL NOW"}
            <img src={next} alt="Next" className="w-[8px] h-[15px] md:w-[18px] md:h-[18px]" />
        </button>
    );
}

export default Enroll;
