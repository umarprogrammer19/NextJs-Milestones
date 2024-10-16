const ContactUs = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-600 text-center">
                    Feel free to reach out to us by using the form below or contact us directly.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                        <p className="mt-4 text-gray-700">
                            Feel free to contact us using the following details:
                        </p>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <span className="font-semibold text-gray-900">Name:</span> Umar Farooq
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Email:</span>{' '}
                                <a href="mailto:umarofficial0121@gmail.com" className="text-yellow-600 hover:underline">
                                    umarofficial0121@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Phone:</span>{' '}
                                <a href="tel:+923172472531" className="text-yellow-600 hover:underline">
                                    +92 317 2472531
                                </a>
                            </li>
                            <li>
                                <span className="font-semibold text-gray-900">Address:</span> Karachi, Pakistan
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900">Send Us a Message</h3>
                        <form className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
