// components/ContactUsSection.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                        <div className="flex items-start mb-6">
                            <FaPhone className="text-blue-600 mr-4 text-2xl" />
                            <div>
                                <p className="text-gray-700 font-medium">Phone:</p>
                                <p className="text-gray-600">+92 317 2472531</p>
                            </div>
                        </div>
                        <div className="flex items-start mb-6">
                            <FaEnvelope className="text-blue-600 mr-4 text-2xl" />
                            <div>
                                <p className="text-gray-700 font-medium">Email:</p>
                                <p className="text-gray-600">umarofficial0121@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start mb-6">
                            <FaMapMarkerAlt className="text-blue-600 mr-4 text-2xl" />
                            <div>
                                <p className="text-gray-700 font-medium">Address:</p>
                                <p className="text-gray-600">Pakistan, Karachi</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
