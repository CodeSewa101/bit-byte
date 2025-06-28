import React, { useState } from "react";
import { Clock, Users, Star, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courseImages } from "../assets/images/courses";
// Enhanced course data
const coursesData = [
  {
    id: 1,
    title: "O Level Computer Course",
    description:
      "Comprehensive computer literacy program recognized by NIELIT. Master essential computing skills and programming fundamentals.",
    image: courseImages.OLevel,
    duration: "12 months",
    students: 1834,
    rating: 4.9,
    level: "Beginner",
    category: "Certification",
    color: "from-orange-500 to-red-400",
    trending: true,
  },
  {
    id: 2,
    title: "PGDCA - Post Graduate Diploma in Computer Applications",
    description:
      "Comprehensive 1-year diploma covering programming, database management, web development, and computer fundamentals.",
    image: courseImages.pgdca,
    duration: "12 months",
    students: 1245,
    rating: 4.7,
    level: "Advanced",
    category: "Diploma",
    color: "from-blue-500 to-cyan-400",
    trending: true,
  },
  {
    id: 3,
    title: "Tally ERP 9 with GST",
    description:
      "Master accounting software Tally ERP 9, GST compliance, inventory management, and financial reporting.",
    image: courseImages.tally,
    duration: "3 months",
    students: 2156,
    rating: 4.8,
    level: "Beginner",
    category: "Accounting",
    color: "from-blue-400 to-violet-400",
    hot: true,
  },
];

// Modern Course Card Component with Fixed Height
const ModernCourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-xl hover:cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-[420px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {course.trending && (
          <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full animate-pulse">
            🔥 TRENDING
          </span>
        )}
        {course.hot && (
          <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
            ⚡ HOT
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="absolute top-3 right-3 z-10 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
        <Star className="w-3 h-3 text-yellow-400 fill-current" />
        <span className="text-white font-medium ml-1 text-xs">
          {course.rating}
        </span>
      </div>

      {/* Image - Fixed height */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Play button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white/30 backdrop-blur-md rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white fill-current" />
          </div>
        </div>
      </div>

      {/* Content - Flexible height with consistent spacing */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              course.level === "Beginner"
                ? "bg-green-100 text-green-700"
                : course.level === "Intermediate"
                ? "bg-blue-100 text-blue-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {course.level}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {course.category}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 min-h-[3.5rem]">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Homepage Courses Section
const HomeCoursesSection = () => {
  const featuredCourses = coursesData.slice(0, 3); // Show only top 3
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/40 mb-4">
            <span className="text-blue-600 font-medium text-sm">
              🚀 Featured Courses
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Start Learning
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Today
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of students mastering in-demand skills with our
            top-rated courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredCourses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ModernCourseCard course={course} index={index} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate("/course")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:cursor-pointer text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto group"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

// Example usage
const Homepage = () => {
  const handleExploreMore = () => {
    window.location.href = "/course";
  };

  return (
    <div className="min-h-screen">
      <HomeCoursesSection onExploreMore={handleExploreMore} />
    </div>
  );
};

export default Homepage;
