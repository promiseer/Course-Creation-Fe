import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import MacQauireLogo from "../../assets/coachingDetails/macquaire_logo.png"
import ChildSkillsImage from "../../assets/coachingDetails/childskills.png"
import CoolKidImage from "../../assets/coachingDetails/coolkid.png"
import SubscribeSection from "../../components/website/SubscribeSection";

import ToolsIcon from "../../assets/coachingDetails/tools.png"
import TrapsIcon from "../../assets/coachingDetails/traps.png"
import ConfidentIcon from "../../assets/coachingDetails/confident.png"
import CalmIcon from "../../assets/coachingDetails/calm.png"
import { booksecImg, coachingdetailheader, CoolKidsSessionsOver, ImageWhatTopics, whatTopcis } from "../../assets";


const cehckIcon = <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.0352 21.9642C18.4049 21.9642 22.758 17.5031 22.758 11.9999C22.758 6.49681 18.4049 2.03564 13.0352 2.03564C7.66551 2.03564 3.3125 6.49681 3.3125 11.9999C3.3125 17.5031 7.66551 21.9642 13.0352 21.9642Z" fill="#C1989F" />
  <path d="M10.8728 1.20532C5.06509 1.20532 0.339844 6.04797 0.339844 12C0.339844 17.952 5.06509 22.7946 10.8728 22.7946C16.6805 22.7946 21.4058 17.952 21.4058 12C21.4058 6.04797 16.6805 1.20532 10.8728 1.20532ZM10.8728 21.1339C5.9585 21.1339 1.9603 17.0364 1.9603 12C1.9603 6.96357 5.9585 2.86604 10.8728 2.86604C15.7871 2.86604 19.7853 6.96357 19.7853 12C19.7853 17.0364 15.7871 21.1339 10.8728 21.1339Z" fill="#376489" />
  <path d="M14.5695 8.14713L9.7362 14.0914L7.12187 11.4132C7.04661 11.3361 6.95726 11.2749 6.85893 11.2331C6.7606 11.1914 6.6552 11.1699 6.54877 11.1699C6.44233 11.1699 6.33694 11.1914 6.23861 11.2331C6.14028 11.2749 6.05093 11.3361 5.97567 11.4132C5.90041 11.4903 5.84071 11.5819 5.79998 11.6827C5.75925 11.7835 5.73828 11.8915 5.73828 12.0005C5.73828 12.1096 5.75925 12.2176 5.79998 12.3184C5.84071 12.4192 5.90041 12.5108 5.97567 12.5879L8.79742 15.4797C9.04913 15.7399 9.39591 15.8861 9.75349 15.8861H9.81182C10.191 15.8683 10.5475 15.6879 10.7906 15.389L15.8129 9.2111C15.9504 9.04182 16.0167 8.82348 15.9972 8.60412C15.9776 8.38476 15.8738 8.18234 15.7087 8.0414C15.5435 7.90046 15.3304 7.83253 15.1164 7.85257C14.9024 7.8726 14.7048 7.97896 14.5673 8.14824L14.5695 8.14713Z" fill="#376489" />
</svg>

function CoachingDetails() {
  return (
    <section className="coachingDetail">
      <Header />
      <section style={{ backgroundImage: `url("${coachingdetailheader}")` }} className=" min-h-[100vh] header">
        <div className="container h-[90vh] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="flex text-center flex-col items-center gap-3 justify-center h-full ">
            <img src={MacQauireLogo} alt="logo" />
            <h2 className="font-mognolia text-4xl font-normal text-white">Cool Kids Anxiety Program</h2>
            <h1 className='text-white font-montserrat font-extrabold md:text-[34px] text-[22px]'>Overcome Anxiety in <br /> children & Teens</h1>
            <p className='text-white '>Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla<br />
              nec. Risus id risus risus duis quisque dignissim amet.</p>

            <div className="flex flex-col lg:flex-row justify-start items-center lg:space-x-3 space-y-3 lg:space-y-0 my-5">
              <button className="bg-white font-[500] flex justify-start items-center space-x-2 p-2  rounded-full text-newprimary  text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='-mb-1'>
                  Download Cool Kid program
                </span>
              </button>

              <button className="border border-white font-[500] flex justify-start items-center space-x-2 p-2  rounded-full text-white  text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className='-mb-1'>
                  Download Anxiety Fact Sheet
                </span>
              </button>

            </div>
          </div>
        </div>

      </section>
      <section className="skills">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className='flex justify-center items-center'>
            <img src={ChildSkillsImage} alt="" className='h-[75%]' />
          </div>
          <div className="gap-3 flex flex-col justify-center">
            <h1 className='text-[#C1989F] font-montserrat font-extrabold md:text-[40px] text-[22px]'>What SKILLS WILL <span className='text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]'>MY CHILD<br />
              learn?</span></h1>
            <p className="text-newprimary font-[500]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Tellus sem facilisis proin amet sit egestas purus. Urna feugiat morbi pharetra turpis enim posuere ut massa velit. Amet mattis volutpat sit leo dolor pellentesque nunc.
            </p>
            <p className="text-newprimary font-[500]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper senectus consequat. Hendrerit sed enim habitasse in.
            </p>
            <p className="text-newprimary font-[500]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper senectus consequat. Hendrerit sed enim habitasse in. Sed tempor ullamcorper adipiscing faucibus blandit.
            </p>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url("${CoolKidsSessionsOver}")` }} className="py-10 relative bg-[#C2D5E4] flex flex-col md:flex-col lg:flex-col sm:flex-cols items-center coolkids">

        <div className="block sm:hidden md:hidden lg:hidden">
          <span>
            <img src={CoolKidImage} className="w-[90%]" />
          </span>
        </div>

        <div className="container my-6">
          <div>
            <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-[#C1989F]">Cool Kids <span className="text-newprimary">10 Sessions for</span></h1>
            <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-newprimary">Overcoming Anxiety</h1>
            <h2 className="mb-3 font-mognolia text-4xl font-normal text-newprimary">This evidence-based program<br />is proven to:</h2>
            <ul className="text-sm text-newprimary">
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span> Overcome generalised anxiety, worries and fears</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Significantly reduce avoidance</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Reduce specific phobias, OCD, separation anxiety</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Increase confidence and reduce shyness</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Improve attendance at school</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Make homework or assignments less stressful</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Build deeper or wider friendships </span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Increase participation in activities outside school</span></li>
              <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>It is also proven to lower family stress due to the anxiety!</span></li>
            </ul>
          </div>
        </div>
        <div className=" absolute right-1 top-[30%] hidden sm:block md:block lg:block">
          <img src={CoolKidImage} className="h-[50vh]" />
        </div>
      </section>

      <section className="anxiety">
        <div className="container flex flex-col items-center text-center  py-10">
          <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-[#C1989F]">What sort of anxiety does</h1>
          <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-newprimary ">Cool Kids treat?</h1>
          <p className="mb-5 text-newprimary">Any of the 5 anxiety disorders: social anxiety, separation anxiety, generalised anxiety, specific phobia, OCD.</p>
          <p className="mb-5 text-newprimary">Your child does NOT have to have an anxiety diagnosis to participate. We work with children who are either diagnosed or undiagnosed - you may see your child as a perfectionist, worry-wart, highly sensitive, ‘empath’, lacking confidence, and so on. If you are concerned, we strongly encourage you to just take the first step of booking a consult with Stephanie.</p>
          <h3 className="mb-3 font-mognolia text-4xl font-normal text-newprimary">What will I as a parent learn?</h3>
          <p className="text-newprimary my-5">There is a strong parent component to the program. You will:</p>
          <div className="grid gap-10 grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 text-newprimary">
            <div className="flex flex-col items-center">
              <img src={ToolsIcon} alt="" />
              <p>Get all the tools you need to support your child using the Cool Kids skills they learn </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={TrapsIcon} alt="" />
              <p>Stop falling into the 4 common parenting traps that are maintaining your child’s anxiety </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ConfidentIcon} alt="" />
              <p>Be confident in encouraging your child to self-manage their anxiety </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={CalmIcon} alt="" />
              <p>Know exactly how to respond calmly rather than react if your child has a moment of worry or fear </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-start items-center lg:space-x-3 space-y-3 lg:space-y-0 my-5">
            <button className="bg-newprimary font-[500] flex justify-start items-center space-x-2 p-2  rounded-full text-white  text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='-mb-1'>
                Download Cool Kid program
              </span>
            </button>

            <button className="border border-newprimary font-[500] flex justify-start items-center space-x-2 p-2  rounded-full text-newprimary  text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195" stroke="#376489" stroke-width="1.5" stroke-linecap="round" />
                <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#376489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='-mb-1'>
                Download Anxiety Fact Sheet
              </span>
            </button>

          </div>
        </div>
      </section>

      <div style={{backgroundImage:`url("${whatTopcis}")`}} className=" bg-cover bg-no-repeat c_2 bg-[#F1E1E4]">
        <div className="container flex items-center justify-start md:py-28 md:pt-28 pt-5 md:flex-nowrap flex-wrap-reverse relative">
          <div className="md:w-[55%] w-[90%] mx-auto md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 right-[3%] md:-translate-y-0 -translate-y-20">
            <div>
              <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-[#C1989F]">Cool Kids <span className="text-newprimary">10 Sessions for</span></h1>
              <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-newprimary">Overcoming Anxiety</h1>
              <h2 className="mb-3 font-mognolia text-4xl font-normal text-newprimary">This evidence-based program<br />is proven to:</h2>
              <ul className="text-sm text-newprimary">
                <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span> Overcome generalised anxiety, worries and fears</span></li>
                <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Significantly reduce avoidance</span></li>
                <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Reduce specific phobias, OCD, separation anxiety</span></li>
                <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Increase confidence and reduce shyness</span></li>
                <li className="flex justify-start items-center space-x-2 mb-2 "> {cehckIcon} <span>Improve attendance at school</span></li>
              </ul>
            </div>

          </div>
          <div className="md:basis-[45%] flex items-center">
            <img src={ImageWhatTopics} alt="" className=" mx-auto" />
          </div>
        </div>
      </div>

      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default CoachingDetails;
