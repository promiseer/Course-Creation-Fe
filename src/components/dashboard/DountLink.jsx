import React from 'react';
import { Link } from 'react-router-dom';

function DountLink({ data, hoveredItem }) {
  return (
    <Link
      className={`circle-${data?.id} transition-all duration-300 ease-in-out cursor-pointer relative z-[1] hover:z-10`}
      to={data?.link || ''}
      onMouseEnter={data?.onMouseEnter}
      onMouseLeave={data?.onMouseLeave}
    >
      <defs>
        <clipPath id={`btn-${data?.id}`}>
          <path d={data?.d} fill="#55E2EB" fillOpacity="0.6"></path>
        </clipPath>
      </defs>
      {hoveredItem === data?.id ? (
        <path
          d={data?.d}
          className="lastpath transition-all duration-300 ease-in-out"
        ></path>
      ) : null}

      <image
        className="filter grayscale"
        xlinkHref={data?.img}
        width={data?.width ? data?.width : undefined}
        height={data?.height ? data?.height : undefined}
        x={data?.x}
        y={data?.y}
        clipPath={`url(#btn-${data?.id})`}
      ></image>
      <path
        d={data?.d}
        fill="#55E2EB"
        fillOpacity="0.6"
        className="firstpath z-[1] relative"
      ></path>
    </Link>
  );
}

export default DountLink;
