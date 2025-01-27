import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // For button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        const errorMessage = `Failed to send message. Status: ${response.status}`;
        toast.error(errorMessage);
        console.error(errorMessage);
        // Clear the input fields even if there is an error
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
      // Clear the input fields even if there is an error
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
          "We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out. Our team is here to help and will get back to you as soon as possible."
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-4 mt-2 bg-white border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="block w-full px-4 py-4 mt-2 bg-white border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-base font-medium text-gray-900">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="block w-full px-4 py-4 mt-2 bg-white border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-base font-medium text-gray-900">
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="block w-full px-4 py-4 mt-2 bg-white border rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-base font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="block w-full px-4 py-4 mt-2 bg-white border rounded-md"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-4 py-4 mt-2 text-white rounded-md ${
                    loading ? "bg-gray-400" : "bg-green-600"
                  }`}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>

          <ToastContainer /> {/* Add ToastContainer to render notifications */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
