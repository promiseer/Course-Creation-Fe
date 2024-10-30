import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../public/index.js";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [isPassword, setIsPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: async ({ username, password }) => {
      await dispatch(login({ username, password }));
      toast.success("Logged in successfully!");
      navigate("/courses");
    },
    onSuccess: () => {
      setLoginError("");
      toast.success("Logged in successfully!");
      navigate("/courses");
    },
    onError: (error) => {
      setLoginError(error.message || "Login failed. Please try again.");
    },
  });

  const handleLogin = handleSubmit((values) => {
    signIn({
      username: values.email,
      password: values.password,
    });
  });

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-logo">
          <img src={Icons.brandLogo} alt="logo" />
          <h2>Login</h2>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="signin-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="input-inline">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                  autoComplete="off"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
                <span className="input-icons">
                  <i className="bi bi-person-circle"></i>
                </span>
              </div>
            </div>

            <div className="form-group">
              <div className="input-inline">
                <input
                  type={isPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </span>
                )}
                <span
                  className="input-icons show-password"
                  onClick={() => setIsPassword(!isPassword)}
                >
                  <i
                    className={isPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </span>
              </div>
            </div>

            {errorMessage && <p style={{ color: 'red', maxWidth:'300px' }}>{errorMessage}</p>} {/* Display the error message */}
            <button
              type="submit"
              className="btn btn-signin"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign in"}
            </button>
            {loginError && (
              <p style={{ color: "red", maxWidth: "300px" }}>{loginError}</p>
            )}
            <div>
              <a href="/signup" className="forgot-password mx-2">
                Create Account
              </a>
              <a href="#" className="forgot-password mx-2">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="signin-images">
        <img src={Icons.loginImage} alt="login" />
      </div>
    </div>
  );
}

export default Login;
