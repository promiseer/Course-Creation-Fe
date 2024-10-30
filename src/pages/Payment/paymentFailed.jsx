import { Link } from "react-router-dom";
export default function PaymentFailed() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-lg w-full text-center">
        <p className="text-red-500 mb-4 ">Payment Failed!</p>
      </div>
      <p className="text-gray-600 mb-6">
        We regret to inform you that your payment has not been successful.
        Please attempt the payment again to ensure a successful transaction.
      </p>
      <Link
        to="/courses"
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Return to Courses
      </Link>
    </div>
  );
}
