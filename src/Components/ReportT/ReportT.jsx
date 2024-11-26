import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ReportT.css';

function ReportForm() {
    const [formData, setFormData] = useState({
        animal_type: '',
        damage_description: '',
        sender_name: '',
        sender_email: '',
        sender_address: '',
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file
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
        formDataToSend.append('animal_type', formData.animal_type);
        formDataToSend.append('damage_description', formData.damage_description);
        formDataToSend.append('sender_name', formData.sender_name);
        formDataToSend.append('sender_email', formData.sender_email);
        formDataToSend.append('sender_address', formData.sender_address);

        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            await axios.post('http://localhost:5000/report', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Notify success
            toast.success('Report submitted successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Clear form inputs
            setFormData({
                animal_type: '',
                damage_description: '',
                sender_name: '',
                sender_email: '',
                sender_address: '',
                image: ''
            });

            setImagePreview(null);

        } catch (error) {
            console.error("There was an error submitting the report:", error);

            // Notify error
            toast.error('Failed to submit the report!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <ToastContainer />
            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Report Damaged Animal</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Animal Report Section */}
                <div className="form-section">
                    <h3>Animal Report Details</h3>
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="animal_type">Animal Type:</label>
                            <input
                                type="text"
                                id="animal_type"
                                name="animal_type"
                                value={formData.animal_type}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="damage_description">Damage Description:</label>
                            <textarea
                                id="damage_description"
                                name="damage_description"
                                value={formData.damage_description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Sender Details Section */}
                <div className="form-section">
                    <h3>Sender Details</h3>
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="sender_name">Your Name:</label>
                            <input
                                type="text"
                                id="sender_name"
                                name="sender_name"
                                value={formData.sender_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="sender_email">Your Email:</label>
                            <input
                                type="email"
                                id="sender_email"
                                name="sender_email"
                                value={formData.sender_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="sender_address">Your Address:</label>
                            <input
                                type="text"
                                id="sender_address"
                                name="sender_address"
                                value={formData.sender_address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="image">Upload Image:</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {imagePreview && (
                                <div className="mt-4 text-center">
                                    <img src={imagePreview} alt="Preview" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit">Submit Report</button>
                </div>
            </form>
        </div>
    );
}

export default ReportForm;
