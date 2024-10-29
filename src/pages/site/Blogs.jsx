import React, { useState } from 'react';
import Footer from '../../components/shared/Footer';
import SubscribeSection from "../../components/website/SubscribeSection";
import { useNavigate } from 'react-router-dom';
import {
  blog1,
  blog3,
  blog4,
} from "../../assets";
import Header from "../../components/shared/Header";

const Blogs = () => {
  // All available blogs
  const blogs = [
    {
      id: 1,
      title: "A REMINDER TO ALL PARENTS: YOU DON’T HAVE TO GET IT ‘RIGHT’ ALL THE TIME",
      description: "This article provides insight into how to influence your child effectively.",
      date: "SEPTEMBER 6, 2023",
      imgSrc: blog1,
      theme: "rose", // use 'rose' or 'blue' based on the image theme
    },
    {
      id: 2,
      title: "WHY VALIDATING YOUR CHILD'S EMOTIONS CAN BACKFIRE (AND WHAT TO DO INSTEAD)",
      description: "Learn how others perceive your child and ways to positively shape their future.",
      date: "NOVEMBER 15, 2023",
      imgSrc: blog1,
      theme: "blue", // use 'blue' or 'rose' based on the image theme
    },
    {
      id: 3,
      title: "10 WAYS TO BRING EMOTIONAL INTELLIGENCE INTO YOUR CLASSROOM.",
      date: "SEPTEMBER 28, 2023",
      imgSrc: blog3,
      theme: "blue",
    },
    {
      id: 4,
      title: "A REMINDER TO ALL PARENTS: YOU DON’T HAVE TO GET IT ‘RIGHT’ ALL THE TIME",
      date: "SEPTEMBER 10, 2023",
      imgSrc: blog4,
      theme: "rose",
    },
    {
      id: 5,
      title: "EMBRACING THE CHAOS: USING EMOTIONAL INTELLIGENCE TO MOVE THROUGH ANGER",
      date: "AUGUST 23, 2023",
      imgSrc: blog4,
      theme: "blue",
    },
    {
      id: 6,
      title: "HOW TO HANDLE YOUR CHILD'S EMOTIONAL INTELLIGENCE",
      date: "OCTOBER 1, 2023",
      imgSrc: blog4,
      theme: "rose",
    },
    {
      id: 7,
      title: "PARENTING STRATEGIES FOR THE MODERN WORLD",
      date: "OCTOBER 15, 2023",
      imgSrc: blog4,
      theme: "blue",
    },
    {
      id: 8,
      title: "PARENTING STRATEGIES FOR THE MODERN WORLD",
      date: "OCTOBER 15, 2023",
      imgSrc: blog4,
      theme: "blue",
    }
  ];

  const [visibleblogs, setVisibleblogs] = useState(6); // Initially show 6 items
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`blogs/details/${id}`);
  };

  const loadMoreblogs = () => {
    setVisibleblogs((prevVisible) => prevVisible + 3); // Load 3 more items each time
  };

  return (
    <>
      <Header/>
      <div className="coursesbg text-center py-24">
        <div className="container md:w-[70%] mx-auto">
          <h3 className="text-[#376489] font-extrabold md:text-[60px] text-[30px] mb-4">
            BLOGS
          </h3>
          <p className="text-lg text-[#274C69] font-montserrat font-medium leading-[26px] mb-3">

          Discover insightful articles covering a range of emotional intelligence topics, including parenting tips, workplace strategies, and personal development, all designed to deepen your understanding and enhance your emotional skills.

</p>
          {/* <p className="text-lg text-[#274C69] font-montserrat font-medium leading-[26px]">
            Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.
          </p> */}
        </div>
      </div>

      {/* Main Blog Grid Section */}
      <div className="md:w-[1670px] mx-auto md:mt-[150px] mt-[50px] mb-[150px]">  {/* Increased bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-20">
          {blogs.slice(0, visibleblogs).map((blog) => (
            <div
              key={blog.id}
              className="md:w-[518px] md:h-[700px] w-[95%] h-[500px] mx-auto overflow-hidden flex flex-col justify-end cursor-pointer relative"
              style={{
                backgroundImage: `url(${blog.imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  blog.theme === 'rose'
                    ? 'bg-gradient-to-t from-[#8C6D6D] to-transparent'
                    : 'bg-gradient-to-t from-[#274C69] to-transparent'
                }`}
              ></div>

              {/* Content Overlay at the Bottom */}
              <div className="relative z-10 p-6 flex flex-col items-center text-center text-[#FAF5F0] gap-4 w-full">
                <div className="text-[12px] leading-[17.48px] font-montserrat font-medium tracking-normal  md:leading-[23.28px] md:text-[16px]">{blog.date}</div>
                <div className="md:w-[476px] md:h-[96px] w-[357px] h-[40px] text-[16px] leading-[19.5px] font-montserrat font-bold tracking-normal  md:leading-[31.28px] md:text-[26px]">{blog.title}</div>
                <button
                  className={`md:w-[250px] md:h-[40px] w-[187.5px] h-[30px] text-[12px] text-[#FAF5F0] md:text-[16px] md:leading-[18.78px] leading-[14.09px] rounded-full font-semibold font-raleway ${
                    blog.theme === 'rose' ? 'bg-[#376489]' : 'bg-[#C1989F]'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click event
                    handleReadMoreClick(blog.id);
                  }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleblogs < blogs.length && (
          <div className="flex justify-center mt-[50px]">  
            <button
              className="md:w-[330px] md:h-[60px] w-[192px] h-[50px] text-[#F1E1E4] md:text-[20px] md:leading-[23.48px] text-[16px] leading-[18.48px] rounded-full bg-[#376489] font-semibold font-raleway"
              onClick={loadMoreblogs}
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>

      {/* Added extra margin to prevent overlapping with SubscribeSection */}
      <div className="mt-[350px]"> 
        <SubscribeSection />
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
