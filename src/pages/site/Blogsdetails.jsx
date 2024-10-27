import { useParams } from "react-router-dom";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import SubscribeSection from "../../components/website/SubscribeSection";
import { blogs } from "../../data/blogdata";

// Helper function to style the first 7 words in one color and the rest in another
const splitTitle = (title) => {
  const words = title.split(" ");
  const firstSevenWords = words.slice(0, 7).join(" ");
  const remainingWords = words.slice(7).join(" ");
  return { firstSevenWords, remainingWords };
};

const DetailsPage = () => {
  const { id } = useParams();
  
  // Find the blog by its id
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Check if the blog exists before rendering
  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { firstSevenWords, remainingWords } = splitTitle(blog.title);

  return (
    <div className="w-full">
      <Header />

      {/* Blog Section */}
      <div className="bg-[#F1E1E4]">
        <div className="md:px-[8%]  flex flex-col-reverse md:flex-row-reverse items-center justify-end md:py-24 py-10 relative">
          {/* Text Content */}
          <div className="md:w-[55%] w-[90%] md:absolute z-50 bg-[#faf5f0c2] p-7 md:px-20 md:right-[3%] md:-translate-y-0 -translate-y-24">
            <div className="text-[#274C69] md:text-[20px] md:leading-[29.1px]  text-[16px] leading-[23.28px font-montserrat font-medium mb-4">
              {blog.date}
            </div>

            {/* Title Section with dynamic colors */}
            <h2 className="font-extrabold font-montserrat md:text-[48px]  md:leading-[86px] text-[28px] leading-[34px] relative z-10 mb-3">
              <span className="text-[#C1989F]">{firstSevenWords}</span> <br />
              <span className="text-[#274C69]">{remainingWords}</span>
            </h2>

            <p 
              className="text-[#376489] py-[26px] font-medium font-montserrat text-[17px] leading-[26px] relative z-10"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />

            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center text-[#376489]">
                <span className="text-red-500 mr-2">&#10084;</span> {blog.likes}
              </div>
              <div className="flex items-center text-[#376489]">
                <span className="mr-2">&#128172;</span> {blog.comments}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:basis-[45%]  w-full md:w-[760px] flex items-center">
            <img src={blog.imgSrc} alt="blog Image" className="w-full md:w-[760px] h-auto  " />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="md:container md:mx-auto md:px-4 py-12">
        {blog.blogSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center justify-between mb-12 gap-8`}
          >
            {/* Text Section */}
            <div className={` w-full ${section.image ? "md:w-[45%]" : "w-full"}`}>
              <h4 
                className={`text-[28px]  leading-[39px] md:text-[50px] md:leading-[70.5px]  px-2  text-[#274C69] 
              ${index === 1 ? "font-montserrat text-[28px]  leading-[34px] md:text-[48px] md:leading-[86px] font-extrabold text-[#C1989F] mb-1" : "font-mognolia mb-2"}`}
              >
                {section.heading}
              </h4>
              {section.subheading && (
                <h5 className="px-2 md:text-[48px] font-extrabold text-[28px]  leading-[34px]  md:leading-[86px] font-montserrat text-[#274C69] mb-4">
                  {section.subheading}
                </h5>
              )}
              <p
                className={`px-2 text-[16px] leading-[23.28px] md:text-[20px] md:leading-[29.1px] text-[#274C69] font-montserrat font-medium
                  ${index === 1 ? "md:w-[781px]" : "w-full"}`}
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            </div>

            {/* Image Section */}
            {section.image && (
              <div className="md:w-[44%] w-[100%] flex items-center">
                <img
                  src={section.image}
                  alt="Section related"
                  className="w-full h-[400px] md:h-[800px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default DetailsPage;
