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

function WebsiteCourses() {
  // Array of course data
  const courses = [
    {
      id: 1,
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
      id: 3,
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
      id: 5,
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
      id: 6,
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
      <div className="coursesbg text-center py-24">
        <div className="container md:w-[70%] mx-auto">
          <h3 className="text-[#376489] font-extrabold md:text-[60px] text-[30px] mb-4">
            COURSES
          </h3>
          <p className="text-lg text-[#274C69] font-montserrat font-medium leading-[26px] mb-3">
          Whether you&apos;re looking to learn about emotional intelligence at home or in the workplace, you'll find courses on topics like parenting strategies, workplace teamwork, and personal development to enhance your emotional awareness and skills.
          </p>
          {/* <p className="text-lg text-[#274C69] font-montserrat font-medium leading-[26px]">
            Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec
            ullamcorper adipiscing faucibus blandit.
          </p> */}
        </div>
      </div>

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
              <button className="uppercase bg-[#376489] relative z-10 px-10 text-[16px] md:w-[330px] w-[180px] h-[45px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                Apply Now
              </button>
            </div>
            <div className="md:basis-[45%] flex items-center">
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
