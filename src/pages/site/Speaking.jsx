import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import AboutImage from "../../assets/speaker/about.png"
import StephanieImage from "../../assets/speaker/stephanie.png"
import SubscribeSection from "../../components/website/SubscribeSection";
import Award1Image from "../../assets/speaker/award1.png";
import Award2Image from "../../assets/speaker/award2.png";
import Award3Image from "../../assets/speaker/award3.png";
import Award4Image from "../../assets/speaker/award4.png";
import {
  maskLogoFive,
  maskLogoFour,
  maskLogoOne,
  maskLogoThree,
  maskLogoTwo,
} from "../../assets";

function Speaking() {
  return (
    <section className="speaker">
      <Header />
      <section className="header">
        <div className="headerContainer">
          <div className="titleContainer">
            <h1>International<br/>Emotional<br/>Intelligence<br/>Speaker.</h1>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="aboutContainer">
          <div className="aboutContent">
            <h1>About</h1>
            <p>Stephanie Pinto is a multi-award-winning Emotional Intelligence specialist<br/>
            and international speaker. She is the author of the best-selling book From<br/>
            Chaos to Connection, and host of the Emotionally Intelligent Parenting
            <br/>podcast.</p>
            <p>Stephanie founded the global online community Let's Raise Emotionally<br/>
            Intelligent Kids in 2019. Since then, her social media platforms have<br/>
            collectively amassed over a quarter of a million followers.</p>
            <p>She’s also the co-founder of two annual international parenting conferences</p>
            <h3>Chaos to Connection and<br/>Raising a Resilient Child.</h3>
          </div>  
        </div>
        <img src={AboutImage} className="photoArrow photoRight" alt="" />
      </section>
      <section className="about2">
        <img src={StephanieImage} className="photoArrow photoLeft" alt="" />
        <div className="aboutContainer about2Container">
          <div className="about2content">
            <h1>Stephanie <span>Pinto</span>...</h1>
            <p>Is the Emotional Intelligence Mentor for Australia’s Nurture Parenting<br/>
            Magazine and regularly contributes to publications such as Guide & Grow,<br/>
            Kiddiepedia, and Teachers Matter. </p>
            <p>She has received awards for her work from prestigious organisations such as<br/>
            Women With Altitude and Ausmumpreneur.</p>
            <p>Stephanie is also an accredited paediatric anxiety therapist and former<br/>
            speech pathologist.</p>
            <h3>She lives in Sydney, Australia 
            <br/>with her family.</h3>
          </div>  
        </div>
      </section>
      <div className="w-full h-[220px] logosSec flex items-center justify-between px-12 overflow-y-hidden">
        <img src={maskLogoOne} alt="" />
        <img src={maskLogoTwo} alt="" />
        <img src={maskLogoThree} alt="" />
        <img src={maskLogoFour} alt="" />
        <img src={maskLogoFive} alt="" />
      </div>
      <section className="awards">
        <h1>AWARDS</h1> 
        <div className="awardsList">
          <div><img src={Award1Image} alt="" /></div>
          <div><img src={Award2Image} alt="" /></div>
          <div><img src={Award3Image} alt="" /></div>
          <div><img src={Award4Image} alt="" /></div>
        </div>
        
      </section>
      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default Speaking;
