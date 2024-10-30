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
import { coachingdetailheader } from "../../assets";

function CoachingDetails() {
  return (
    <section className="coachingDetail">
      <Header />
      <section style={{backgroundImage:`url("${coachingdetailheader}")`}} className=" min-h-[100vh] header">
        <div className="headerWrapper">
          <div className="headerContainer">
            <img src={MacQauireLogo} alt="" />
            <h2>Cool Kids Anxiety Program</h2>
            <h1>Overcome Anxiety in children & Teens</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla<br/>
            nec. Risus id risus risus duis quisque dignissim amet.</p>
            <div className="buttonGroup">
              <button className="buttonFilled">Download Cool Kid program</button>
              <button className="buttonOutline">Download Anxiety Fact Sheet</button>
            </div>
          </div>
        </div>

      </section>
      <section className="skills">
        <div className="skillsContainer">
          <img src={ChildSkillsImage} alt="" />
          <div className="skillsContent">
            <h1>What SKILLS WILL <span>MY CHILD<br/>
            learn?</span></h1>
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Tellus sem facilisis proin amet sit egestas purus. Urna feugiat morbi pharetra turpis enim posuere ut massa velit. Amet mattis volutpat sit leo dolor pellentesque nunc.
            </p>
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper senectus consequat. Hendrerit sed enim habitasse in.
            </p>
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper senectus consequat. Hendrerit sed enim habitasse in. Sed tempor ullamcorper adipiscing faucibus blandit. 
            </p>
          </div>
        </div>
      </section>
      <section className="coolkids">
        <div className="coolkidsContainer">
          <div className="coolkidsContent">
            <h1>Cool Kids <span>10 Sessions for<br/> Overcoming Anxiety</span></h1>
            <h2>This evidence-based program<br/>is proven to:</h2>
            <ul>
              <li>Overcome generalised anxiety, worries and fears</li>
              <li>Significantly reduce avoidance</li>
              <li>Reduce specific phobias, OCD, separation anxiety</li>
              <li>Increase confidence and reduce shyness</li>
              <li>Improve attendance at school</li>
              <li>Make homework or assignments less stressful</li>
              <li>Build deeper or wider friendships </li>
              <li>Increase participation in activities outside school</li>
              <li>It is also proven to lower family stress due to the anxiety!</li>
            </ul>
          </div>
        </div>
        <img className="coolkidsImage" src={CoolKidImage} alt="" />
      </section>

      <section className="anxiety">
        <div className="anxietyContainer">
          <h1>What sort of anxiety does <br/><span>Cool Kids treat?</span></h1>
          <p className="mb-[20px]">Any of the 5 anxiety disorders: social anxiety, separation anxiety, generalised anxiety, specific phobia, OCD.</p>
          <p>Your child does NOT have to have an anxiety diagnosis to participate. We work with children who are either diagnosed or undiagnosed - you may see your child as a perfectionist, worry-wart, highly sensitive, ‘empath’, lacking confidence, and so on. If you are concerned, we strongly encourage you to just take the first step of booking a consult with Stephanie.</p>
          <h3>What will I as a parent learn?</h3>
          <p>There is a strong parent component to the program. You will:</p>
          <div className="anxietyProgram">
            <div>
              <img src={ToolsIcon} alt="" />
              <p>Get all the tools you need to support your child using the Cool Kids skills they learn </p>
            </div>
            <div>
              <img src={TrapsIcon} alt="" />
              <p>Stop falling into the 4 common parenting traps that are maintaining your child’s anxiety </p>
            </div>
            <div>
              <img src={ConfidentIcon} alt="" />
              <p>Be confident in encouraging your child to self-manage their anxiety </p>
            </div>
            <div>
              <img src={CalmIcon} alt="" />
              <p>Know exactly how to respond calmly rather than react if your child has a moment of worry or fear </p>
            </div>
          </div>
          <div className="buttonGroup">
            <button className="buttonFilled">Download Cool Kid program</button>
            <button className="buttonOutline">Download Anxiety Fact Sheet</button>
          </div>
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default CoachingDetails;
