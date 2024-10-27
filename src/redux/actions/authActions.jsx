import {
  loginSuccess,
  logoutSuccess,
  setLoginError,
  clearLoginError,
} from "../slices/authSlice";
import { useApiService } from "../../hooks/axios";
import { Cookies } from "react-cookie"; // Import Cookies directly
// import { useNavigate } from 'react-router-dom'; // Assuming react-router is used for navigation

// Create a Cookies instance
const cookies = new Cookies();

// Login Action
export const login = (credentials) => async (dispatch) => {
  dispatch(clearLoginError());
  try {
    const apiService = useApiService();
    const response = await apiService.post("/jwt-auth/v1/token", credentials);

    const { token, user_display_name, user_id, user_email, user_nicename } =
      response.data;

    const setUser = {
      name: user_display_name,
      email: user_email,
      nicename: user_nicename,
      id: user_id,
    };

    // Use the cookies instance to set cookies
    cookies.set("jwtToken", token, {
      path: "/",
      secure: import.meta.env.VITE_APP_ENV === "production",
      sameSite: "Strict",
    });
    cookies.set("user", JSON.stringify(setUser), {
      path: "/",
      secure: import.meta.env.VITE_APP_ENV === "production",
      sameSite: "Strict",
    });

    dispatch(loginSuccess({ user: setUser, token }));
  } catch (error) {
    // console.error(
    //     "Login failed:",
    //     error.response ? error.response.data : error.message
    // );

    cookies.remove("jwtToken");
    cookies.remove("user");

    // Extract the message from the error response
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(setLoginError(errorMessage));
  }
};

// Signup Action
export const sign_up = (userData, navigate, toast) => async (dispatch) => {
  try {
    const apiService = useApiService();
    const response = await apiService.post("/cct/v1/register-user", userData);
    const { token, message } = response.data;
    toast.success(message);

    // Use the cookies instance to set cookies
    cookies.set("jwtToken", token, { secure: true, sameSite: "Strict" });
    dispatch(loginSuccess({ token, message }));

    navigate("/login");
  } catch (error) {
    toast.error(
      `Signup failed: ${
        error.response ? error.response.data.message : error.message
      }`
    );
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch(logoutSuccess());
  cookies.remove("jwtToken");
  cookies.remove("user");
};
