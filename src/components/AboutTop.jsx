import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = end;

    const timer = setInterval(() => {
      const now = Date.now();
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);

      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

function AboutTop() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 items-center">
          {/* Image Section */}
          <div className="xl:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Desktop Image (visible on md and up) */}
              <img
                src="https://i.ibb.co/vxmCgRd8/Chat-GPT-Image-Jun-24-2025-09-50-17-AM.png"
                alt="BitByte Student Desktop"
                loading="lazy"
                decoding="async"
                className="hidden md:block w-full h-[500px] object-cover"
              />

              {/* Mobile Image (visible below md) */}
              <img
                src="https://i.ibb.co/ymhM0m7S/Chat-GPT-Image-Jun-27-2025-12-43-39-AM.png"
                alt="BitByte Student Mobile"
                loading="lazy"
                decoding="async"
                className="block md:hidden w-full h-80 sm:h-96 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

              {/* Floating Labels - Responsive */}
              <div className="hidden md:block absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">⭐</span>
                  <div>
                    <div className="text-lg font-bold text-orange-600">4.8</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 right-1 md:left-1 md:right-120 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3 md:py-2 shadow-lg">
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-blue-500 text-sm md:text-base">🏆</span>
                  <div>
                    <div className="text-sm md:text-lg font-bold text-blue-600">
                      #1
                    </div>
                    <div className="text-xs text-gray-600">In Hinjilicut</div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="xl:w-1/2">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-1 bg-orange-500 rounded"></div>
                  <p className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                    About Us
                  </p>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  First Choice For{" "}
                  <span className="text-orange-600">Computer Education</span> in
                  Hinjilicut
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  BitByte Computer Institute provides industry-relevant,
                  affordable training to help students become job-ready. Our
                  certified instructors and modern curriculum make us
                  Hinjilicut's #1 choice.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  "Government Certified Courses",
                  "Industry-Experienced Faculty",
                  "100% Placement Assistance",
                  "Affordable Fee Structure",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold mb-2">
                    <CountUp end={20} suffix="+" />
                  </h3>
                  <p className="uppercase text-sm font-semibold tracking-wide">
                    Certified Courses
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold mb-2">
                    <CountUp end={500} suffix="+" />
                  </h3>
                  <p className="uppercase text-sm font-semibold tracking-wide">
                    Students Enrolled
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold mb-2">
                    <CountUp end={95} suffix="%" />
                  </h3>
                  <p className="uppercase text-sm font-semibold tracking-wide">
                    Success Rate
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-4xl font-bold mb-2">
                    <CountUp end={5} suffix="+" />
                  </h3>
                  <p className="uppercase text-sm font-semibold tracking-wide">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button
                  onClick={() => navigate("/about")}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:cursor-pointer text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTop;
