import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { restoreAuth } from "../redux/slices/authSlice";

const GlobalAuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const publicRoutes = [
    "/login",
    "/signup",
    "/home",
    "/resources",
    "/sitecourses",
    "/blogs",
    "/blogdetails",
    "/books",
    "/coaching",
    "/coachingDetails",
    "/speaking",
  ];
  
  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  if (loading) {
    return <div>Loading... Auth</div>; // Or loading spinner
  }
  if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="home" />;
  }

  return <>{children}</>;
};

export default GlobalAuthWrapper;
