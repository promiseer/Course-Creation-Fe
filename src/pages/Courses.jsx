import { CardCoursesPages } from "../components";
import dummydata from "../data/dummydata";

function Courses() {
  var getBackgroundColor = (row, column) => {
    // Mendefinisikan warna berdasarkan posisi
    if (column === 0) {
      return row % 2 === 0 ? "bg-newprimary" : "bg-textPrimary";
    } else {
      return row % 2 === 0 ? "bg-textPrimary" : "bg-newprimary";
    }
  };
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
        {dummydata.courses.map(
          (
            course,
            index // Set the key here
          ) => (
            <CardCoursesPages
              key={index}
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
          )
        )}
      </section>
      {/* Courses articles */}
      <section className="section section-welcome">
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
      </div>
    </>
  );
}

export default Courses;
