import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <header className="w-full">
      {/* Top: Banner Image */}
      <div className="w-full">
        <img
          src="https://i.ibb.co/R55qC9M/NBCE-Certificate-banner.jpg" // ← Place image in public folder
          alt="NBCE Certification"
          className="w-full h-auto"
        />
      </div>

      {/* Bottom: Logo + Address + Social Links */}
      <div className="bg-white border-b py-2 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-2 shadow-sm">
        {/* Left: Logo + Address */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          {/* BitByte Logo or Text */}
          <div className=" w-[200px] sm:w-[150px]">
            <img
              src="https://i.ibb.co/P7MKHNH/bitbyte-logo.png"
              alt="bitbyte logo"
            />
          </div>
          {/* Address */}
          <p className="text-sm text-gray-600">
            📍 Near Bus Stand, Hinjilicut, Ganjam, Odisha - 761102
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-3 mt-2 md:mt-0">
          <a
            href="#"
            className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Footer;
