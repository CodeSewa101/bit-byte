import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HomeContact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Contact Info */}
        <div className="bg-blue-50 rounded-lg p-8 space-y-6 w-full md:w-1/2 shadow-md">
          <ContactItem
            icon={<FaMapMarkerAlt className="text-white" />}
            title="Our Location"
            description="Near Bus Stand, Hinjilicut, Odisha 761102"
            color="bg-blue-600"
          />
          <ContactItem
            icon={<FaPhoneAlt className="text-white" />}
            title="Call Us"
            description="+91 9876543210"
            color="bg-rose-500"
          />
          <ContactItem
            icon={<FaEnvelope className="text-white" />}
            title="Email Us"
            description="info@bitbyteedu.in"
            color="bg-yellow-400"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2">
          <p className="text-rose-600 font-semibold uppercase tracking-wide border-b-2 border-dashed border-rose-400 inline-block mb-2">
            Need Help?
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send Us A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                className="w-full border-b p-2 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border-b p-2 outline-none"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border-b p-2 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full border-b p-2 outline-none h-28"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-6 rounded shadow"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600 font-medium">
              ✅ Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, description, color }) => (
  <div className="flex items-center gap-4">
    <div className={`p-3 rounded-md ${color}`}>{icon}</div>
    <div>
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default HomeContact;
