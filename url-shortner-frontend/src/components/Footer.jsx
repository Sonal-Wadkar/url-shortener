import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F1A2B] text-[#D1CFC9] py-8 z-40 relative border-t border-[#52677D]">

      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">

        {/* Brand */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#D1CFC9]">
            Linkly
          </h2>

          <p className="text-[#BDC4D4]">
            Short links. Easy sharing. Powerful tracking.
          </p>
        </div>

        {/* Copyright */}
        <p className="mt-4 lg:mt-0 text-sm text-[#BDC4D4]">
          &copy; 2026 Linkly. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-6 mt-4 lg:mt-0">

          <a
            href="#"
            className="text-[#BDC4D4] hover:text-[#D1CFC9] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>

          <a
            href="#"
            className="text-[#BDC4D4] hover:text-[#D1CFC9] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="#"
            className="text-[#BDC4D4] hover:text-[#D1CFC9] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="#"
            className="text-[#BDC4D4] hover:text-[#D1CFC9] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;