import React from "react";
import { BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react";

// Course data (you can import this from your main courses file)
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
  },
];

// Course Card Component for Homepage
const HomeCourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              course.level === "Beginner"
                ? "bg-green-100 text-green-800"
                : course.level === "Intermediate"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {course.level}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium ml-1">{course.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <BookOpen className="w-4 h-4 mr-1" />
          <span className="mr-4">{course.category}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{course.duration}</span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Homepage Courses Section Component
const HomeCoursesSection = ({ onExploreMore }) => {
  // Show only first 6 courses
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your learning journey with our most popular and highly-rated
            courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <HomeCourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button
            onClick={onExploreMore}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Explore More Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>

          {/* Alternative: Link version if using React Router */}
          {/* 
          <Link 
            to="/courses"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Explore More Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          */}
        </div>
      </div>
    </section>
  );
};

// Example usage in a homepage component
const Homepage = () => {
  const handleExploreMore = () => {
    // Navigate to courses page
    window.location.href = "/course";
    // Alternative: if using React Router
    // navigate('/courses');
  };

  return (
    <div className="min-h-screen">
      {/* Other homepage sections */}

      {/* Hero Section Example */}

      {/* Featured Courses Section */}
      <HomeCoursesSection onExploreMore={handleExploreMore} />

      {/* Other homepage sections */}
    </div>
  );
};

export default Homepage;
