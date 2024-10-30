import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/shared/Header";

function NotFound() {
  return (
    <section>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <div className="text-6xl text-blue-500 mb-4">
          <i className="bi bi-exclamation-triangle-fill"></i>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="bi bi-arrow-left-circle mr-2"></i> Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
