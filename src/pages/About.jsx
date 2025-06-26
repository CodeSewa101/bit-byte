import React, { useState, useEffect } from "react";
import {
  Users,
  Award,
  BookOpen,
  MapPin,
  Star,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

// Import AboutTop component (assuming it exists)
// import AboutTop from "../components/AboutTop";

// Placeholder for AboutTop component
const AboutTop = () => (
  <div className="text-center py-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Students Trained" },
    { icon: Award, number: "10+", label: "Certified Courses" },
    { icon: BookOpen, number: "5+", label: "Years Experience" },
    { icon: Star, number: "95%", label: "Success Rate" },
  ];

  const features = [
    {
      icon: Award,
      title: "Certified Instructors",
      description:
        "Learn from industry experts with years of practical experience",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Industry-Aligned Curriculum",
      description: "Updated course modules that match current market demands",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Target,
      title: "Affordable & Flexible",
      description: "Budget-friendly fees with flexible timing options",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Career Support",
      description: "Comprehensive guidance and placement assistance",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const courses = [
    "PGDCA",
    "DCA",
    "O-Level",
    "Tally",
    "MS Office",
    "Web Development",
    "Digital Marketing",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="px-4 py-12 sm:px-8 lg:px-16">
        <AboutTop />

        {/* Hero Section */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 hover:shadow-3xl transition-shadow duration-500">
            <div className="relative">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>

              <div className="relative p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6">
                      <MapPin className="w-4 h-4 mr-2" />
                      Hinjilicut's #1 Computer Institute
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                      BitByte Computer Institute
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Pioneering digital education in Hinjilicut since our
                      inception. We bridge the digital divide by providing
                      accessible, affordable, and industry-relevant IT training
                      that transforms lives.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {courses.map((course, index) => (
                        <span
                          key={course}
                          className={`px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default ${
                            index % 2 === 0 ? "animate-pulse" : ""
                          }`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                      <p className="text-orange-100">
                        To prepare students for tomorrow's technology, today. We
                        go beyond textbooks to create job-ready professionals
                        who can thrive in the digital economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? "animate-bounce" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "1s",
                    animationFillMode: "both",
                  }}
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose BitByte?
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover what makes us the preferred choice for quality computer
                education
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg transform scale-105"
                        : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${
                          feature.color
                        } ${
                          isActive ? "shadow-lg" : "shadow-md"
                        } transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Join the BitByte Family Today
            </h3>
            <p className="text-lg text-orange-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              We cater to students, working professionals, homemakers, and
              anyone eager to embrace the digital world. Our peaceful learning
              environment with modern infrastructure provides the perfect
              setting for your growth.
            </p>
            <div className="flex items-center justify-center space-x-3 text-orange-100">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">
                Located in the heart of Hinjilicut
              </span>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <span className="text-white font-medium">
                  Take your first step toward a brighter digital future
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
