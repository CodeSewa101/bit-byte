import React, { useState } from "react";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";

// Course data
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
  },
  {
    id: 9,
    title: "Machine Learning Fundamentals",
    description:
      "Introduction to ML algorithms, model training, and practical applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    duration: "18 weeks",
    students: 2456,
    rating: 4.8,
    level: "Advanced",
    category: "AI/ML",
  },
  {
    id: 10,
    title: "Digital Marketing Strategy",
    description:
      "Comprehensive guide to SEO, social media, and online marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    duration: "8 weeks",
    students: 1789,
    rating: 4.4,
    level: "Beginner",
    category: "Marketing",
  },
  {
    id: 11,
    title: "Blockchain Development",
    description:
      "Build decentralized applications and smart contracts on various blockchain platforms.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    duration: "14 weeks",
    students: 876,
    rating: 4.7,
    level: "Advanced",
    category: "Blockchain",
  },
  {
    id: 12,
    title: "Game Development with Unity",
    description:
      "Create 2D and 3D games using Unity engine and C# programming language.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=250&fit=crop",
    duration: "16 weeks",
    students: 1345,
    rating: 4.6,
    level: "Intermediate",
    category: "Game Dev",
  },
  {
    id: 13,
    title: "AWS Cloud Practitioner",
    description:
      "Get certified in Amazon Web Services and learn cloud computing fundamentals.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    duration: "6 weeks",
    students: 2134,
    rating: 4.8,
    level: "Beginner",
    category: "Cloud",
  },
  {
    id: 14,
    title: "Data Structures and Algorithms",
    description:
      "Master coding interview preparation with comprehensive DSA coverage.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 3456,
    rating: 4.9,
    level: "Intermediate",
    category: "Programming",
  },
  {
    id: 15,
    title: "Product Management Essentials",
    description:
      "Learn product strategy, user research, and agile development methodologies.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    duration: "8 weeks",
    students: 1567,
    rating: 4.5,
    level: "Beginner",
    category: "Business",
  },
  {
    id: 16,
    title: "iOS Development with Swift",
    description:
      "Build native iOS applications using Swift and modern iOS development patterns.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    duration: "14 weeks",
    students: 1098,
    rating: 4.7,
    level: "Intermediate",
    category: "Mobile",
  },
  {
    id: 17,
    title: "Docker and Kubernetes",
    description:
      "Master containerization and orchestration for modern application deployment.",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=250&fit=crop",
    duration: "10 weeks",
    students: 892,
    rating: 4.8,
    level: "Advanced",
    category: "DevOps",
  },
  {
    id: 18,
    title: "Graphic Design Mastery",
    description:
      "Create stunning visual designs using Adobe Creative Suite and design principles.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    duration: "10 weeks",
    students: 1789,
    rating: 4.6,
    level: "Beginner",
    category: "Design",
  },
  {
    id: 19,
    title: "Financial Technology (FinTech)",
    description:
      "Explore digital payments, cryptocurrency, and financial software development.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 743,
    rating: 4.5,
    level: "Advanced",
    category: "Finance",
  },
  {
    id: 20,
    title: "Content Creation and Social Media",
    description:
      "Build your personal brand and create engaging content across platforms.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    duration: "6 weeks",
    students: 2341,
    rating: 4.4,
    level: "Beginner",
    category: "Content",
  },
];

// Course Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
            Enroll Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

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
    "AI/ML",
    "Security",
    "Marketing",
    "Blockchain",
    "Game Dev",
    "Cloud",
    "Programming",
    "Business",
    "Finance",
    "Content",
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
          <p className="text-lg text-gray-600">
            Explore our complete collection of {coursesData.length} professional
            courses
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {coursesData.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookOpen className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
