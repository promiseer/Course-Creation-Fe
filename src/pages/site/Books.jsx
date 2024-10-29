import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { Link } from 'react-router-dom';
import {
  amazon,
  austriallia,
  book,
  bookfirstsecimg,
  booksecImg,
  bookslandimg1,
  bookslandimg2,
  canada,
  uk,
  usa,
} from "../../assets/";
import SubscribeSection from "../../components/website/SubscribeSection";

function Books() {
  return (
    <section>
      <Header />
      <section>
        <div className="bookslanding flex gap-10  relative">
          <img
            src={bookslandimg2}
            alt=""
            className="block translate-y-20 !w-[30%] "
          />
          <div className="text-center md:w-[50rem] block md:py-[100px]">
            <h2 className="text-[50px]  text-[#376489] font-extrabold font-montserrat mb-1">
            AMAZON BEST SELLER


            </h2>
            <p className="text-[50px] text-[#376489] font-normal font-mognolia mb-8">
            From Chaos To Connection

            </p>
            <p className="text-[17px] font-medium leading-[29px] font-montserrat text-[#274C69] md:mt-[50px]">
            From Chaos to Connection is a practical, compassionate, thought-provoking call to action for parents. 
              <br />
              It’s time to let go of the old, outdated lessons we’ve learned about raising our children and dealing with their emotions and behaviour, and embrace the new paradigm.{" "}
              <br />
            </p>
          </div>
          <img src={bookslandimg1} alt="" className=" mb-5 !w-[30%]  " />
        </div>
        <div className="c_1 ">
          <div className="container flex items-center justify-end md:py-24 py-10 md:flex-nowrap flex-wrap-reverse relative">
            <div className="md:w-[55%] w-[90%] mx-auto md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 left-[3%] md:-translate-y-0 -translate-y-24">
              <h3 className="text-[#C1989F] font-extrabold font-montserrat md:text-[40px] text-[28px]  relative z-10">
                From <span className="text-[#376489]">Chaos</span> to
                <span className="text-[#376489]">Connection</span>
              </h3>
              <h2 className=" font-normal mt-1 text-[#376489] font-mognolia md:text-[40px] text-[24px] relative z-10 mb-3">
                My new book is here!
              </h2>
              <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
                Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi
                nulla nec. Risus id risus risus duis quisque dignissim amet.
                Tempus enim volutpat elit vel a nisl eu felis. <br />
                <br /> Leo eget donec ullamcorper adipiscing faucibus blandit.
                Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi
                nulla nec. Risus id risus risus duis quisque dignissim amet.
                Tempus enim volutpat elit vel a nisl eu felis. Lorem ipsum dolor
                sit amet consectetur. <br /> <br />
              </p>
              <p className="flex items-start text-[#376489] font-bold gap-1 text-[26px]">
                BUY NOW <img src={amazon} alt="" className="mt-[6px]" />
              </p>
              <div className="flex items-center gap-3">
                <button className="uppercase  bg-[#376489] relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10 flex items-center gap-2">
                  <img src={austriallia} alt="" />
                  Australia
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={usa} alt="" />
                  USA
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={uk} alt="" />
                  United Kingdom
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={canada} alt="" />
                  Canada
                </button>
              </div>
            </div>
            <div className="md:basis-[45%] flex items-center">
              <img src={bookfirstsecimg} alt="" className=" mx-auto" />
            </div>
          </div>
        </div>
        <div className="c_2 bg-[#F1E1E4]">
          <div className="container flex items-center justify-start md:py-28 md:pt-28 pt-5 md:flex-nowrap flex-wrap-reverse relative">
            <div className="md:w-[55%] w-[90%] mx-auto md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 right-[3%] md:-translate-y-0 -translate-y-20">
              {/* <div className="md:w-[55%] absolute z-50 bg-[#faf5f0c2] p-7 px-16 right-[5%]"> */}
              <h3 className="text-[#C1989F] font-extrabold font-montserrat md:text-[40px] text-[28px]  relative z-10">
                From <span className="text-[#376489]">CHAOS TO CONNECTION.
                </span>{" "}
              </h3>
              <h2 className=" font-normal mt-1 text-[#376489] font-mognolia md:text-[40px] text-[24px] relative z-10 mb-3">
              A much-loved and relatable read.

              </h2>
              <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
              In her ground-breaking book, Stephanie describes candid stories of her own family as well as the clients she works with. She actively throws out the unhelpful and even damaging lessons we’ve learned about emotions, such as that they are silly, childish, embarrassing and a sign of weakness.  <br />
                <br /> 
                The emotionally intelligent way of parenting discards the outdated methods with which many of us were raised (bribes, threats and punishments) and replaces them with kindness, empathy and compassionate discipline.
              </p>
              {/* <p className="flex items-start text-[#376489] font-bold gap-1 text-[26px] mt-3">
                BUY NOW <img src={amazon} alt="" className="mt-[6px]" />
              </p>
              <div className="flex items-center gap-3">
                <button className="uppercase  bg-[#376489] relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10 flex items-center gap-2">
                  <img src={austriallia} alt="" />
                  Australia
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={usa} alt="" />
                  USA
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={uk} alt="" />
                  United Kingdom
                </button>
                <button className="uppercase  bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10">
                  <img src={canada} alt="" />
                  Canada
                </button>
              </div> */}
               <Link to="https://mybook.to/FromChaostoConnection" className="flex items-start text-[#376489] font-bold gap-1 text-[26px] mt-3">
        BUY NOW <img src={amazon} alt="Amazon" className="mt-[6px]" />
      </Link>
      <div className="flex items-center gap-3">
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10 flex items-center gap-2"
        >
          <img src={austriallia} alt="Australia" />
          Australia
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={usa} alt="USA" />
          USA
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={uk} alt="UK" />
          United Kingdom
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={canada} alt="Canada" />
          Canada
        </Link>
            </div>
            </div>
            <div className="md:basis-[45%] flex items-center">
              <img src={booksecImg} alt="" className=" mx-auto" />
            </div>
          </div>
        </div>
        <div className="container booklastsec relative flex items-end py-24 my-40">
          <div className="w-[55%] ml-auto">
            <h3 className="text-[#376489] font-extrabold font-montserrat md:text-[40px] text-[28px]  relative z-10">
            ORDER YOUR COPY TODAY

            </h3>
            {/* <h2 className=" font-normal mt-1 text-[#376489] font-mognolia md:text-[40px] text-[24px] relative z-10 mb-3">
              My new book is here!
            </h2> */}
            <p className="text-[#376489] font-medium font-montserrat text-[17px] leading-[22px] relative z-10">
             
Available on Amazon worldwide.
            </p>
            <Link to="https://mybook.to/FromChaostoConnection" className="flex items-start text-[#376489] font-bold gap-1 text-[26px] mt-3">
        BUY NOW <img src={amazon} alt="Amazon" className="mt-[6px]" />
      </Link>
      <div className="flex items-center gap-3">
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10 flex items-center gap-2"
        >
          <img src={austriallia} alt="Australia" />
          Australia
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={usa} alt="USA" />
          USA
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={uk} alt="UK" />
          United Kingdom
        </Link>
        <Link 
          to="https://mybook.to/FromChaostoConnection" 
          className="uppercase bg-[#376489] flex items-center gap-2 relative z-10 px-3 text-[14px] h-[50px] font-semibold rounded-full text-[#F1E1E4] mt-10"
        >
          <img src={canada} alt="Canada" />
          Canada
        </Link>
            </div>
          </div>
          <img
            src={book}
            alt=""
            className="absolute top-[50%] translate-y-[-50%] "
          />
        </div>
        <SubscribeSection />
      </section>
      <Footer />
    </section>
  );
}

export default Books;
