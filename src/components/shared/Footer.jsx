import { Link } from "react-router-dom";
import { award1, award2 } from "../../assets";

import Icons from "../Icons";

function Footer() {
  return (
    <section className="">
      <section className="flex md:flex-row py-20 flex-col items-start justify-between gap-7 md:flex-nowrap flex-wrap container">
        <div className="md:basis-[25%]">
          <img
            src={Icons.BrandLogo}
            alt=""
            className="md:w-[247px] w-[200px]"
          />
          <ul className="flex items-center gap-3 mt-5">
            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.twitter} alt="" />
            </li>
            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.facebook} alt="" />
            </li>
            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.telegram} alt="" />
            </li>
            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.youtube} alt="" />
            </li>
            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.tiktok} alt="" />
            </li>

            <li className="bg-[#376489] p-1 rounded-lg flex items-center justify-center size-[36px]">
              <img src={Icons.discard} alt="" />
            </li>
          </ul>
        </div>
        <div className="md:basis-[13%] pt-4">
          <h2 className="text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            ABOUT
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            <li className="hover:underline py-1 transition-all">
              <Link to="">Contact Us </Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to="">Resources</Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to="">Podcast</Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to="">Books</Link>
            </li>
          </ul>
        </div>
        <div className="md:basis-[18%] pt-4">
          <h2 className="text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            Courses
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            <li className="hover:underline py-1 transition-all">
              <Link to=""> Rising Emotional Intelligent Kids </Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to="">
                Decoding & defusing your child’s challenging behavior{" "}
              </Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to="">Supporting Anxious & Sensitive Kids</Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to=""> Help! i’m a shouty Parent!</Link>
            </li>
            <li className="hover:underline py-1 transition-all">
              <Link to=""> Emotional Intelligence & freedom technique</Link>
            </li>
          </ul>
        </div>
        <div className="md:basis-[30%] uppercase pt-4">
          <h2 className="text-[28px] text-[#376489] mb-4 font-extrabold font-montserrat">
            Awards
          </h2>
          <ul className="flex items-center gap-2">
            <li>
              <img src={award1} alt="" />{" "}
            </li>
            <li>
              <img src={award2} alt="" />{" "}
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-[#C1989F] text-[#FAF5F0] text-center py-4 text-[20px] font-semibold">
        © 2024 Stephanie Pinto. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
