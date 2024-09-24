import { CardCoursesPages } from "../components";
import dummydata from "../data/dummydata";

import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../hooks/axios";

import { Link } from "react-router-dom";

export default function Courses() {
  var getBackgroundColor = (row, column) => {
    // Mendefinisikan warna berdasarkan posisi

    //NOTE: Silakan gunakan elemen semu :odd dari css saat menangani gaya bergantian.
    if (column === 0) {
      return row % 2 === 0 ? "bg-newprimary" : "bg-textPrimary";
    } else {
      return row % 2 === 0 ? "bg-textPrimary" : "bg-newprimary";
    }
  };

  const apiService = useApiService();

  const { data: courseListResponse } = useQuery({
    queryKey: ["courses"],
    queryFn: () => apiService.get("/ldlms/v2/sfwd-courses"),
  });

  const courseList =
    courseListResponse?.data?.map((value) => {
      return {
        id: value.id,
        childLabel: "MODULE 1.3",
        label: value.title.rendered,
        time: "1 Hour 24 Minutes",
        views: 8,
        image: "../../public/images/mycourses/1.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "Scheduled",
      };
    }) || [];

  return (
    <>
      <section className="section section-welcome">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center ">
          <div className="text-welcome">
            <span>Courses</span>
          </div>
          <p className="text-primary-custom text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enimad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </section>
      <section className="section-courses">
        {courseList.map((course, index) => (
          <Link to={`/courses/${course.id}`}>
            <CardCoursesPages
              key={course?.id}
              images={course.image}
              title={course.label}
              status={course.status}
              description={course.description}
              boxCaptionsClass={index % 2 === 0 ? "eventclass" : "oddclass"}
              boxCaptionsClassTitle={
                course.status == "Scheduled"
                  ? "font-[800] text-newprimary"
                  : "font-normal text-white"
              }
            />
          </Link>
        ))}
      </section>
      {/* Courses articles */}
      {/* <section className="section section-welcome">
        <div className="col-span-12 md:col-span-12 flex flex-col justify-center md:min-h-[594px]">
          <div className="text-welcome">
            <span className="text-newprimary">Course Name</span>
            <span className="text-newprimary">Q&A Vault</span>
          </div>
          <form className="form-search-articles">
            <input type="search" placeholder="Search" />
            <button className="btn-search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 p-[20px] md:px-[357px]">
        {dummydata.coursesArticles.map((article, index) => {
          const row = Math.floor(index / 2);
          const column = index % 2;

          return (
            <div
              key={index}
              className={`p-4 flex flex-col text-white items-center justify-center text-center ${getBackgroundColor(
                row,
                column
              )} md:${index % 2 === 0 ? "bg-newprimary" : "bg-textPrimary"}`}
            >
              <p className="text-base font-montserrat font-[500]">
                {article.title}
              </p>
              <p className="text-base font-montserrat font-[700] mt-2">
                {article.counters} Articles
              </p>
            </div>
          );
        })}
      </section>
      <div className="my-[43px] flex items-center justify-center">
        <button className="btn-return">RETURN TO COURSE</button>
      </div> */}
    </>
  );
}
