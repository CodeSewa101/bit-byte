import React from "react";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Correct email icon

const Footer = () => {
  return (
    <footer className="w-full bg-orange-50 border-t border-orange-200 shadow-sm px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Left: Logo */}
          <div className="w-[100px] flex-shrink-0">
            <img
              src="https://i.ibb.co/P7MKHNH/bitbyte-logo.png"
              alt="BitByte Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center: Address */}
          <div className="flex-1 text-center">
            <p className="text-sm text-gray-600">
              📍 Near Bus Stand, Hinjilicut, Ganjam, Odisha - 761102
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-2">
            {[
              {
                Icon: FaFacebookF,
                href: "https://www.facebook.com/share/16eNLvQNK7/",
                label: "Facebook",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/bit_byte_computer_institute_?igsh=YnB3ejVpamN0cDc0",
                label: "Instagram",
              },
              {
                Icon: FaPhone,
                href: "tel:+919556047333",
                label: "Call",
              },
              {
                Icon: MdEmail,
                href: "mailto:ramamurty2001@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
