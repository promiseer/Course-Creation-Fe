import { Link, useLocation } from "react-router-dom";
import Icons from "../../components/Icons";

import courses from "../../data/coursedata";
import { useState } from "react";

const navigationItems = [
  { text: "Course Info", id: "AboutTheCourse" },
  { text: "Testimonials", id: "Testimonials" },
  { text: "FAQ", id: "FAQ" },
];

const lessons = [
  {
    title: "Lesson",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin lectus eu consectetur imperdiet.",
    isOpen: true,
  },
  {
    title: "Lesson",
    content: "",
    isOpen: false,
  },
  {
    title: "Lesson",
    content: "",
    isOpen: false,
  },
  {
    title: "Lesson",
    content: "",
    isOpen: false,
  },
];

const questions = [
  "Do you feel overwhelmed when your child has emotional outbursts, and wish you knew how to handle them?",
  "Are you looking to break the cycle of reactive parenting and respond more calmly to challenging behavior?",
  "Do you want to help your child understand and express their emotions in a healthy way?",
  "Are you curious about how emotionally intelligent parenting can improve your relationship with your child?",
  "Do you struggle with managing your own emotions and reactions during stressful parenting moments?",
];

const courseOutcomes = [
  "A deep understanding of emotional intelligence and how it impacts both your parenting and your child's development.",
  "Tools to respond to your child's behavior calmly and constructively, instead of reacting out of frustration or anger.",
  "Strategies to teach your child emotional intelligence skills, like self-awareness, empathy, and emotional regulation.",
  "Insights from the exclusive quiz, showing you and your child's emotional intelligence strengths and areas for improvement.",
];

const bonusResources = [
  "Learning and Unlearning Emotions Exercise",
  "Respond, Not React Poster and Exercise",
  "Adults Emotion Wheel by Stephanie Pinto",
  "Emotional Intelligence Quiz - Parents and Child versions.",
];

const courseData = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/79fb4ff36152157691b45b2c3401196121e318a0581713cc775a6d2306bd7002?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0",
    title: "FROM REACTIVE TO RESPOSIVE PARENTING",
    subtitle: "End The Yelling Today with Emotional Intelligence",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/63a5ba441f6e8d6946471b64f0e1425b320bdfbfbfac2aa9622ecf22b7da2d20?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0",
    title: "EFT TAPPING",
    subtitle: "A Rapid Emotional Relief Technique",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/460355b4be895e0d845c035c78c2ccb30a747536c4c44c1dd9697c4f5406e019?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0",
    title: "DECODING & DEFUSING COURSE",
    subtitle: "Challenging Behaviour",
    additionalContent: (
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd16f8cac9e784dda894f6963fde0add37b800965819f84274f2b4a987527abb?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
        alt=""
        className="object-contain self-end rounded-full aspect-[1.18] w-[92px] max-md:mr-2.5"
      />
    ),
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a7f7c077871f4d5ab8b441ce71ae14c5a923577494e74208f6c7da004192338f?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0",
    title: "ANXIOUS AND SENSTIVE",
    subtitle: "KIDS",
    additionalContent: (
      <>
        <div className="flex relative gap-2 items-start w-full whitespace-nowrap max-md:mr-2">
          <div className="flex-1 shrink gap-2.5 self-end px-1 py-2 mt-24 border-2 border-rose-300 border-solid min-h-[29px] max-md:mt-10">
            SUPPORTING
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab029a08350829f4a604ed984a40c3c7798852ff0657b84f49156d831b60204?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
            alt=""
            className="object-contain shrink-0 self-start max-w-full rounded-full aspect-[1.19] w-[119px]"
          />
        </div>
        <p className="flex-1 shrink gap-2.5 self-stretch p-1 mt-3 w-full text-black bg-stone-100">
          MASTER CLASS
        </p>
      </>
    ),
  },
];

const faqData = [
  {
    title: "Accordion title",
    content:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin lectus eu consectetur imperdiet.",
    isOpen: true,
  },
  {
    title: "Accordion title",
    content: "",
    isOpen: false,
  },
  {
    title: "Accordion title",
    content: "",
    isOpen: false,
  },
  {
    title: "Accordion title",
    content: "",
    isOpen: false,
  },
];

export default function CurseUpsale() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get("courseId");
  const [activeTab, setActiveTab] = useState("AboutTheCourse");

  const Course = courses.find((course) => course.id == courseId);
  // const {
  //   data: courseDetailsResponse,
  //   isLoading: isGettingCourseDetails,
  //   error: courseDetailsError,
  // } = useQuery({
  //   queryKey: ["course-details", `id=${courseId}`],
  //   queryFn: () => apiService.get(`/cct/v1/course/${courseId}`),
  // });

  // console.log(courseDetailsResponse);

  const renderTabContent = () => {

    switch (activeTab) {
      case "AboutTheCourse":
        return (
          <section>
            <h2
              data-layername="heading2→AboutThisClass"
              className="z-0 text-3xl font-semibold tracking-wider leading-none uppercase text-slate-600 max-md:max-w-full"
            >
              About The Course
            </h2>

            <main className="flex z-0 flex-wrap gap-10 justify-between items-center mt-4 w-full max-md:max-w-full">
              <img
                loading="lazy"
                src={Course?.introVid}
                alt="Lesson plan preview"
                className="object-contain self-stretch my-auto rounded-2xl aspect-[1.77] min-w-[240px] w-[794px] max-md:max-w-full"
              />
              <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[360px]">
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-semibold tracking-wide leading-none text-stone-400">
                    Browse Lesson Plan
                  </h3>
                  <div className="flex overflow-hidden flex-col mt-4 w-full text-sm tracking-normal h-[298px]">
                    {lessons.map((lesson, index) => (
                      <LessonAccordionItem
                        key={index}
                        title={lesson.title}
                        content={lesson.content}
                        isOpen={lesson.isOpen}
                      />
                    ))}
                  </div>
                </div>
                <Link to={`/checkout?courseId=${courseId}`}>
                  <button
                    className="gap-1 self-stretch px-8 py-2.5 mt-4 w-full text-sm font-medium leading-loose text-center text-white border border-solid bg-slate-600 border-slate-600 rounded-[50px] max-md:px-5"
                    aria-label="Purchase lesson plan"
                  >
                    Buy Now
                  </button>
                </Link>
              </section>
            </main>

            <main className="flex z-0 flex-wrap flex-1 gap-10 mt-12 size-full max-md:mt-10 max-md:max-w-full">
              <article className="flex flex-col grow shrink min-w-[240px] w-[724px] max-md:max-w-full">
                <p className="text-sm tracking-wide leading-6 text-slate-600 max-md:max-w-full">
                  The Introduction to Raising Emotionally Intelligent Kids
                  course was created to help parents navigate the emotional
                  complexities of raising children in today's fast-paced world.
                  This course will take you through the process of unlearning
                  outdated emotional responses, mastering calm reactions, and
                  passing on the life-changing skills of emotional intelligence
                  to your child. It combines evidence-based practices and
                  practical strategies for a modern, emotionally intelligent
                  family dynamic.
                  <br />
                  The course includes an exclusive emotional intelligence quiz
                  for both parents and children, allowing you to discover your
                  family's emotional strengths and areas for growth. Through
                  reflection and hands-on strategies, you will transform your
                  family's emotional well-being.
                </p>

                <section className="flex flex-col mt-8 w-full max-md:max-w-full">
                  <h2 className="text-lg font-semibold tracking-wide leading-none text-stone-400 max-md:max-w-full">
                    This course is for you if you answer YES to any of these
                    questions:
                  </h2>
                  <div className="flex flex-col mt-5 w-full text-sm tracking-wide leading-loose text-slate-600 max-md:max-w-full">
                    {questions.map((question, index) => (
                      <BulletPoint key={index} text={question} />
                    ))}
                  </div>
                </section>

                <section className="flex flex-col mt-8 w-full max-md:max-w-full">
                  <h2 className="text-lg font-medium tracking-wide leading-none text-stone-400 max-md:max-w-full">
                    By the end of the course you'll have:
                  </h2>
                  <div className="flex flex-col mt-5 w-full text-sm tracking-wide leading-6 text-slate-600 max-md:max-w-full">
                    {courseOutcomes.map((outcome, index) => (
                      <CourseFeature key={index} text={outcome} />
                    ))}
                  </div>
                </section>

                <section className="flex flex-col mt-8 w-full text-slate-600 max-md:max-w-full">
                  <h2 className="text-lg font-semibold tracking-wide leading-none text-stone-400 max-md:max-w-full">
                    Exclusive Bonus Resources:
                  </h2>
                  <p className="mt-5 text-sm tracking-wide leading-6 max-md:max-w-full">
                    In addition to the core modules, you'll receive valuable
                    bonus resources to further your learning. These resources
                    are designed to support you in applying emotional
                    intelligence principles in everyday parenting situations,
                    and include:
                  </p>
                  <div className="flex flex-col mt-5 w-full text-base font-medium tracking-wide max-md:max-w-full">
                    {bonusResources.map((resource, index) => (
                      <BonusResource key={index} text={resource} />
                    ))}
                  </div>
                </section>

                <CourseMetadata
                  instructor="Cameron Williamson"
                  length="24 Video Lessons (3 hours 24 minutes)"
                />
              </article>

              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4094ba2d5cd83df9b83dcebc70f3ad124fdf7726c3c812d90a0e9c1d385c6fbc?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
                alt="Course preview"
                className="object-contain grow shrink my-auto rounded-sm aspect-[0.58] min-w-[240px] w-[280px]"
              />
            </main>
          </section>
        );
      case "Testimonials":
        return (
          <main>
            <section
              data-layername="testimonials"
              className="flex flex-col justify-center  w-full bg-red-50 rounded-md max-md:mt-10 max-md:max-w-full"
            >
              <article className="flex flex-col justify-center items-center w-full rounded-md max-md:max-w-full">
                <div className="flex flex-col items-center p-10 max-w-full bg-sky-50 rounded-md w-[1116px] max-md:px-5">
                  <header className="flex flex-col items-center max-w-full text-4xl font-semibold text-center uppercase text-slate-600 w-[911px]">
                    <h2
                      data-layername="clientTestimonials"
                      className="w-full max-md:max-w-full"
                    >
                      Client Testimonials
                    </h2>
                  </header>

                  <div className="flex flex-col items-center mt-20 w-full max-md:mt-10">
                    <p
                      data-layername="testimonialText"
                      className="text-lg leading-10 text-center text-slate-600 max-md:max-w-full"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="flex flex-col items-center mt-16 max-md:mt-10">
                      <p
                        data-layername="jeniferAgustin"
                        className="text-xl font-medium text-slate-600 tracking-[8.19px]"
                      >
                        JENIFER AGUSTIN
                      </p>
                      <StarRating />
                    </div>
                  </div>
                </div>
              </article>

              <nav
                className="flex gap-4 items-start self-center mt-5"
                role="navigation"
                aria-label="Testimonial navigation"
              >
                <TestimonialDot active={true} />
                <TestimonialDot active={false} />
                <TestimonialDot active={false} />
              </nav>
            </section>
            <section className="flex flex-col w-full max-md:max-w-full">
              <header className="flex justify-between items-center w-full text-center text-slate-600 max-md:max-w-full">
                <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
                  <h2 className="self-stretch my-auto text-3xl font-semibold uppercase max-md:max-w-full">
                    More Courses in Emotional Intelligence
                  </h2>
                  <button
                    className="self-stretch my-auto text-2xl"
                    tabIndex="0"
                  >
                    See All
                  </button>
                </div>
              </header>

              <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-4 items-center w-full font-semibold text-center text-white max-md:max-w-full">
                  {courseData.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        );
      case "FAQ":
        return (
          <section
            data-layername="faQ"
            className="flex flex-col  w-full bg-red-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <h2
              data-layername="frequentlyAskedQuestion"
              className="text-3xl font-semibold text-center uppercase text-slate-600 max-md:max-w-full"
            >
              Frequently Asked Question
            </h2>
            <div
              data-layername="faQList"
              className="flex flex-col self-center p-2.5 mt-8 max-w-full text-sm tracking-normal leading-none w-[815px]"
            >
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={item.isOpen}
                />
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-wrap gap-10 justify-center items-center p-4 mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={Course?.thumbnail}
        alt="Raising EQ Kids Course illustration"
        className="object-contain grow shrink self-stretch my-auto rounded-sm aspect-[1.27] min-w-[240px] w-[698px] max-md:max-w-full"
      />
      <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[314px]">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <h1 className="text-4xl font-semibold uppercase text-slate-600 max-md:max-w-full">
            {Course?.title}
          </h1>
          <p className="mt-4 text-base text-slate-600 max-md:max-w-full">
            {Course?.description}
          </p>
        </div>
        <div className="flex flex-col justify-center items-start mt-10 w-full">
          <button className="w-full bg-newprimary  text-white py-3 rounded-full mt-4 hover:bg-blue-500 transition duration-300 disabled:opacity-50">
            Continue
          </button>
        </div>
      </article>

      <nav className="flex overflow-hidden flex-wrap gap-10 justify-center items-center mt-12 w-full text-xl font-medium tracking-wider bg-red-50 text-cyan-900 text-opacity-40 max-md:mt-10 max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={item.id}
            text={item.text}
            isActive={activeTab === item.id}
            onClick={() => setActiveTab(item.id)} // Set active tab on click
          />
        ))}
      </nav>

      <main className="tab-content">{renderTabContent()}</main>

      {/* about the course */}

      {/* Testimonial */}

      {/* FAQ */}
    </section>
  );
}

function AccordionItem({ title, content, isOpen }) {
  return isOpen ? (
    <div
      data-layername="accordionItem"
      className="flex flex-col w-full rounded-sm max-md:max-w-full"
    >
      <button
        data-layername="trigger"
        className="flex flex-wrap gap-2 items-center px-4 py-4 w-full font-semibold text-white bg-dark-rose  min-h-[54px] max-md:max-w-full"
        aria-expanded={isOpen}
      >
        <span
          data-layername="accordionTitle"
          className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full"
        >
          {title}
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/871c20b6c2cc0cf60fb848c17bcf15d8c4f39b16a7c462e7be505b05aab77192?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </button>
      <div
        data-layername="content"
        className="flex-1 shrink gap-2 self-stretch px-4 pt-1 pb-4 w-full  bg-rose    bg-opacity-60 text-cyan-900 text-opacity-80 max-md:max-w-full"
      >
        {content}
      </div>
    </div>
  ) : (
    <button
      data-layername="accordionItem"
      className="flex flex-wrap gap-2 items-center px-4 py-4 mt-2.5 w-full font-semibold text-cyan-900 rounded-sm bg-slate-400 bg-opacity-60 min-h-[54px] max-md:max-w-full"
      aria-expanded={isOpen}
    >
      <span
        data-layername="accordionTitle"
        className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full"
      >
        {title}
      </span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f51efe549847b31e7c9ac33931052e9b554d5e515874898847d2120c17baef52?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
    </button>
  );
}

export const CourseCard = ({
  imageUrl,
  title,
  subtitle,
  additionalContent,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink self-stretch my-auto rounded-none basis-0 min-w-[240px]">
      <div className="flex relative flex-col px-3.5 pt-80 pb-7 w-full rounded aspect-[0.665] shadow-[0px_8px_12px_rgba(40,40,40,0.32)] max-md:pt-24">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center w-full">
          <h3 className="flex-1 shrink gap-2.5 self-center px-1.5 py-2 max-w-full text-base bg-red-200 rounded-sm w-[213px]">
            {title}
          </h3>
          <p className="flex-1 shrink gap-2.5 self-stretch p-1 mt-3 w-full text-xs bg-slate-600">
            {subtitle}
          </p>
          {additionalContent}
        </div>
      </div>
    </article>
  );
};
export const TestimonialDot = ({ active }) => (
  <div
    className={`flex shrink-0 rounded-full h-[15px] w-[15px] ${
      active ? "bg-slate-600" : "border border-solid border-slate-600"
    }`}
    role="button"
    tabIndex={0}
    aria-label={active ? "Current testimonial" : "View this testimonial"}
  />
);
export const StarRating = () => (
  <div className="flex gap-4 items-start mt-5">
    {[1, 2, 3, 4, 5].map((star) => (
      <img
        key={star}
        loading="lazy"
        src={Icons.fullstar}
        alt=""
        className="object-contain shrink-0 w-5 aspect-square"
      />
    ))}
  </div>
);

export const NavigationItem = ({ text, isActive, onClick }) => (
  <button
    className={`gap-2.5 self-stretch p-2 my-auto whitespace-nowrap hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
      isActive ? "text-cyan-700 font-semibold" : "text-cyan-900"
    }`}
    tabIndex={0}
    onClick={onClick}
  >
    {text}
  </button>
);

function LessonAccordionItem({ title, content, isOpen }) {
  return (
    <div className={`flex flex-col w-full rounded-sm ${isOpen ? "" : "mt-3"}`}>
      <div
        role="button"
        tabIndex={0}
        className="flex gap-2 items-center px-4 py-4 w-full font-medium leading-none whitespace-nowrap min-h-[54px]"
        style={{
          backgroundColor: isOpen ? "#94a3b8" : "rgb(148 163 184 / 0.6)",
          color: isOpen ? "white" : "#164e63",
        }}
      >
        <div className="flex-1 shrink self-stretch my-auto basis-0">
          {title}
        </div>
        <img
          loading="lazy"
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/fd2137e69a377990afe52718cec0ac4e75b8ba49fd260b16f2e70d42de169254?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/aed66f04089a058ddb56da89892ef65be59203f7b9ffef3d759e2b1f97c51492?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
          }
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      </div>
      {isOpen && (
        <div className="flex-1 shrink gap-2 self-stretch px-4 pt-1 pb-4 w-full leading-5 bg-stone-300 bg-opacity-60 text-cyan-900 text-opacity-80">
          {content}
        </div>
      )}
    </div>
  );
}

function BulletPoint({ text }) {
  return (
    <div className="flex flex-wrap gap-2 items-center mt-4 max-md:max-w-full">
      <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-full bg-stone-400 fill-stone-400" />
      <div className="self-stretch my-auto max-md:max-w-full">{text}</div>
    </div>
  );
}

function CourseFeature({ text }) {
  return (
    <div className="flex flex-wrap gap-2 items-center mt-4 w-full max-md:max-w-full">
      <div className="flex shrink-0 self-stretch my-auto w-2 h-2 rounded-full bg-stone-400 fill-stone-400" />
      <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
        {text}
      </div>
    </div>
  );
}

function BonusResource({ text }) {
  return (
    <div className="flex-1 shrink gap-2 self-stretch mt-4 w-full max-md:max-w-full">
      {text}
    </div>
  );
}

function CourseMetadata({ instructor, length }) {
  return (
    <div className="flex flex-col mt-8 w-full text-sm tracking-wide text-slate-600 max-md:max-w-full">
      <div className="flex gap-2 items-center self-start py-0.5">
        <span className="self-stretch my-auto">Instructor:</span>
        <span className="self-stretch my-auto font-semibold">{instructor}</span>
      </div>
      <div className="flex flex-wrap gap-2 items-center py-0.5 mt-3 w-full max-md:max-w-full">
        <span className="self-stretch my-auto">Class Length:</span>
        <span className="self-stretch my-auto font-semibold">{length}</span>
      </div>
    </div>
  );
}
