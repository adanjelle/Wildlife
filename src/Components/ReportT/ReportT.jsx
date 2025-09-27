import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReportForm() {
  const [formData, setFormData] = useState({
    animal_type: "",
    damage_description: "",
    sender_name: "",
    sender_email: "",
    sender_address: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("animal_type", formData.animal_type);
    formDataToSend.append("damage_description", formData.damage_description);
    formDataToSend.append("sender_name", formData.sender_name);
    formDataToSend.append("sender_email", formData.sender_email);
    formDataToSend.append("sender_address", formData.sender_address);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      await axios.post("http://localhost:5000/report", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("✅ Report submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      setFormData({
        animal_type: "",
        damage_description: "",
        sender_name: "",
        sender_email: "",
        sender_address: "",
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting report:", error);
      toast.error("❌ Failed to submit the report!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <ToastContainer />
      <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 max-w-xl w-full transition-transform transform hover:scale-[1.01] duration-300">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-6">
          🐾 Report Damaged Animal
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please provide accurate details to help us respond quickly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Animal Type */}
          <div>
            <label
              htmlFor="animal_type"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Animal Type
            </label>
            <input
              type="text"
              id="animal_type"
              name="animal_type"
              value={formData.animal_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400"
              placeholder="Enter animal type"
            />
          </div>

          {/* Damage Description */}
          <div>
            <label
              htmlFor="damage_description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Damage Description
            </label>
            <textarea
              id="damage_description"
              name="damage_description"
              value={formData.damage_description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400 resize-none"
              placeholder="Describe the damage"
            />
          </div>

          {/* Sender Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="sender_name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="sender_name"
                name="sender_name"
                value={formData.sender_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="sender_email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="sender_email"
                name="sender_email"
                value={formData.sender_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="sender_address"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Your Address
            </label>
            <input
              type="text"
              id="sender_address"
              name="sender_address"
              value={formData.sender_address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400"
              placeholder="Enter your address"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 text-gray-700 placeholder-gray-400"
            />
            {imagePreview && (
              <div className="mt-4 text-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-48 rounded-lg shadow-md border border-gray-200"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-green-600 text-white font-semibold text-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 shadow-md transition-all duration-300"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
