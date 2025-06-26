import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Zap,
  Award,
  Play,
} from "lucide-react";

// Course data with additional properties for enhanced design
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
    trending: true,
    new: false,
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
    trending: false,
    new: true,
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    description:
      "Build scalable backend applications with Node.js, Express, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    duration: "10 weeks",
    students: 1432,
    rating: 4.7,
    level: "Intermediate",
    category: "Backend",
    trending: false,
    new: false,
  },
  {
    id: 4,
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
    trending: true,
    new: false,
  },
  {
    id: 5,
    title: "Python for Data Science",
    description:
      "Explore data analysis, visualization, and machine learning with Python libraries.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    duration: "14 weeks",
    students: 3201,
    rating: 4.8,
    level: "Intermediate",
    category: "Data Science",
    trending: true,
    new: false,
  },
  {
    id: 6,
    title: "Mobile App Development with React Native",
    description:
      "Create cross-platform mobile apps using React Native and modern development tools.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 1654,
    rating: 4.7,
    level: "Intermediate",
    category: "Mobile",
    trending: false,
    new: true,
  },
  {
    id: 7,
    title: "DevOps and Cloud Computing",
    description:
      "Master containerization, CI/CD pipelines, and cloud deployment strategies.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    duration: "16 weeks",
    students: 987,
    rating: 4.9,
    level: "Advanced",
    category: "DevOps",
    trending: false,
    new: false,
  },
  {
    id: 8,
    title: "Cybersecurity Essentials",
    description:
      "Learn security fundamentals, ethical hacking, and protect digital assets.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    duration: "10 weeks",
    students: 1234,
    rating: 4.5,
    level: "Beginner",
    category: "Security",
    trending: false,
    new: false,
  },
];

// Course Card Component with enhanced animations and styling
const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-blue-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)"
          : "white",
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm border ${
              course.level === "Beginner"
                ? "bg-green-500 bg-opacity-20 text-green-800 border-green-500 border-opacity-30"
                : course.level === "Intermediate"
                ? "bg-yellow-500 bg-opacity-20 text-yellow-800 border-yellow-500 border-opacity-30"
                : "bg-red-500 bg-opacity-20 text-red-800 border-red-500 border-opacity-30"
            }`}
          >
            {course.level}
          </span>
          {course.trending && (
            <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Hot
            </span>
          )}
          {course.new && (
            <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center gap-1">
              <Zap className="w-3 h-3" />
              New
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-bold ml-1 text-gray-800">
            {course.rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 mr-3">
            <BookOpen className="w-4 h-4 mr-1" />
            <span className="font-medium">{course.category}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>

        <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span className="font-medium">
              {course.students.toLocaleString()}
            </span>
            <span className="ml-1">enrolled</span>
          </div>

          <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">Enroll Now</span>
            <ArrowRight className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Stats Component
const StatsCard = ({ icon: Icon, title, value, color }) => (
  <div
    className={`bg-gradient-to-br ${color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white text-opacity-80 text-sm font-medium">
          {title}
        </p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>
      <div className="bg-white bg-opacity-20 p-3 rounded-xl">
        <Icon className="w-8 h-8" />
      </div>
    </div>
  </div>
);

// Main Courses Component
const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Mobile",
    "Design",
    "Data Science",
    "DevOps",
    "Programming",
    "Security",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // Filter courses based on search and filters
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const totalStudents = coursesData.reduce(
    (sum, course) => sum + course.students,
    0
  );
  const avgRating = (
    coursesData.reduce((sum, course) => sum + course.rating, 0) /
    coursesData.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 leading-tight animate-pulse">
              Master Your Future
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover world-class courses designed by industry experts.
              Transform your skills and accelerate your career with our
              comprehensive learning platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <StatsCard
                icon={BookOpen}
                title="Active Courses"
                value={coursesData.length}
                color="from-blue-500 to-cyan-500"
              />
              <StatsCard
                icon={Users}
                title="Students Enrolled"
                value={`${(totalStudents / 1000).toFixed(1)}K+`}
                color="from-purple-500 to-pink-500"
              />
              <StatsCard
                icon={Award}
                title="Average Rating"
                value={avgRating}
                color="from-amber-500 to-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white bg-opacity-70 backdrop-blur-xl rounded-3xl shadow-xl border border-white border-opacity-20 p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-6 h-6 absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for your next adventure..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-500"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white bg-opacity-50 rounded-2xl p-2">
                <Filter className="w-5 h-5 text-gray-600 ml-2" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none outline-none px-3 py-2 font-medium text-gray-700 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-white bg-opacity-50 rounded-2xl p-2">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-transparent border-none outline-none px-3 py-2 font-medium text-gray-700 cursor-pointer"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 font-medium">
            Showing{" "}
            <span className="font-bold text-blue-600">
              {filteredCourses.length}
            </span>{" "}
            of <span className="font-bold">{coursesData.length}</span>{" "}
            incredible courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center animate-pulse">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No courses found
            </h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              We couldn't find any courses matching your criteria. Try adjusting
              your search or filters to discover more amazing content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
