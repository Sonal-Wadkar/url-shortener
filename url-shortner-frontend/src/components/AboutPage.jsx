import React from "react";
import {
  FaLink,
  FaShareAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
      <div className="bg-white w-full sm:py-10 py-8">

        {/* Page Heading */}
        <h1 className="sm:text-4xl text-3xl text-slate-800 font-bold italic mb-3">
          About Linkly
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Linkly is a secure and easy-to-use URL shortening platform designed
          to transform long URLs into short, shareable links. Users can create
          an account, generate and manage shortened URLs, and access protected
          features through a secure authentication system. The application
          combines a modern React frontend with a Spring Boot backend, Spring
          Security, JWT authentication, JPA/Hibernate, and MySQL.
        </p>

        {/* Features */}
        <div className="space-y-6 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">

          {/* URL Shortening */}
          <div className="flex items-start">
            <FaLink className="text-blue-500 text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-slate-800">
                Simple URL Shortening
              </h2>

              <p className="text-gray-600 mt-1">
                Convert long and difficult-to-share URLs into short,
                memorable links. Each shortened URL is assigned a unique short
                code that redirects users to the original destination.
              </p>
            </div>
          </div>

          {/* Link Management */}
          <div className="flex items-start">
            <FaShareAlt className="text-green-500 text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-slate-800">
                Link Management
              </h2>

              <p className="text-gray-600 mt-1">
                Manage your shortened URLs from a centralized dashboard.
                Authenticated users can create and manage their links while
                keeping their URL data associated with their account.
              </p>
            </div>
          </div>

          {/* Authentication & Security */}
          <div className="flex items-start">
            <FaShieldAlt className="text-purple-500 text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-slate-800">
                Secure Authentication
              </h2>

              <p className="text-gray-600 mt-1">
                Protect user accounts and API endpoints with Spring Security
                and JWT-based authentication. Only authenticated users can
                access protected URL management functionality.
              </p>
            </div>
          </div>

          {/* Click Tracking */}
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-slate-800">
                Click Tracking
              </h2>

              <p className="text-gray-600 mt-1">
                Record visits to shortened URLs and track link activity. Click
                information can be used to understand how frequently
                shortened links are being accessed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;