import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    }
  };

  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-16">
      {/* Heading with bars */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-2">
          <span className="w-10 h-1 bg-orange-600 rounded-full"></span>
          <p className="text-orange-600 font-semibold uppercase tracking-wide">
            Contact Us
          </p>
          <span className="w-10 h-1 bg-orange-600 rounded-full"></span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Contact For Any Query
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Info */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600">
            Have questions or want to enroll? Contact us and we’ll respond as
            soon as possible!
          </p>

          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Office</h3>
              <p className="text-gray-600">Hinjilicut, Ganjam, Odisha</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Mobile</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Email</h3>
              <p className="text-gray-600">info@bitbyte.institute</p>
            </div>
          </div>
        </div>

        {/* Middle: Map */}
        <div className="lg:w-1/3 h-[460px] overflow-hidden rounded-xl shadow-md">
          <iframe
            title="Institute Location"
            src="https://www.google.com/maps?q=Hinjilicut,Ganjam,Odisha&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/3 space-y-4">
          {/* Fullname & Phone */}
          <div className="flex gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
              className="w-1/2 px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="[0-9]{10}"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />

          {/* Course select */}
          <select
            name="course"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded text-gray-500"
          >
            <option value="">Select Course</option>
            <option value="Basic Computer">Basic Computer</option>
            <option value="Tally with GST">Tally with GST</option>
            <option value="Web Development">Web Development</option>
            <option value="Python Programming">Python Programming</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Other">Other</option>
          </select>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition duration-200 w-full"
          >
            Send Message
          </button>

          {/* Custom popup */}
          {showPopup && (
            <div className="mt-4 text-green-600 font-medium bg-green-100 p-3 rounded text-center border border-green-400">
              ✅ Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
