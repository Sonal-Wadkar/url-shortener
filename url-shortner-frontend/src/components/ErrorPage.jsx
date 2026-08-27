import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-[#D1CFC9] p-6">

      <div className="bg-[#BDC4D4] p-8 rounded-lg shadow-lg border border-[#52677D] flex flex-col items-center">

        <FaExclamationTriangle className="text-6xl text-[#52677D] mb-4" />

        <h1 className="text-3xl font-bold mb-2 text-[#0F1A2B]">
          Oops! Something went wrong.
        </h1>

        <p className="text-[#52677D] mb-6 text-center">
          {message
            ? message
            : "An unexpected error has occured"}
        </p>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="
            px-5
            py-2.5
            bg-[#1C2E4A]
            hover:bg-[#0F1A2B]
            text-[#D1CFC9]
            font-semibold
            rounded-md
            transition-colors
            duration-200
            shadow-md
          "
        >
          Go back to home
        </button>

      </div>
    </div>
  );
};

export default ErrorPage;