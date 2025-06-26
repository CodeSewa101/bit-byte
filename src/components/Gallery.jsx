import React, { useState } from "react";

const images = [
  "https://i.ibb.co/gFZjDfKj/zoshua-colah-qfrth-Fy-Hio-unsplash.jpg",
  "https://i.ibb.co/20yMnLRH/Chat-GPT-Image-Jun-24-2025-10-03-21-AM.png",
  "https://i.ibb.co/vxmCgRd8/Chat-GPT-Image-Jun-24-2025-09-50-17-AM.png",
  "https://i.ibb.co/v4gjFyqS/Whats-App-Image-2025-06-22-at-12-15-27-2bd9a741.jpg",
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="px-6 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transform transition-all duration-1000 ease-out">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Our Institute Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Discover the vibrant moments and achievements that define our
            institution
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-3 gap-4 h-[600px]">
          {/* Featured */}
          <div
            className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[0]}
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                hoveredIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-6 left-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2">Featured Moment</h3>
                <p className="text-gray-200">
                  Capturing excellence in education
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transform transition-all duration-300 scale-0 group-hover:scale-100">
              <span className="text-white text-2xl">🔍</span>
            </div>
          </div>

          {/* Tall */}
          <div
            className="col-span-1 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[1]}
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent transition-opacity duration-300 ${
                hoveredIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">Innovation Hub</h3>
              </div>
            </div>
          </div>

          {/* Square */}
          <div
            className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[2]}
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-purple-600/60 to-transparent transition-opacity duration-300 ${
                hoveredIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">Learning Spaces</h3>
              </div>
            </div>
          </div>

          {/* Wide */}
          <div
            className="col-span-2 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[3]}
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r from-green-600/60 to-transparent transition-opacity duration-300 ${
                hoveredIndex === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">Campus Life</h3>
              </div>
            </div>
          </div>

          {/* More Photos card */}
          <div
            className="col-span-1 row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center transform transition-transform duration-300 group-hover:scale-110">
                <div className="text-4xl mb-2">📸</div>
                <div>More Photos</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/50 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6 mt-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold">Gallery {i + 1}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse hidden lg:block"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-pink-200/30 rounded-full blur-xl animate-pulse hidden lg:block"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default Gallery;
