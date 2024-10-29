import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import {
  courseImgFive,
  courseImgFour,
  courseImgOne,
  courseImgSix,
  courseImgThree,
  courseImgTwo,
} from "../../assets";
import SubscribeSection from "../../components/website/SubscribeSection";
import { Link } from "react-router-dom";

function WebsiteCourses() {
  // Array of course data
  const courses = [
    {
      id: 27,
      imgSrc: courseImgOne,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          Raising Emotionally Intelligent Kids For parents
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
    {
      id: 2,
      imgSrc: courseImgTwo,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          Decoding & Defusing your child’s Challenging Behavior
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
    {
      id: 145,
      imgSrc: courseImgThree,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          Supporting Anxious and Sensitive Kids
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
    {
      id: 4,
      imgSrc: courseImgFour,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          Help! I’m a shouty parent!
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
    {
      id: 143,
      imgSrc: courseImgFive,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          EFT Tapping Emotional Intelligence & Freedom Technique
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
    {
      id: 69,
      imgSrc: courseImgSix,
      title: (
        <h2 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[24px] relative z-10 mb-3">
          Decoding & Defusing your child’s Challenging Behavior
        </h2>
      ),
      description: (
        <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
          Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.
          Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat
          elit vel a nisl eu felis.
          <br />
          <br /> Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem
          ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus
          id risus risus duis quisque dignissim amet. Tempus enim volutpat elit
          vel a nisl eu felis.
          <br /> <br /> Lorem ipsum dolor sit amet consectetur. Nibh consectetur
          mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus
          enim volutpat elit vel a nisl eu felis.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Header />
      {/* Courses Intro Section */}
      <section className="flex relative flex-col justify-center items-center px-20 py-24 w-full min-h-[436px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f45e0e740c483c15ab3bd03f845e5e9e6180e0fb96cf7f237b32085dfbc4c95?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col -mb-5 max-w-full w-[1015px] max-md:mb-2.5">
          <h1 className="self-center text-6xl font-extrabold leading-none uppercase text-slate-600 max-md:text-4xl">
            Courses
          </h1>
          <p className="mt-8 text-xl font-medium leading-7 text-cyan-900 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla
            nec. Risus id risus risus duis quisque dignissim amet.
            <br />
            Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec
            ullamcorper adipiscing faucibus blandit.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      {courses.map((course, index) => (
        <div
          key={course.id}
          className={` ${index % 2 === 0 ? "c_2" : "bg-[#F1E1E4] c_1"}`}
        >
          <div
            className={`container flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-end md:py-24 py-10 md:flex-nowrap flex-wrap-reverse relative`}
          >
            <div
              className={`md:w-[55%] w-[90%] mx-auto md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 ${
                index % 2 === 0 ? "left-[3%]" : "right-[3%]"
              } md:-translate-y-0 -translate-y-24`}
            >
              <h3 className="text-[#C1989F] font-extrabold font-montserrat md:text-[40px] text-[28px] relative z-10">
                Course - {index + 1}
              </h3>
              {course.title}
              {course.description}
              <Link
                to={`/upsale?courseId=${course.id}`}
                key={course.id + index}
              >
                <button className="uppercase bg-[#376489] relative z-10 px-10 text-[16px] md:w-[330px] w-[180px] h-[45px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="md:basis-[45%] flex items-center md:mr-6">
              <img
                src={course.imgSrc}
                alt={`course-${index + 1}`}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      ))}

      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default WebsiteCourses;
