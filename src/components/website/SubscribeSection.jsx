import React from "react";
import Icons from "../../components/Icons";

function SubscribeSection() {
  return (
    <div className="relative">
      
      <div className="bg-[#C2D5E4] mt-60 py-20 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
          <div className="w-full mt-[18rem] md:mt-0 sm:mt-0 lg:mt-0">
            <div className="text-[#376489] flex flex-col items-center  withbeforetitle relative">
              <span className="  absolute -top-6 font-extrabold md:text-[xl] text-[34px] text-center bg-[#C2D5E4] px-4">
                Love what you're reading
              </span>
              <div className="font-mognolia font-normal md:text-[55px] text-[34px] border-1 border-[#738CA5] px-6 md:py-10 py-4 flex items-center justify-center">
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
              <button className="transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-180 uppercase absolute bottom-0 md:right-12 right-0 h-[50px] rounded-full md:w-[190px] w-[140px] flex items-center justify-center bg-[#376489] text-[#F1E1E4] font-raleway md:text-lg text-base font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute md:right-0 md:bottom-6 md:left-auto left-[50%] md:translate-x-[0] mt-0 md:mt-8 sm:mt-0 lg:mt-10 translate-x-[-50%] md:top-auto -top-[23rem] md:w-auto w-[80%]">
        <img src={Icons.subscribeSteph} alt="" className="md:w-[80%]" />
      </div>

    </div>

  );
}

export default SubscribeSection;
