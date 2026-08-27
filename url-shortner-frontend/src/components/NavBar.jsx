import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-[#0F1A2B] z-50 flex items-center sticky top-0 shadow-md">

      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl text-[#D1CFC9] italic">
            Linkly
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`
            flex
            sm:gap-10
            gap-4
            sm:items-center
            sm:mt-1
            sm:pt-0
            pt-3
            text-[#D1CFC9]
            sm:static
            absolute
            left-0
            top:62px
            sm:shadow-none
            shadow-md
            ${
              navbarOpen
                ? "h-fit sm:pb-0 pb-5"
                : "h-0 overflow-hidden"
            }
            transition-all
            duration-200
            sm:h-fit
            bg-[#0F1A2B]
            sm:w-fit
            w-full
            sm:flex-row
            flex-col
            px-4
            sm:px-0
          `}
        >

          {/* Home */}
          <li className="hover:text-[#BDC4D4] font-medium transition-all duration-150">

            <Link
              className={
                path === "/"
                  ? "text-[#D1CFC9] font-semibold"
                  : "text-[#BDC4D4]"
              }
              to="/"
            >
              Home
            </Link>

          </li>

          {/* About */}
          <li className="hover:text-[#BDC4D4] font-medium transition-all duration-150">

            <Link
              className={
                path === "/about"
                  ? "text-[#D1CFC9] font-semibold"
                  : "text-[#BDC4D4]"
              }
              to="/about"
            >
              About
            </Link>

          </li>

          {/* Dashboard - Only when logged in */}
          {token && (
            <li className="hover:text-[#BDC4D4] font-medium transition-all duration-150">

              <Link
                className={
                  path === "/dashboard"
                    ? "text-[#D1CFC9] font-semibold"
                    : "text-[#BDC4D4]"
                }
                to="/dashboard"
              >
                Dashboard
              </Link>

            </li>
          )}

          {/* Sign Up - Only when logged out */}
          {!token && (
            <li>

              <Link
                to="/register"
                className="
                  sm:ml-0
                  -ml-1
                  bg-[#52677D]
                  hover:bg-[#1C2E4A]
                  text-[#D1CFC9]
                  cursor-pointer
                  w-24
                  text-center
                  font-semibold
                  px-2
                  py-2
                  rounded-md
                  transition-all
                  duration-200
                  inline-block
                "
              >
                Sign Up
              </Link>

            </li>
          )}

          {/* Logout - Only when logged in */}
          {token && (
            <li>

              <button
                onClick={onLogOutHandler}
                className="
                  sm:ml-0
                  -ml-1
                  bg-[#52677D]
                  hover:bg-[#1C2E4A]
                  text-[#D1CFC9]
                  cursor-pointer
                  w-24
                  text-center
                  font-semibold
                  px-2
                  py-2
                  rounded-md
                  transition-all
                  duration-200
                "
              >
                Log Out
              </button>

            </li>
          )}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center"
          aria-label="Toggle navigation menu"
        >
          {navbarOpen ? (
            <RxCross2 className="text-[#D1CFC9] text-3xl" />
          ) : (
            <IoIosMenu className="text-[#D1CFC9] text-3xl" />
          )}
        </button>

      </div>
    </div>
  );
};

export default Navbar;