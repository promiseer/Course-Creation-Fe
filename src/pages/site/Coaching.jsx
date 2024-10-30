import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import SubscribeSection from "../../components/website/SubscribeSection";


import ParentCoachImage from '../../assets/coaching/parentcoach.png'
import CoolKidsImage from '../../assets/coaching/coolkids.png'
import EftImage from '../../assets/coaching/eft.png'
import { coachingheader, CoolKidsAnxiety, EFTTappingSessions, evolveEmotion, evolveImage, PrivateParentCoaching } from "../../assets";

function Coaching() {
  return (
    <section className="coaching">
      <Header />
      <section style={{ backgroundImage: `url("${coachingheader}")` }} className="text-center text-[#376489] text-lg flex flex-col items-center justify-center bg-no-repeat min-h-80 coachingHeader">
        <h1 className="text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]">COACHING & PROGRAM</h1>
        <p className="sectionHeaderText  mb-[1vw]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis<br />quisque dignissim amet.</p>
        <p className="sectionHeaderText">Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.</p>
      </section>
      <section className=" evolve">
        <div className="pt-[7.26vw] pb-[7.26vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
            <div className="w-full h-full flex justify-center items-center">
              <img src={evolveImage} className="evolveImage w-[90%] " />
            </div>
            <div style={{ backgroundImage: `url("${evolveEmotion}")` }} className="py-4 bg-contain bg-no-repeat bg-right  gap-4 sectionContent pl-[2.943vw]">
              <h1 className=" text-[#C1989F] font-montserrat font-extrabold md:text-[40px] text-[22px]">Evolve</h1>
              <h2 className=" text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]">with Emotional<br />Intelligence </h2>
              <h3 className="my-4 font-mognolia text-4xl font-normal text-newprimary">Self-paced Parent Coaching</h3>
              <div className="text-newprimary font-[500]">
                <p className="mb-3">Evolve is for parents who want to develop their Emotional Intelligence,<br />
                  overcome triggers, and better understand their children’s behaviour. </p>
                <p className="mb-3">Access a power-packed video library of 35+ mini-lessons (5-10 min each) for<br />
                  fast, laser-focused strategies, tips and support. </p>
                <p className="mb-3">For a limited time, receive 2 free premium coaching sessions with Stephanie<br />
                  and a copy of her best-selling book, From Chaos to Connection</p>
                <h3 className="my-4 font-mognolia text-4xl font-normal text-newprimary">Total value $620</h3>
                <p>Complete the program in your own time and upgrade to include private sessions if you wish!</p>
              </div>
              <button className=" uppercase transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 bg-[#376489] px-12 text-[16px] py-2 font-semibold rounded-full text-[#F1E1E4] mt-3">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url("${PrivateParentCoaching}")` }} className=" bg-[#F1E1E4] bg-contain bg-bottom-left bg-no-repeat parentcoach">
        <div className="container py-20">
          <div className="block sm:hidden md:hidden lg:hidden">
            <span className="mb-6 w-full h-full flex justify-center items-center">
              <img src={ParentCoachImage} className="w-[90%]" />
            </span>
          </div>
          <div className=" gap-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
            <div className=" sectionContent pr-[52px]">
              <h1 className="text-[#C1989F] font-montserrat font-extrabold md:text-[40px] text-[22px]">Private Parent Coaching.</h1>
              <h2 className="text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]">Exclusive 1:1 Sessions with<br />Stephanie</h2>
              <h3 className="my-4 font-mognolia text-4xl font-normal text-newprimary">I got you! Work with me. </h3>
              <p className="text-newprimary font-[500] mb-3">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus<br />
                id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a<br />
                nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem<br />
                ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id<br />
                risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl<br />
                eu felis. Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla<br />
                nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat<br />
                elit vel a nisl eu felis. </p>
             
              <button className=" uppercase transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 bg-[#376489] px-12 text-[16px] py-2 font-semibold rounded-full text-[#F1E1E4] mt-3">
                Learn more
              </button>
            </div>
            <div className="hidden sm:block md:block lg:block">
              <span className=" w-full h-full flex justify-center items-center">
                <img src={ParentCoachImage} className="w-[90%]" />
              </span>
            </div>

          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url("${CoolKidsAnxiety}")` }} className=" bg-no-repeat bg-right-bottom coolkids">
        <div className="sectionWrapper py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
            <div className="flex justify-center items-center">
              <img src={CoolKidsImage} className="w-[90%]" />
            </div>
            <div className="sectionContent pl-[56px]">
              <h1 className="text-[#C1989F] font-montserrat font-extrabold md:text-[40px] text-[22px]">Cool Kids Anxiety Program</h1>
              <h2 className="text-newprimary font-montserrat font-extrabold md:text-[40px] text-[22px]">Anxiety program for<br />children aged 7-17 years.</h2>
              <h3 className="my-4 font-mognolia text-4xl font-normal text-newprimary">Overcome Anxiety in children</h3>

              <p className="text-newprimary font-[500] mb-3">Cool Kids is a world-renowned, evidence-based anxiety program. Your child<br />
                learns powerful CBT strategies to overcome generalised anxiety, separation<br />
                anxiety, social anxiety, specific phobias, or OCD. Stephanie supports families<br />
                in person (Sydney AUS) or on zoom (worldwide).</p>
              <p className="text-newprimary font-[500] mb-3">For a limited time, receive 2 free premium coaching sessions with Stephanie<br />
                and a copy of her best-selling book, From Chaos to Connection</p>
              <p className="text-newprimary font-[500] mb-3">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus<br />
                id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a<br />
                nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem<br />
                ipsum dolor sit amet consectetur. </p>
              <button className=" uppercase transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 bg-[#376489] px-12 text-[16px] py-2 font-semibold rounded-full text-[#F1E1E4] mt-3">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#F1E1E4] ">
        <div className="block sm:hidden md:hidden lg:hidden">
            <span className=" w-full h-full flex justify-center items-center">
              <img src={EftImage} className="w-[90%]" />
            </span>
          </div>
        <div style={{ backgroundImage: `url("${EFTTappingSessions}")` }} className="container pt-[139px] pb-[150px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
            <div className="sectionContent pr-[52px]">
              <h1 className="text-[#C1989F] font-montserrat font-extrabold md:text-[34px] text-[22px]">EFT Tapping Sessions</h1>
              <h2 className="text-newprimary font-montserrat font-extrabold md:text-[34px] text-[22px]">Emotional Freedom<br />Techniques (EFT) or Tapping</h2>
              <h3 className="my-4 font-mognolia text-4xl font-normal text-newprimary">Free 30 min zoom consult</h3>
              <p className="text-newprimary font-[500] mb-3">This is for parents who seek more peace, more self-acceptance, and more<br />
                balance in their lives.</p>
              <p className="text-newprimary font-[500] mb-3">Emotional Freedom Techniques (EFT) or Tapping is an effective and<br />
                evidence-based practice that rapidly processes and releases strong emotions<br />
                such as frustration, anxiety, and even pain.</p>
              <p className="text-newprimary font-[500] mb-3">It’s also a powerful technique that helps parents overcome anger, triggers<br />
                and stress.</p>
              <button className=" uppercase transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 bg-[#376489] px-12 text-[16px] py-2 font-semibold rounded-full text-[#F1E1E4] mt-3">
                apply now
              </button>
            </div>
            <div className="hidden sm:block md:block lg:block">
              <span className=" w-full h-full flex justify-center items-center">
                <img src={EftImage} className="w-[90%]" />
              </span>
            </div>

          </div>
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default Coaching;
