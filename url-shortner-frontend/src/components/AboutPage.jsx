import React from "react";
import {
  FaLink,
  FaShareAlt,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 bg-[#D1CFC9]">

      <div className="bg-[#D1CFC9] w-full sm:py-10 py-8">

        {/* Page Heading */}
        <h1 className="sm:text-4xl text-3xl text-[#0F1A2B] font-bold italic mb-3">
          About Linkly
        </h1>

        {/* Introduction */}
        <p className="text-[#52677D] text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full leading-6">
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
          <div
            className="
              flex
              items-start
              bg-[#BDC4D4]
              p-5
              rounded-lg
              shadow-sm
              border
              border-[#52677D]
            "
          >
            <FaLink className="text-[#1C2E4A] text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-[#0F1A2B]">
                Simple URL Shortening
              </h2>

              <p className="text-[#52677D] mt-1 leading-6">
                Convert long and difficult-to-share URLs into short,
                memorable links. Each shortened URL is assigned a unique short
                code that redirects users to the original destination.
              </p>
            </div>
          </div>

          {/* Link Management */}
          <div
            className="
              flex
              items-start
              bg-[#BDC4D4]
              p-5
              rounded-lg
              shadow-sm
              border
              border-[#52677D]
            "
          >
            <FaShareAlt className="text-[#1C2E4A] text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-[#0F1A2B]">
                Link Management
              </h2>

              <p className="text-[#52677D] mt-1 leading-6">
                Manage your shortened URLs from a centralized dashboard.
                Authenticated users can create and manage their links while
                keeping their URL data associated with their account.
              </p>
            </div>
          </div>

          {/* Authentication & Security */}
          <div
            className="
              flex
              items-start
              bg-[#BDC4D4]
              p-5
              rounded-lg
              shadow-sm
              border
              border-[#52677D]
            "
          >
            <FaShieldAlt className="text-[#1C2E4A] text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-[#0F1A2B]">
                Secure Authentication
              </h2>

              <p className="text-[#52677D] mt-1 leading-6">
                Protect user accounts and API endpoints with Spring Security
                and JWT-based authentication. Only authenticated users can
                access protected URL management functionality.
              </p>
            </div>
          </div>

          {/* Click Tracking */}
          <div
            className="
              flex
              items-start
              bg-[#BDC4D4]
              p-5
              rounded-lg
              shadow-sm
              border
              border-[#52677D]
            "
          >
            <FaChartLine className="text-[#1C2E4A] text-3xl mr-4 mt-1 shrink-0" />

            <div>
              <h2 className="sm:text-2xl text-xl font-bold text-[#0F1A2B]">
                Click Tracking
              </h2>

              <p className="text-[#52677D] mt-1 leading-6">
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