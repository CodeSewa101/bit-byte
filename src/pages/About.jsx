import React from "react";
import AboutTop from "../components/AboutTop";

const About = () => {
  return (
    <section className="px-4 py-12 sm:px-8 lg:px-16 bg-white">
      <AboutTop />
      {/* Bottom Section: About BitByte */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4">
          About BitByte Computer Institute
        </h2>
        <p className="text-gray-700 mb-4">
          BitByte Computer Institute is Hinjilicut’s first choice for quality
          computer education. Since our inception, we’ve been on a mission to
          bridge the digital divide by providing accessible, affordable, and
          industry-relevant IT training.
        </p>
        <p className="text-gray-700 mb-4">
          We offer a wide range of certified courses including PGDCA, DCA,
          O-Level, Tally, MS Office, and other professional programs. Our
          curriculum is designed to be hands-on, with practical labs and
          real-time project exposure to make students job-ready.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            💡 Why Choose BitByte?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Certified and experienced instructors</li>
            <li>Updated course modules aligned with industry needs</li>
            <li>Affordable fee structure with flexible timings</li>
            <li>Career guidance and support</li>
            <li>Peaceful learning environment with modern infrastructure</li>
          </ul>
        </div>

        <p className="text-gray-700">
          We cater to students, working professionals, homemakers, and anyone
          eager to embrace the digital world. At BitByte, learning goes beyond
          textbooks—we prepare you for tomorrow’s technology, today.
        </p>
        <p className="text-gray-700 mt-2 font-semibold">
          📍 Located conveniently in the heart of Hinjilicut, we are proud to be
          a part of your career journey. Join the growing BitByte family and
          take your first step toward a brighter digital future.
        </p>
      </div>
    </section>
  );
};

export default About;
