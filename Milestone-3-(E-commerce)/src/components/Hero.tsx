const Hero = () => {
    return (
        <section className="relative bg-blue-600 text-white p-2">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative py-16 md:py-24">
                    <div className="absolute inset-0 overflow-hidden">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            preserveAspectRatio="xMidYMid slice"
                            fill="none"
                            viewBox="0 0 1463 502"
                            aria-hidden="true"
                        >
                            <path
                                fill="rgba(255, 255, 255, 0.1)"
                                d="M-164 329L0 473l1463-1463-164-164L0 329z"
                            />
                        </svg>
                    </div>
                    <div className="relative">
                        <h1 className="text-[35px] font-extrabold tracking-tight sm:text-5xl">
                            Welcome to UF-Store
                        </h1>
                        <p className="mt-6 text-xl max-w-3xl">
                            Discover our range of products and enjoy a seamless shopping experience. Explore now!
                        </p>
                        <div className="mt-8">
                            <a
                                href="#shop"
                                className="inline-block bg-yellow-500 text-gray-900 py-2 px-6 rounded-md font-medium hover:bg-yellow-600"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
