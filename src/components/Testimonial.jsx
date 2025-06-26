import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rashmita Patra",
    message:
      "BitByte transformed my skills from zero to confident! The trainers are really supportive.",
  },
  {
    name: "Sibani Das",
    message:
      "I never imagined learning computers could be this fun. Great experience overall!",
  },
  {
    name: "Satyajit Pradhan",
    message:
      "Best institute in Ganjam! Practical-based training helped me land my first job.",
  },
  {
    name: "Pabitra Nayak",
    message:
      "Every class was full of learning. Highly recommended for beginners!",
  },
  {
    name: "Jyotirmayee Swain",
    message:
      "The environment was friendly and motivating. Loved every bit of it.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          What Our Students Say
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
          Hear from our passionate learners across Odisha who made the leap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full p-2">
                <Quote size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-800">{t.name}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
