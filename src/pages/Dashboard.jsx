import { useState } from "react";
import { middleImg } from "../assets";
import DountLink from "../components/dashboard/DountLink";
import DountLinkContent from "../components/dashboard/DountLinkContent";
import { dashboardDountData } from "../statics/dashboardata";
import dummydata from "../data/dummydata";
import { Link } from "react-router-dom";

function Dashboard() {
  const [hoveredItem, setHoveredItem] = useState(0);
  const [isSelected, setIsSelected] = useState(0);

  const reorderedItems = hoveredItem
    ? [
        ...dashboardDountData.filter((item) => item.id !== hoveredItem),
        dashboardDountData.find((item) => item.id === hoveredItem),
      ]
    : dashboardDountData;

  return (
    <div className="w-full flex items-center justify-center  py-[100px] ">
      <div className="dashboard-dount">
        <div className="relative w-[540px] h-[540px] mx-auto  hidden md:block">
          <svg
            className="overflow-visible"
            width="542"
            height="548"
            viewBox="0 0 542 548"
            fill="none"
          >
            {reorderedItems?.map((item, i) => {
              return (
                <DountLink
                  data={{
                    ...item,
                    onMouseEnter: () => setHoveredItem(item.id),
                    onMouseLeave: () => setHoveredItem(0),
                  }}
                  hoveredItem={hoveredItem}
                  key={item?.id}
                />
              );
            })}
          </svg>
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[290px]">
            <img className="w-[290px] h-[296px] rounded-full" src={middleImg} />
          </div>
          {dashboardDountData?.map((item, i) => {
            return (
              <DountLinkContent
                data={{
                  ...item,
                }}
                hoveredItem={hoveredItem}
                key={item?.id}
              />
            );
          })}
        </div>

        {/* Mobile View with  Dashboard */}
        <div className="section-profile">
          <ul className="section-profile-list md:hidden">
            {dummydata.myProfiles.map((data, index) => (
              <li
                key={index}
                className={`list-items ${index === isSelected ? "active" : ""}`}
              >
                <Link
                  to={data.link}
                  onClick={() => setIsSelected(index)}
                  className="item"
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="childname">{data.childname}</span>
                  <span className="name">{data.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
