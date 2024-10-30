// Success.js
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-lg w-full text-center text-green">
        <h1 className="text-2xl font-semibold mb-4 text-green-600">Payment Successful!</h1>
        <p className="text-gray-700 mb-4">
          Thank you for your purchase. Your order has been processed
          successfully.
        </p>
        <p className="text-gray-600 mb-6">
          You will receive an email confirmation shortly.
        </p>
        {/* Optional: Link back to the homepage or course list */}
        <button className="bg-dark-blue font-montserrat font-semibold rounded text-white ">
        <Link
            to="/courses"
            className=" inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Return to Courses
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
