import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  console.log("TOKEN FROM LANDING PAGE:", token);

  const dashBoardNavigateHandler = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 bg-[#D1CFC9]">

      {/* Hero Section */}
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">

        {/* Left Content */}
        <div className="flex-1">

          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              font-bold
              font-roboto
              text-[#0F1A2B]
              md:text-5xl
              sm:text-4xl
              text-3xl
              md:leading-13.75
              sm:leading-11.25
              leading-10
              lg:w-full
              md:w-[70%]
              w-full
            "
          >
            Linkly Makes URL Shortening Simple and Easy.
          </motion.h1>

          <p className="text-[#52677D] text-sm my-5 leading-6">
            Linkly is a simple and secure URL shortening platform that helps
            you turn long URLs into short, easy-to-share links. Create,
            manage, and share your shortened URLs from one convenient
            dashboard.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="
                bg-[#1C2E4A]
                hover:bg-[#0F1A2B]
                transition-colors
                duration-200
                w-40
                text-[#D1CFC9]
                font-semibold
                rounded-md
                py-2
                shadow-md
              "
            >
              Manage Links
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="
                border-[#1C2E4A]
                border
                w-40
                text-[#1C2E4A]
                hover:bg-[#1C2E4A]
                hover:text-[#D1CFC9]
                transition-all
                duration-200
                rounded-md
                py-2
                font-semibold
              "
            >
              Create Short Link
            </motion.button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center w-full">

          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-120 w-100 object-cover rounded-md"
            src="/images/img2.png"
            alt="Linkly URL Shortener"
          />

        </div>
      </div>

      {/* Features Section */}
      <div className="sm:pt-12 pt-7">

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-[#0F1A2B]
            font-roboto
            font-bold
            lg:w-[60%]
            md:w-[70%]
            sm:w-[80%]
            mx-auto
            text-3xl
            text-center
          "
        >
          Everything you need to create and manage your short links
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">

          {/* Simple URL Shortening */}
          <Card
            title="Simple URL Shortening"
            desc="Turn long and complicated URLs into short, memorable links in just a few clicks. Linkly makes URL shortening quick and straightforward."
          />

          {/* Link Management */}
          <Card
            title="Easy Link Management"
            desc="Create and manage your shortened URLs from a centralized dashboard. Keep your links organized and easily accessible whenever you need them."
          />

          {/* Secure Authentication */}
          <Card
            title="Secure Authentication"
            desc="Protect your account with secure JWT-based authentication and Spring Security. Your URL management features are available only to authenticated users."
          />

          {/* Click Tracking */}
          <Card
            title="Click Tracking"
            desc="Keep track of visits to your shortened URLs and monitor link activity to understand how often your links are being accessed."
          />

        </div>
      </div>
    </div>
  );
};

export default LandingPage;