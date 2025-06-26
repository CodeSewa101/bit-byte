// import React from "react";
// import { BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react";

// // Course data (you can import this from your main courses file)
// const coursesData = [
//   {
//     id: 1,
//     title: "Complete React Developer Course",
//     description:
//       "Master React from basics to advanced concepts including hooks, context, and modern patterns.",
//     image:
//       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
//     duration: "12 weeks",
//     students: 2543,
//     rating: 4.8,
//     level: "Beginner",
//     category: "Frontend",
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript Concepts",
//     description:
//       "Deep dive into JavaScript ES6+, async programming, and modern development practices.",
//     image:
//       "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
//     duration: "8 weeks",
//     students: 1876,
//     rating: 4.9,
//     level: "Advanced",
//     category: "Programming",
//   },
//   {
//     id: 3,
//     title: "Node.js Backend Development",
//     description:
//       "Build scalable backend applications with Node.js, Express, and MongoDB.",
//     image:
//       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
//     duration: "10 weeks",
//     students: 1432,
//     rating: 4.7,
//     level: "Intermediate",
//     category: "Backend",
//   },
//   {
//     id: 4,
//     title: "UI/UX Design Fundamentals",
//     description:
//       "Learn design principles, user research, and create stunning user interfaces.",
//     image:
//       "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
//     duration: "6 weeks",
//     students: 2108,
//     rating: 4.6,
//     level: "Beginner",
//     category: "Design",
//   },
//   {
//     id: 5,
//     title: "Python for Data Science",
//     description:
//       "Explore data analysis, visualization, and machine learning with Python libraries.",
//     image:
//       "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
//     duration: "14 weeks",
//     students: 3201,
//     rating: 4.8,
//     level: "Intermediate",
//     category: "Data Science",
//   },
//   {
//     id: 6,
//     title: "Mobile App Development with React Native",
//     description:
//       "Create cross-platform mobile apps using React Native and modern development tools.",
//     image:
//       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
//     duration: "12 weeks",
//     students: 1654,
//     rating: 4.7,
//     level: "Intermediate",
//     category: "Mobile",
//   },
// ];

// // Course Card Component for Homepage
// const HomeCourseCard = ({ course }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
//       <div className="relative">
//         <img
//           src={course.image}
//           alt={course.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-4 left-4">
//           <span
//             className={`px-3 py-1 text-xs font-semibold rounded-full ${
//               course.level === "Beginner"
//                 ? "bg-green-100 text-green-800"
//                 : course.level === "Intermediate"
//                 ? "bg-yellow-100 text-yellow-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {course.level}
//           </span>
//         </div>
//         <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
//           <Star className="w-4 h-4 text-yellow-400 fill-current" />
//           <span className="text-sm font-medium ml-1">{course.rating}</span>
//         </div>
//       </div>

//       <div className="p-6">
//         <div className="flex items-center text-sm text-gray-500 mb-2">
//           <BookOpen className="w-4 h-4 mr-1" />
//           <span className="mr-4">{course.category}</span>
//           <Clock className="w-4 h-4 mr-1" />
//           <span>{course.duration}</span>
//         </div>

//         <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
//           {course.title}
//         </h3>

//         <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//           {course.description}
//         </p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center text-sm text-gray-500">
//             <Users className="w-4 h-4 mr-1" />
//             <span>{course.students.toLocaleString()} students</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Homepage Courses Section Component
// const HomeCoursesSection = ({ onExploreMore }) => {
//   // Show only first 6 courses
//   const featuredCourses = coursesData.slice(0, 6);

//   return (
//     <section className="py-16 bg-orange-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Featured Courses
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Start your learning journey with our most popular and highly-rated
//             courses
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {featuredCourses.map((course) => (
//             <HomeCourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         {/* Explore More Button */}
//         <div className="text-center">
//           <button
//             onClick={onExploreMore}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
//           >
//             Explore More Courses
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </button>

//           {/* Alternative: Link version if using React Router */}
//           {/*
//           <Link
//             to="/courses"
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
//           >
//             Explore More Courses
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </Link>
//           */}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Example usage in a homepage component
// const Homepage = () => {
//   const handleExploreMore = () => {
//     // Navigate to courses page
//     window.location.href = "/course";
//     // Alternative: if using React Router
//     // navigate('/courses');
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Other homepage sections */}

//       {/* Hero Section Example */}

//       {/* Featured Courses Section */}
//       <HomeCoursesSection onExploreMore={handleExploreMore} />

//       {/* Other homepage sections */}
//     </div>
//   );
// };

// export default Homepage;
import React, { useState } from "react";
import { Clock, Users, Star, ArrowRight, Play } from "lucide-react";

// Enhanced course data
const coursesData = [
  {
    id: 1,
    title: "Complete React Developer Course",
    description:
      "Master React from basics to advanced concepts including hooks, context, and modern patterns.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 2543,
    rating: 4.8,
    level: "Beginner",
    category: "Frontend",
    color: "from-blue-500 to-cyan-400",
    trending: true,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    description:
      "Deep dive into JavaScript ES6+, async programming, and modern development practices.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    duration: "8 weeks",
    students: 1876,
    rating: 4.9,
    level: "Advanced",
    category: "Programming",
    color: "from-purple-500 to-pink-400",
    hot: true,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn design principles, user research, and create stunning user interfaces.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
    duration: "6 weeks",
    students: 2108,
    rating: 4.6,
    level: "Beginner",
    category: "Design",
    color: "from-orange-500 to-red-400",
  },
];

// Modern Course Card Component
const ModernCourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
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

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
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

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${
              course.level === "Beginner"
                ? "bg-green-100 text-green-700"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {course.level}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {course.category}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        <button
          className={`w-full bg-gradient-to-r ${course.color} text-white py-2.5 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
        >
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Compact Homepage Courses Section
const HomeCoursesSection = ({ onExploreMore }) => {
  const featuredCourses = coursesData.slice(0, 3); // Show only top 3

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
            onClick={onExploreMore}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto group"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="text-sm text-gray-500 mt-3">
            ⭐ 4.8/5 from 15,000+ students • 💰 30-day money back guarantee
          </p>
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
      `}</style>
    </section>
  );
};

// Example usage
const Homepage = () => {
  const handleExploreMore = () => {
    window.location.href = "/courses";
  };

  return (
    <div className="min-h-screen">
      <HomeCoursesSection onExploreMore={handleExploreMore} />
    </div>
  );
};

export default Homepage;
