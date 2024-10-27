import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import SubscribeSection from "../../components/website/SubscribeSection";


import EvolveImage from '../../assets/coaching/evolve.png'
import ParentCoachImage from '../../assets/coaching/parentcoach.png'
import CoolKidsImage from '../../assets/coaching/coolkids.png'
import EftImage from '../../assets/coaching/eft.png'


function Coaching() {
  return (
    <section className="coaching">
      <Header />
      <section className="coachingHeader">
        <h1 className="pageHeader">COACHING & PROGRAM</h1>
        <p  className="sectionHeaderText mb-[1vw]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis<br/>quisque dignissim amet.</p>
        <p  className="sectionHeaderText">Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.</p>
      </section>
      <section className="evolve">
        <div className="sectionWrapper pt-[7.26vw] pb-[7.26vw]">
          <div className="sectionContainer">
            <img src={EvolveImage} className="evolveImage mt-[3vw]"/>
            <div className="sectionContent pl-[2.943vw]">
              <h1 className="mb-[0.21vw]">Evolve</h1>
              <h2 className="mb-[0.841vw]">with Emotional<br/>Intelligence </h2>
              <h3 className="mb-[1.524vw]">Self-paced Parent Coaching</h3>
              <p className="mb-[1.366vw]">Evolve is for parents who want to develop their Emotional Intelligence,<br/>
              overcome triggers, and better understand their children’s behaviour. </p>
              <p className="mb-[1.314vw]">Access a power-packed video library of 35+ mini-lessons (5-10 min each) for<br/>
              fast, laser-focused strategies, tips and support. </p>
              <p className="mb-[1.471vw]">For a limited time, receive 2 free premium coaching sessions with Stephanie<br/>
              and a copy of her best-selling book, From Chaos to Connection</p>
              <h3 className="mb-[1.524vw]">Total value $620</h3>
              <p className="mt-[-0.105vw]">Complete the program in your own time and upgrade to include private sessions if you wish!</p>
              <button>
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="parentcoach">
      <div className="sectionWrapper pt-[139px] pb-[150px]">
        <div className="sectionContainer">
            <div className="sectionContent pr-[52px]">
              <h1 className="mb-[4.5px]">Private Parent Coaching.</h1>
              <h2 className="mb-[20px]">Exclusive 1:1 Sessions with<br/>Stephanie</h2>
              <h3 className="mb-[31px]">I got you! Work with me. </h3>
              <p className="mb-[25px]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus<br/>
              id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a<br/>
              nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem<br/>
              ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id<br/>
              risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl<br/>
              eu felis. Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla<br/>
              nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat<br/>
              elit vel a nisl eu felis. </p>
              <p className="mb-[1px]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus<br/>
              id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a<br/>
              nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem<br/>
              ipsum dolor sit amet consectetur. </p>
              <button>
                learn more
              </button>
            </div>
            <img src={ParentCoachImage} className="mt-[37px]"/>
          </div>
        </div>
      </section>
      <section className="coolkids">
        <div className="sectionWrapper pt-[145px] pb-[151px]">
          <div className="sectionContainer">
            <img src={CoolKidsImage} className="mt-[5px]"/>
            <div className="sectionContent pl-[56px]">
              <h1 className="mb-[4px] w-[110%]">Cool Kids Anxiety Program</h1>
              <h2 className="mb-[16px]">Anxiety program for<br/>children aged 7-17 years.</h2>
              <h3 className="mb-[26px]">Overcome Anxiety in children</h3>
              <p className="mb-[26px]">Cool Kids is a world-renowned, evidence-based anxiety program. Your child<br/>
              learns powerful CBT strategies to overcome generalised anxiety, separation<br/>
              anxiety, social anxiety, specific phobias, or OCD. Stephanie supports families<br/>
              in person (Sydney AUS) or on zoom (worldwide).</p>
              <p className="mb-[28px]">For a limited time, receive 2 free premium coaching sessions with Stephanie<br/>
              and a copy of her best-selling book, From Chaos to Connection</p>
              <p className="mt-[-2px]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus<br/>
              id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a<br/>
              nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit. Lorem<br/>
              ipsum dolor sit amet consectetur. </p>
              <button>
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="eft mb-[438px]">
      <div className="sectionWrapper pt-[139px] pb-[150px]">
        <div className="sectionContainer">
            <div className="sectionContent pr-[52px]">
              <h1 className="mt-[46px] mb-[4px]">EFT Tapping Sessions</h1>
              <h2 className="mb-[20px] w-[102%]">Emotional Freedom<br/>Techniques (EFT) or Tapping</h2>
              <h3 className="mb-[30px]">Free 30 min zoom consult</h3>
              <p className="mb-[26px]">This is for parents who seek more peace, more self-acceptance, and more<br/>
              balance in their lives.</p>
              <p className="mb-[26px]">Emotional Freedom Techniques (EFT) or Tapping is an effective and<br/>
              evidence-based practice that rapidly processes and releases strong emotions<br/>
              such as frustration, anxiety, and even pain.</p>
              <p className="mb-[1px]">It’s also a powerful technique that helps parents overcome anger, triggers<br/>
              and stress.</p>
              <button>
                apply now
              </button>
            </div>
            <img src={EftImage} className="ml-[-20px] mt-[11px]"/>
          </div>
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </section>
  );
}

export default Coaching;
