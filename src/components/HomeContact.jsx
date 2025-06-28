import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HomeContact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-600 font-semibold uppercase tracking-wide text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help you succeed
            in your learning journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact Info */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <ContactItem
                  icon={<FaMapMarkerAlt className="text-white" />}
                  title="Our Location"
                  description="Infront of Biju Pattanaik Kalyan Mandap, Near Bus Stand, Hinjilicut, Ganjam, Odisha - 761102"
                  color="bg-gradient-to-r from-orange-500 to-orange-600"
                />
                <ContactItem
                  icon={<FaPhoneAlt className="text-white" />}
                  title="Call Us"
                  description="+91 9556047333"
                  color="bg-gradient-to-r from-blue-500 to-blue-600"
                />
                <ContactItem
                  icon={<FaEnvelope className="text-white" />}
                  title="Email Us"
                  description="ramamurty2001@gmail.com"
                  color="bg-gradient-to-r from-green-500 to-green-600"
                />
              </div>

              {/* Decorative Element */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl">
                <p className="text-sm text-gray-700 italic">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Nelson Mandela</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <p className="text-orange-600 font-semibold uppercase tracking-wide text-sm mb-2">
                  Send Message
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  We'd Love to Hear From You
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:cursor-pointer disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {submitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-green-800 font-semibold">
                      Message sent successfully!
                    </p>
                    <p className="text-green-600 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, description, color }) => (
  <div className="flex items-start gap-4 group">
    <div
      className={`p-4 rounded-xl ${color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
    >
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default HomeContact;
