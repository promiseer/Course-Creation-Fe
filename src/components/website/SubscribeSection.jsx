import React from "react";
import Icons from "../../components/Icons";

function SubscribeSection() {
  return (
    <div className="bg-[#C2D5E4] py-20 mt-60 subscibebg">
      <div className="cContainer relative">
        <div className="absolute md:right-0 md:bottom-3 md:left-auto left-[50%] md:translate-x-[0] translate-x-[-50%] md:top-auto -top-[23rem] md:w-auto w-[80%] ">
          <img src={Icons.subscribeSteph} alt="" className="md:w-[80%]" />
        </div>
        <div className="md:w-[50%] md:pt-0 pt-32">
          <div className="withbeforetitle relative">
            <div className="text-[#376489] font-mognolia font-normal md:text-[55px] text-[34px] border-1 border-[#738CA5] px-6 md:py-10 py-6 flex items-center justify-center">
              Subscribe for more.
            </div>
          </div>
          <p className="text-[#274C69] text-base mb-12 font-montserrat md:w-[90%] mx-auto leading-[29px] font-semibold text-center mt-4">
          Get exclusive freebies, valuable updates on upcoming events, and tips to enhance your emotional intelligence journey. We respect your inbox and promise no spam - just the insights you need to thrive at home and work.
          </p>

          <form className="flex items-center justify-center relative">
            <input
              type="text"
              className="h-[50px] bg-[#FAF5F0] px-4 rounded-full md:w-[80%] w-full placeholder:text-[#376489bf] text-lg font-semibold font-raleway outline-none"
              placeholder="Enter Email ID"
            />
            <button className="uppercase absolute bottom-0 md:right-12 right-0 h-[50px] rounded-full md:w-[190px] w-[140px] flex items-center justify-center bg-[#376489] text-[#F1E1E4] font-raleway md:text-lg text-base font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
