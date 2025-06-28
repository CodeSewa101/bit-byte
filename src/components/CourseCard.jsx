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
  Code,
  Database,
  Palette,
  Calculator,
  Globe,
  Monitor,
} from "lucide-react";
import { courseImages } from "../assets/images/courses";
// Course data with your specific courses
const coursesData = [
  {
    id: 1,
    title: "O Level Computer Course",
    description:
      "Comprehensive computer literacy program recognized by NIELIT. Master essential computing skills and programming fundamentals.",
    image: courseImages.OLevel,
    duration: "12 months",
    students: 1250,
    rating: 4.8,
    level: "Beginner",
    category: "Certification",
    trending: true,
    new: false,
    icon: BookOpen,
  },
  {
    id: 2,
    title: "PGDCA (Post Graduate Diploma)",
    description:
      "Advanced diploma in computer applications covering programming, databases, and system analysis for graduates.",
    image: courseImages.pgdca,
    duration: "12 months",
    students: 890,
    rating: 4.7,
    level: "Advanced",
    category: "Certification",
    trending: false,
    new: false,
    icon: Award,
  },
  {
    id: 3,
    title: "DCA (Diploma in Computer Applications)",
    description:
      "Foundation course in computer applications, perfect for beginners to start their IT journey.",
    image: courseImages.dca,
    duration: "6 months",
    students: 1850,
    rating: 4.6,
    level: "Beginner",
    category: "Certification",
    trending: true,
    new: false,
    icon: Monitor,
  },
  {
    id: 4,
    title: "Oracle Database Administration",
    description:
      "Master Oracle database management, SQL, PL/SQL, and become a certified database administrator.",
    image: courseImages.oracle,
    duration: "8 weeks",
    students: 567,
    rating: 4.9,
    level: "Advanced",
    category: "Database",
    trending: false,
    new: true,
    icon: Database,
  },
  {
    id: 5,
    title: "Python Programming",
    description:
      "Learn Python from basics to advanced concepts including web development, data analysis, and automation.",
    image: courseImages.python,
    duration: "10 weeks",
    students: 2340,
    rating: 4.8,
    level: "Intermediate",
    category: "Programming",
    trending: true,
    new: false,
    icon: Code,
  },
  {
    id: 6,
    title: "MS Office Suite Mastery",
    description:
      "Complete training in Word, Excel, PowerPoint, and Outlook for professional productivity.",
    image: courseImages.msoffice,
    duration: "4 weeks",
    students: 3420,
    rating: 4.5,
    level: "Beginner",
    category: "Office Tools",
    trending: false,
    new: false,
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Adobe Photoshop",
    description:
      "Master photo editing, digital art, and graphic design using Adobe Photoshop's powerful tools.",
    image: courseImages.ps,
    duration: "6 weeks",
    students: 1890,
    rating: 4.7,
    level: "Intermediate",
    category: "Design",
    trending: true,
    new: false,
    icon: Palette,
  },
  {
    id: 8,
    title: "Java Programming",
    description:
      "Comprehensive Java course covering OOP concepts, frameworks, and enterprise application development.",
    image: courseImages.java,
    duration: "12 weeks",
    students: 1567,
    rating: 4.8,
    level: "Intermediate",
    category: "Programming",
    trending: false,
    new: false,
    icon: Code,
  },
  {
    id: 9,
    title: "Computer Fundamentals & Office Tools",
    description:
      "Essential computer skills including hardware basics, software applications, and office productivity tools.",
    image: courseImages.cs,
    duration: "8 weeks",
    students: 2750,
    rating: 4.4,
    level: "Beginner",
    category: "Fundamentals",
    trending: false,
    new: false,
    icon: Monitor,
  },
  {
    id: 10,
    title: "Tally ERP 9",
    description:
      "Complete accounting software training for business financial management and GST compliance.",
    image: courseImages.tally,
    duration: "6 weeks",
    students: 1234,
    rating: 4.6,
    level: "Intermediate",
    category: "Accounting",
    trending: true,
    new: false,
    icon: Calculator,
  },
  {
    id: 11,
    title: "Accounting Fundamentals",
    description:
      "Learn basic to advanced accounting principles, bookkeeping, and financial statement preparation.",
    image: courseImages.ba,
    duration: "8 weeks",
    students: 987,
    rating: 4.5,
    level: "Beginner",
    category: "Accounting",
    trending: false,
    new: false,
    icon: Calculator,
  },
  {
    id: 12,
    title: "Graphic Design Complete",
    description:
      "Master visual communication through typography, layout design, branding, and digital illustration.",
    image: courseImages.graphic,
    duration: "10 weeks",
    students: 1456,
    rating: 4.7,
    level: "Intermediate",
    category: "Design",
    trending: true,
    new: false,
    icon: Palette,
  },
  {
    id: 13,
    title: "AngularJS Development",
    description:
      "Build dynamic web applications using AngularJS framework with modern JavaScript practices.",
    image: courseImages.angular,
    duration: "8 weeks",
    students: 789,
    rating: 4.6,
    level: "Advanced",
    category: "Web Development",
    trending: false,
    new: true,
    icon: Code,
  },
  {
    id: 14,
    title: "C/C++ Programming",
    description:
      "Master foundational programming languages with data structures, algorithms, and system programming.",
    image: courseImages.ccplus,
    duration: "10 weeks",
    students: 1345,
    rating: 4.7,
    level: "Intermediate",
    category: "Programming",
    trending: false,
    new: false,
    icon: Code,
  },
  {
    id: 15,
    title: "Computer Fundamentals",
    description:
      "Basic computer literacy covering hardware, software, internet, and essential digital skills.",
    image: courseImages.cf,
    duration: "4 weeks",
    students: 3210,
    rating: 4.3,
    level: "Beginner",
    category: "Fundamentals",
    trending: false,
    new: false,
    icon: Monitor,
  },
  {
    id: 16,
    title: "Data Entry Professional",
    description:
      "Professional data entry skills with accuracy, speed, and proficiency in various data management tools.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    duration: "3 weeks",
    students: 2890,
    rating: 4.2,
    level: "Beginner",
    category: "Office Skills",
    trending: false,
    new: false,
    icon: BookOpen,
  },
  {
    id: 17,
    title: "Digital Marketing",
    description:
      "Complete digital marketing course covering SEO, social media, PPC, and content marketing strategies.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 1678,
    rating: 4.8,
    level: "Intermediate",
    category: "Marketing",
    trending: true,
    new: false,
    icon: Globe,
  },
  {
    id: 18,
    title: "DTP (Desktop Publishing)",
    description:
      "Professional page layout and design using industry-standard DTP software for print and digital media.",
    image: courseImages.dtp,
    duration: "6 weeks",
    students: 567,
    rating: 4.4,
    level: "Intermediate",
    category: "Design",
    trending: false,
    new: false,
    icon: Palette,
  },
  {
    id: 19,
    title: "Computer Hardware",
    description:
      "Hands-on training in computer assembly, troubleshooting, repair, and maintenance of PC systems.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=250&fit=crop",
    duration: "8 weeks",
    students: 678,
    rating: 4.5,
    level: "Intermediate",
    category: "Hardware",
    trending: false,
    new: false,
    icon: Monitor,
  },
  {
    id: 20,
    title: "Full Stack Java Development",
    description:
      "Complete web development using Java, Spring framework, databases, and modern frontend technologies.",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&h=250&fit=crop",
    duration: "16 weeks",
    students: 892,
    rating: 4.9,
    level: "Advanced",
    category: "Web Development",
    trending: true,
    new: true,
    icon: Code,
  },
  {
    id: 21,
    title: ".NET Development",
    description:
      "Microsoft .NET framework development including C#, ASP.NET, and enterprise application building.",
    image: courseImages.net,
    duration: "12 weeks",
    students: 654,
    rating: 4.7,
    level: "Advanced",
    category: "Programming",
    trending: false,
    new: false,
    icon: Code,
  },
  {
    id: 22,
    title: "PHP Web Development",
    description:
      "Server-side web development with PHP, MySQL, and popular frameworks for dynamic websites.",
    image: courseImages.php,
    duration: "10 weeks",
    students: 1123,
    rating: 4.6,
    level: "Intermediate",
    category: "Web Development",
    trending: false,
    new: false,
    icon: Code,
  },
  {
    id: 23,
    title: "Web Design Complete",
    description:
      "Complete web design course covering HTML, CSS, JavaScript, responsive design, and UI/UX principles.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    duration: "12 weeks",
    students: 1987,
    rating: 4.8,
    level: "Intermediate",
    category: "Web Development",
    trending: true,
    new: false,
    icon: Globe,
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

  const IconComponent = course.icon;

  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-blue-200 hover:cursor-pointer`}
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
const InstituteCoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = [
    "All",
    "Certification",
    "Programming",
    "Web Development",
    "Design",
    "Database",
    "Office Tools",
    "Accounting",
    "Marketing",
    "Hardware",
    "Fundamentals",
    "Office Skills",
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

  const totalStudents = 500;
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
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 leading-tight">
              Transform Your Career
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover professional courses designed by industry experts. Build
              your skills with our comprehensive computer education programs and
              accelerate your career growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <BookOpen className="w-6 h-6" />
                Explore Courses
              </button>
              <button className="bg-white bg-opacity-20 backdrop-blur-sm  border-2 border-white border-opacity-30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-3">
                <Users className="w-6 h-6" />
                Join Community
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <StatsCard
                icon={BookOpen}
                title="Course Offerings"
                value={coursesData.length}
                color="from-blue-500 to-cyan-500"
              />
              <StatsCard
                icon={Users}
                title="Students Trained"
                value={`${totalStudents}+`}
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
                placeholder="Search for your perfect course..."
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

        {/* Additional Features Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Institute?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We provide industry-relevant training with hands-on experience and
              job placement assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Certified Training</h3>
              <p className="text-blue-100 text-sm">
                Industry recognized certifications
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-blue-100 text-sm">
                Learn from industry professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Modern Labs</h3>
              <p className="text-blue-100 text-sm">
                State-of-the-art computer labs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-4 w-16 h-16 mx-auto flex items-center justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Job Assistance</h3>
              <p className="text-blue-100 text-sm">
                Placement support & career guidance
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg text-gray-600 font-medium">
            Showing{" "}
            <span className="font-bold text-blue-600">
              {filteredCourses.length}
            </span>{" "}
            of <span className="font-bold">{coursesData.length}</span>{" "}
            professional courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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

export default InstituteCoursesPage;
