import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919556047333"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition-all duration-300"
    >
      <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl" />
    </a>
  );
}

export default WhatsAppButton;
