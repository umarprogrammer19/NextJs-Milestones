const Newsletter = () => {
    return (
        <section className="bg-yellow-500 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Stay Updated</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Subscribe to our newsletter to get the latest updates on products, exclusive offers, and more!
                </p>
                <form className="mt-8 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full max-w-xs px-4 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-yellow-400 focus:outline-none placeholder:text-zinc-950"
                    />
                    <button
                        type="submit"
                        className="ml-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-md shadow hover:bg-gray-800 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
