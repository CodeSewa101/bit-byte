import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
function AboutTop() {
  return (
    <div>
      {/* Top: Image + Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/vxmCgRd8/Chat-GPT-Image-Jun-24-2025-09-50-17-AM.png"
            alt="BitByte Student"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right Info */}
        <div className="lg:w-1/2">
          <p className="text-orange-600 font-bold uppercase tracking-widest mb-2 border-b-2 border-dashed inline-block border-orange-400">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            First Choice For Computer Education in Hinjilicut
          </h2>
          <p className="text-gray-600 mb-6">
            BitByte Computer Institute provides industry-relevant, affordable
            training to help students become job-ready. Our certified
            instructors and modern curriculum make us Hinjilicut’s #1 choice.
          </p>

          {/* Stats with Framer Motion + CountUp */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-orange-500 text-white text-center py-6 rounded-lg shadow-md"
            >
              <h3 className="text-3xl font-bold">
                <CountUp end={20} duration={2} />+
              </h3>
              <p className="uppercase text-sm mt-2">Certified Courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-yellow-400 text-white text-center py-6 rounded-lg shadow-md"
            >
              <h3 className="text-3xl font-bold">
                <CountUp end={300} duration={3} />+
              </h3>
              <p className="uppercase text-sm mt-2">Students Enrolled</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTop;
