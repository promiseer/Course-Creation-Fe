import { useApiService } from "../../hooks/axios";
import React, { useState, useEffect } from "react";


import Enroll from "../Enroll.jsx"
export const CourseAccessChecker = ({ courseId, userId, children }) => {
    const [hasAccess, setHasAccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkCourseAccess = async () => {
            try {
                const apiService = useApiService();

                const response = await apiService.get(`/ldlms/v1/users/${userId}/courses?id=${userId}`); //ldlms/v2/users/3/courses?id=3

                const enrolledCourses = response.data;
                const isEnrolled = enrolledCourses.includes(parseInt(courseId));

                setHasAccess(isEnrolled);
            } catch (error) {
                console.error("Error checking course access:", error);
            } finally {
                setLoading(false);
            }
        };

        checkCourseAccess();
    }, [courseId, userId]);



    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {hasAccess ? (
                children
            ) : (
                <Enroll courseId={courseId} userId={userId} />
            )}
        </div>
    );
};

