import { useContext, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CourseContext } from "../../components/payments/StripeProvider";

const Checkout = () => {
  const stripe = useStripe();
  const courseDetails = useContext(CourseContext);

  const elements = useElements();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const productName = "Lorem ipsum dolor sit amet";
  const productPrice = "$123"; // Use a string format

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: fullName,
            email: email,
          },
        },

        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/success",
      },
    });
    console.log("error", error, paymentIntent);

    if (
      (error && error.type === "card_error") ||
      error.type === "validation_error"
    ) {
      setMessage(error.message);
    } else {
      console.log("Payment Successful:", paymentIntent);
      setMessage("");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
      <div className="text-center text-rose text-2xl font-mognolia mb-6">
        Check Out
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-bold text-sm tracking-[0] leading-5 whitespace-nowrap">
            Product Name:
          </div>

          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-sm tracking-[0] leading-5 whitespace-nowrap">
            {courseDetails?.title || productName}
          </p>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-bold text-sm tracking-[0] leading-5 whitespace-nowrap">
            Price:
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-sm tracking-[0] leading-5 whitespace-nowrap">
            <i className="bi bi-currency-dollar text-2xl">
              {courseDetails?.price?.price || productPrice}
            </i>
          </div>
        </div>

        <form id="payment-form" onSubmit={handleSubmit} className="space-y-4">
          {/* Payment Element */}
          <input
            type="text"
            className="w-full px-4 py-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full px-4 py-3 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PaymentElement id="payment-element" />

          {/* Submit Button */}
          <button
            disabled={isLoading}
            id="submit"
            className="w-full bg-newprimary  text-white py-3 rounded-full mt-4 hover:bg-blue-500 transition duration-300 disabled:opacity-50"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner border-2 border-white rounded-full w-6 h-6 border-t-transparent animate-spin mx-auto"></div>
              ) : (
                "Complete My Purchase"
              )}
            </span>
          </button>

          {/* Show any error or success messages */}
          {message && (
            <div
              id="payment-message"
              className={`text-center mt-4 ${
                message.type === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
