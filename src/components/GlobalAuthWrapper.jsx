import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const GlobalAuthWrapper = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const publicRoutes = [
    "/",
    "/login",
    "/reset",
    "/signup",
    "/home",
    "/upsale",
    "/resources",
    "/courses-info",
    "/blogs",
    "/blogdetails",
    "/books",
    "/work-with-me/coaching",
    "/coachingDetails",
    "/work-with-me/speaking",
    "/checkout",
    "/success",
    "/not-found"
  ];
  


  if (loading) {
    return <div>Loading... Auth</div>; // Or loading spinner
  }
  if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default GlobalAuthWrapper;
