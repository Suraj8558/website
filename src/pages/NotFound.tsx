import React from "react";
import { Link } from "react-router-dom"; // Or use `next/link` if using Next.js

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 container">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
