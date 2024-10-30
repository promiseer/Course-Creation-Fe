import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import AboutImage from "../../assets/speaker/about.png";
import StephanieImage from "../../assets/speaker/stephanie.png";
import SubscribeSection from "../../components/website/SubscribeSection";
import Award1Image from "../../assets/speaker/award1.png";
import Award2Image from "../../assets/speaker/award2.png";
import Award3Image from "../../assets/speaker/award3.png";
import Award4Image from "../../assets/speaker/award4.png";
import headeBg from "../../assets/speaker/header_bg.png";
import headeMobBg from "../../assets/speaker/header_Mob_bg.png";
import sedonnd_bg from "../../assets/speaker/2nd_bg.png";
import stephanie_bg from "../../assets/speaker/stephanie_bg.png";
import Stephanie_Pinto_sign from "../../assets/Stephanie Pinto-sign.png";

import {
  maskLogoFive,
  maskLogoFour,
  maskLogoOne,
  maskLogoThree,
  maskLogoTwo,
  homePageHi_ImStephanie,
} from "../../assets";

function Speaking() {
  return (
    <section className="speaker">
      <Header />
      <div
        className="h-[90vh] landing flex md:hidden bg-cover bg-center bg-no-repeat items-start py-12 justify-start"
        style={{ backgroundImage: `url(${headeMobBg})` }}
      >
        <div className="text-white container text-center flex flex-col justify-center items-center gap-3 w-[90%] bg-opacity-70">
          <h1 className="font-montserrat uppercase text-[24px] font-black leading-[40px]">
            International Emotional Intelligence Speaker.{" "}
          </h1>
        </div>
      </div>

      {/* Desktop Background */}
      <div
        className=" h-[80vh] landing hidden md:flex bg-cover bg-center bg-no-repeat items-center justify-start"
        style={{ backgroundImage: `url(${headeBg})` }}
      >
        <div className="container">
          <div className="flex justify-start text-center gap-4 text-[#274C69] bg-opacity-70">
            <h1 className="font-montserrat uppercase text-[45px] font-black leading-[60px]">
              International <br /> Emotional <br />
              Intelligence <br />
              Speaker.{" "}
            </h1>
          </div>
        </div>
      </div>

      <section
        // style={{ backgroundImage: `url("${CoolKidsSessionsOver}")` }}
        className="py-10 relative bg-[#C2D5E4] flex flex-col md:flex-col lg:flex-col sm:flex-cols items-center coolkids"
      >
        <div className="block sm:hidden md:hidden lg:hidden">
          <span>{/* <img src={CoolKidImage} className="w-[90%]" /> */}</span>
        </div>

        <div className="container my-6">
          <h1 className="mb-3 font-montserrat font-extrabold md:text-[34px] text-[22px] text-[#C1989F]">
            About
          </h1>
          <p className="text-[#274C69] text-lg font-medium leading-[24.1px] font-montserrat mt-3">
            Is the Emotional Intelligence Mentor for Australia’s Nurture
            Parenting Magazine and regularly contributes to publications such as
            Guide & Grow, Kiddiepedia, and Teachers Matter.
            <br /> <br />
            She has received awards for her work from prestigious organisations
            such as Women With Altitude and Ausmumpreneur.
            <br />
            Stephanie is also an accredited paediatric anxiety therapist and
            former speech pathologist.
            <br />
          </p>
        </div>
        <div className=" absolute right-1 top-[30%] hidden sm:block md:block lg:block">
          <img src={AboutImage} className="h-[50vh]" />
        </div>
      </section>

      <div className=" bg-cover bg-no-repeat c_2 bg-[#F1E1E4]">
        <div className="container flex items-center justify-start md:py-28 md:pt-28 pt-5 md:flex-nowrap flex-wrap-reverse relative ">
          <div
            className="md:w-[55%] w-[90%] mx-auto md:absolute z-50 p-7 md:px-20 right-[3%] md:-translate-y-0 -translate-y-20"
            style={{ backgroundImage: `url("${stephanie_bg}")` }}
          >
            <div>
              <img className="h-16" alt="sign" src={Stephanie_Pinto_sign} />

              <p className="font-montserrat mb-4">
                Is the Emotional Intelligence Mentor for Australia’s Nurture
                Parenting
                <br />
                Magazine and regularly contributes to publications such as Guide
                & Grow,
                <br />
                Kiddiepedia, and Teachers Matter.{" "}
              </p>
              <p className="font-montserrat mb-4">
                She has received awards for her work from prestigious
                organisations such as
                <br />
                Women With Altitude and Ausmumpreneur.
              </p>
              <p className=" font-montserrat s">
                Stephanie is also an accredited paediatric anxiety therapist and
                former
                <br />
                speech pathologist.
              </p>

              <h3 className="font-mognolia text-3xl mt-4 text-[#376489] leading-[28px]">
                She lives in Sydney, Australia
                <br />
                with her family.{" "}
              </h3>
            </div>
          </div>
          <div className="md:basis-[45%] flex items-center">
            <img src={StephanieImage} alt="" className=" mx-auto" />
          </div>
        </div>
      </div>

      <div className="bg-textPrimary w-full h-[200px] space-x-3 logosSec flex items-center justify-between px-12 overflow-y-hidden">
        <img src={maskLogoOne} alt="" />
        <img src={maskLogoTwo} alt="" />
        <img src={maskLogoThree} alt="" />
        <img src={maskLogoFour} alt="" />
        <img src={maskLogoFive} alt="" />
      </div>

      <section className="md:py-20 md:px-20 py-4 px-4">
        <h1 className="text-4xl font-bold text-center mx-8 my-10 text-dark-rose">
          AWARDS
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex justify-center">
            <img src={Award1Image} alt="Award 1" className=" h-auto" />
          </div>
          <div className="flex justify-center">
            <img src={Award2Image} alt="Award 2" className=" h-auto" />
          </div>
          <div className="flex justify-center">
            <img src={Award3Image} alt="Award 3" className=" h-auto" />
          </div>
          <div className="flex justify-center">
            <img src={Award4Image} alt="Award 4" className=" h-auto" />
          </div>
        </div>
      </section>

      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default Speaking;
