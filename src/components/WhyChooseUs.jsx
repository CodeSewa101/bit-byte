import React from "react";
import {
  FaCertificate,
  FaChalkboardTeacher,
  FaTools,
  FaRupeeSign,
  FaBriefcase,
  FaClock,
  FaThumbsUp,
  FaStar,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCertificate className="text-white" />,
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      title: "Government-Certified Courses",
      description:
        "Get certified in PGDCA, DCA, O-Level, and more — credentials that add real value to your career.",
    },
    {
      icon: <FaChalkboardTeacher className="text-white" />,
      bgColor: "bg-gradient-to-r from-red-500 to-red-600",
      title: "Experienced Faculty",
      description:
        "Our instructors bring industry experience and a student-friendly teaching approach.",
    },
    {
      icon: <FaTools className="text-white" />,
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      title: "Hands-on Learning",
      description:
        "Theory meets practice with real-world projects, labs, and guided assignments.",
    },
    {
      icon: <FaRupeeSign className="text-white" />,
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      title: "Affordable Education",
      description:
        "Our fees are designed to be student-friendly without compromising on quality.",
    },
    {
      icon: <FaBriefcase className="text-white" />,
      bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      title: "Placement & Career Support",
      description:
        "We help with job interviews, resume building, and connect you with real opportunities.",
    },
    {
      icon: <FaClock className="text-white" />,
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      title: "Flexible Batches",
      description:
        "Morning and evening classes for students, professionals, and homemakers.",
    },
    {
      icon: <FaThumbsUp className="text-white" />,
      bgColor: "bg-gradient-to-r from-pink-500 to-pink-600",
      title: "Trusted by Hinjilicut",
      description:
        "With years of service, BitByte stands for reliable computer education.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStar className="text-orange-500 text-xl" />
            <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">
              Why Choose Us?
            </p>
            <FaStar className="text-orange-500 text-xl" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Why You Should Choose{" "}
            <span className="text-orange-600">BitByte</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At BitByte Computer Institute, we don't just teach computers — we
            build digital confidence. Here's why hundreds of students in
            Hinjilicut trust us with their future.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 items-center">
          {/* Left: Features Grid */}
          <div className="xl:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  bgColor={feature.bgColor}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right: Image with Stats */}
          <div className="xl:w-2/5">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/gFZjDfKj/zoshua-colah-qfrth-Fy-Hio-unsplash.jpg"
                  alt="Student with book"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl border-l-4 border-orange-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border-l-4 border-blue-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-xl border-l-4 border-green-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of successful students who transformed their careers
              with BitByte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Enroll Today
              </button>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, bgColor, index }) => (
  <div
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex items-start gap-4">
      <div
        className={`p-4 rounded-xl ${bgColor} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;
