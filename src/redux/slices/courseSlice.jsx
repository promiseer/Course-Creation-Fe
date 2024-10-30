import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courseList: []
  },
  reducers: {
    setCourses: (state, action) => {
      state.courseList = action.payload;
    }
  }
});

export const { setCourses } = courseSlice.actions;

// Selector to get a specific course by ID
export const selectCourseById = (state, courseId) =>
  state.courses.courseList.find((course) => course.id === courseId);

export default courseSlice.reducer;
