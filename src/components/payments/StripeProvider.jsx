// components/StripeProvider.js
import { createContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useApiService } from "../../hooks/axios";
import { useLocation } from "react-router-dom";
import { Cookies } from "react-cookie";
export const CourseContext = createContext();
const cookies = new Cookies();

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function StripeProvider({ children }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get("courseId");
  const apiService = useApiService();
  const userCookie = cookies.get("user");
  const parsedUserCookie = userCookie ? userCookie : null;

  const {
    data: courseDetailsResponse,
    isLoading: isGettingCourseDetails,
    error: courseDetailsError,
  } = useQuery({
    queryKey: ["course-details", `id=${courseId}`],
    queryFn: () => apiService.get(`/cct/v1/course/${courseId}`),
  });

  const fetchPaymentIntent = async () => {
    const response = await apiService.post("/cct/v1/create-payment-intent", {
      amount: courseDetailsResponse.data.price?.price,
      currency: "usd",
      description: courseDetailsResponse.data?.lable,
      payment_method_types: ["card"],
      user_id: parsedUserCookie?.id,
      name: parsedUserCookie?.name,
      email: parsedUserCookie?.email,
      course_id: courseId,
    });

    if (!response?.data?.clientSecret) {
      throw new Error("clientSecret not found in response");
    }

    return response.data.clientSecret;
  };

  const {
    data: clientSecret,
    isLoading: isLoadingPaymentIntent,
    error: paymentIntentError,
  } = useQuery({
    queryKey: ["clientSecret"],
    queryFn: fetchPaymentIntent,
    enabled: !!courseDetailsResponse, // Enable only if courseDetailsResponse is available
  });

  if (isGettingCourseDetails || isLoadingPaymentIntent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center space-y-4">
          <div className="spinner-border" role="status"></div>
          <p className="text-gray-700 text-lg font-medium">
            Loading payment information...
          </p>
        </div>
      </div>
    );
  }

  if (courseDetailsError) {
    return <p>Error loading course details: {courseDetailsError.message}</p>;
  }

  if (paymentIntentError) {
    return <p>Error initializing payment: {paymentIntentError.message}</p>;
  }

  if (!clientSecret) {
    return <p>Error: Client secret not available.</p>;
  }
  // Use useQuery with the fetchPaymentIntent function

  return clientSecret ? (
    <CourseContext.Provider value={courseDetailsResponse.data}>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret }}
        course={courseDetailsResponse}
      >
        {children}
      </Elements>
    </CourseContext.Provider>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-4">
        <div className="spinner-border" role="status"></div>
        <p className="text-gray-700 text-lg font-medium">
          Loading payment information...
        </p>
      </div>
    </div>
  );
}
