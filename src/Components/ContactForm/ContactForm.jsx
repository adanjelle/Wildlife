import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.amaica.co.ke/wp-content/uploads/2020/04/contactbanner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">
          Contact Us
        </h1>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 text-lg font-semibold rounded-lg text-white transition-all ${
                  loading
                    ? "bg-gray-400"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-gray-600">
              Reach us anytime using the details below or by filling out the
              contact form.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <span>
                  Wildlife Rescue Team HQ, <br />
                  P.O. Box 40241 - 00100 Wajir, Kenya
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-green-600 text-xl" />
                <span>
                  Toll Free: 0800 597 000 <br />
                  Mobile: +254 727774164 / +254 722529312
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-600 text-xl" />
                <span>
                  WildlifeRescue.go.ke <br />
                Wildlife Rescue Team
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaGlobe className="text-green-600 text-xl" />
                <a
                  href="https://reservations.kws.go.ke/"
                  className="text-green-700 font-medium hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  reservations.kws.go.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" />
    </div>
  );
};

export default ContactPage;
