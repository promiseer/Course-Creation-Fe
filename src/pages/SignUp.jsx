import { useState } from "react";
import Icons from "../../public/index.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sign_up } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate(); 
  const [isPassword, setisPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const handleSignup = handleSubmit(async (values) => {
    try {
      await dispatch(
        sign_up(
          {
            username: values.username,
            firstName: values.username,
            lastName: values.username,
            email: values.email,
            password: values.password,
          },
          navigate,
          toast
        )
      );
    } catch (error) {
      toast.error("Error creating account. Please try again.");
    }
  });

  return (
    <div className="signin-page">
      <div className="signin-container">
        <div className="signin-logo">
          <img src={Icons.brandLogo} alt="logo" />
          <h2>Sign Up</h2>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />

        <div className="signin-form">
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <div className="input-inline">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Full Name"
                  autoComplete="off"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <span className="input-icons">
                  <i className="bi bi-person-circle"></i>
                </span>
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                )}
              </div>
            </div>
            
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
                <span className="input-icons">
                  <i className="bi bi-person-circle"></i>
                </span>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
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
                <span
                  className="input-icons show-password"
                  onClick={() => setisPassword(!isPassword)}
                >
                  <i
                    className={isPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  ></i>
                </span>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-signin !max-w-[100%]">
              Create Account
            </button>
            
            <div className="">
              <a href="/login" className="forgot-password mx-2">
                Login
              </a>
              <a href="#" className="forgot-password  mx-2">
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

export default SignUp;
