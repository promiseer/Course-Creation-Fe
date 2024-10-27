import React from "react";
import { imgCard1 } from "../../images";

function ProdcustCard({ data }) {
  return (
    <div className="w-fit relative">
      <div>
        <img src={imgCard1} alt="" />
      </div>
      <div className="bg-[#F1E1E4] w-[90%] mx-auto  -translate-y-[20%]  pt-5 pb-4 px-3">
        <div className="relative">
          <div className="absolute -top-[4.2rem] bg-[#C1989F] w-[60%] left-[50%]  -translate-x-[50%] text-[#F1E1E4] h-[38px] flex items-center justify-center text-base font-medium">
            Episode - 40
          </div>
          <h2 className="text-[26px] font-montserrat font-bold text-textPrimary mb-2 uppercase px-3">
            Timing your Triggers with
          </h2>
          <h3 className="text-textPrimary font-mognolia text-[32px] font-normal mb-6">
            Emotional Intelligence
          </h3>
          <span className="text-newprimary text-base font-medium mb-3 block">
            With Stephanie Pinto
          </span>
          <button className="uppercase bg-[#C1989F] font-semibold rounded-full w-[90%] h-[40px] text-[#F1E1E4] mt-5">
            Listen Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProdcustCard;
