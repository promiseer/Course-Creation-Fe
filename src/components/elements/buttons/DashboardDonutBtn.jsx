import React from "react";

function DashboardDonutBtn({ onClick, title = "More" }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#274C69] w-[61px] h-[29px] flex items-center justify-center rounded-[46px] text-white text-[10px] font-normal uppercase mx-auto mt-4"
    >
      {title}
    </button>
  );
}

export default DashboardDonutBtn;
