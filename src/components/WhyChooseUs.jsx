import React from "react";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaTools,
  FaRupeeSign,
  FaBriefcase,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-orange-30 py-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <p className="text-orange-600 font-bold uppercase tracking-widest mb-2 border-b-2 border-dashed inline-block border-orange-400">
            Why Choose Us?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Why You Should Choose BitByte?
          </h2>
          <p className="text-gray-600 mb-6">
            At BitByte Computer Institute, we don't just teach computers — we
            build digital confidence. Here’s why hundreds of students in
            Hinjilicut trust us:
          </p>

          <div className="space-y-5">
            {/* Feature Item */}
            <FeatureItem
              icon={<FaCertificate className="text-white" />}
              bgColor="bg-blue-500"
              title="Government-Certified Courses"
              description="Get certified in PGDCA, DCA, O-Level, and more — credentials that add real value to your career."
            />
            <FeatureItem
              icon={<FaChalkboardTeacher className="text-white" />}
              bgColor="bg-red-500"
              title="Experienced Faculty"
              description="Our instructors bring industry experience and a student-friendly teaching approach."
            />
            <FeatureItem
              icon={<FaTools className="text-white" />}
              bgColor="bg-yellow-500"
              title="Hands-on Learning"
              description="Theory meets practice with real-world projects, labs, and guided assignments."
            />
            <FeatureItem
              icon={<FaRupeeSign className="text-white" />}
              bgColor="bg-green-500"
              title="Affordable Education"
              description="Our fees are designed to be student-friendly without compromising on quality."
            />
            <FeatureItem
              icon={<FaBriefcase className="text-white" />}
              bgColor="bg-indigo-500"
              title="Placement & Career Support"
              description="We help with job interviews, resume building, and connect you with real opportunities."
            />
            <FeatureItem
              icon={<FaClock className="text-white" />}
              bgColor="bg-orange-400"
              title="Flexible Batches"
              description="Morning and evening classes for students, professionals, and homemakers."
            />
            <FeatureItem
              icon={<FaThumbsUp className="text-white" />}
              bgColor="bg-pink-500"
              title="Trusted by Hinjilicut"
              description="With years of service, BitByte stands for reliable computer education."
            />
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/gFZjDfKj/zoshua-colah-qfrth-Fy-Hio-unsplash.jpg"
            alt="Student with book"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description, bgColor }) => (
  <div className="flex items-start gap-4">
    <div className={`p-3 rounded-md ${bgColor}`}>{icon}</div>
    <div>
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default WhyChooseUs;
