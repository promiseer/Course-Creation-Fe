import { Link } from "react-router-dom";
import { award1, award2 } from "../../assets";

import Icons from "../Icons";

function Footer() {
  return (
    <section className="bg-white">
      <section className="flex flex-col md:flex-row py-20 md:py-10 items-start justify-between gap-7 md:gap-5 cContainer p-8 md:p-2">
        {/* Logo and Social Links */}
        <div className="md:basis-[25%] mb-5 md:mb-0">
          <img
            src={Icons.BrandLogo}
            alt="Brand Logo"
            className="md:w-[247px] w-[200px]"
          />
          <ul className="flex items-center gap-3 mt-5">
            {[
              Icons.twitter,
              Icons.facebook,
              Icons.telegram,
              Icons.youtube,
              Icons.tiktok,
              Icons.discard,
            ].map((icon, index) => (
              <li
                key={index}
                className="bg-[#376489] p-2 rounded-lg flex items-center justify-center w-[36px] h-[36px]"
              >
                <img src={icon} alt="social icon" />
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div className="md:basis-[13%] pt-4">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            About
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            {["Contact Us", "Resources", "Podcast", "Books"].map(
              (item, index) => (
                <li key={index} className="hover:underline py-1 transition-all">
                  <Link to="">{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Courses Section */}
        <div className="md:basis-[18%] pt-4">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            Courses
          </h2>
          <ul className="flex flex-col text-[#376489] gap-3 font-bold text-lg">
            {[
              "Rising Emotional Intelligent Kids",
              "Decoding & Defusing Your Child’s Challenging Behavior",
              "Supporting Anxious & Sensitive Kids",
              "Help! I’m a Shouty Parent!",
              "Emotional Intelligence & Freedom Technique",
            ].map((course, index) => (
              <li key={index} className="hover:underline py-1 transition-all">
                <Link to="">{course}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards Section */}
        <div className="md:basis-[30%] pt-4">
          <h2 className="text-2xl md:text-[28px] uppercase text-[#376489] mb-4 font-extrabold font-montserrat">
            Awards
          </h2>
          <ul className="flex items-center gap-3">
            <li>
              <img src={award1} alt="Award 1" className="w-[60px] md:w-auto" />
            </li>
            <li>
              <img src={award2} alt="Award 2" className="w-[60px] md:w-auto" />
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#C1989F] text-[#FAF5F0] text-center py-4 text-[20px] font-semibold">
        © 2024 Stephanie Pinto. All rights reserved.
      </div>
    </section>
  );
}

export default Footer;
