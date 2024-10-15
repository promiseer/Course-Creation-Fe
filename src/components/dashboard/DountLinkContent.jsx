import React from 'react';
import DashboardDonutBtn from '../elements/buttons/DashboardDonutBtn';

function DountLinkContent({ data, hoveredItem }) {
  return (
    <div
      className={`${hoveredItem === data?.id ? 'withbefore' : ''} absolute flex items-center justify-center pointer-events-none text-white ${data?.sizes}`}
    >
      <div className="px-[10px]">
        <h3
          className={`leading-5  text-center ${
            hoveredItem === data?.id ? 'text-[#274C69]' : 'text-[white]'
          }`}
        >
          {data?.children}
        </h3>
        <div
          className={`transition-all overflow-hidden duration-300 ease-in-out ${
            hoveredItem === data?.id ? 'h-[50px]' : 'h-0'
          }`}
        >
          <DashboardDonutBtn />
        </div>
      </div>
    </div>
  );
}

export default DountLinkContent;
