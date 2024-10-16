import Image from 'next/image';
import AboutImage from "@/images/About.png"
import Link from 'next/link';

const AboutUs = () => {
    return (
        <section className="bg-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row lg:items-center">
                    <div className="lg:w-1/2 lg:pr-8">
                        <h2 className="text-3xl font-extrabold text-gray-90 mt-6">About Us</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Welcome to UF-Store, your go-to destination for the best products and unbeatable deals.
                            We are dedicated to providing you with a seamless shopping experience, top-notch customer service,
                            and a wide range of high-quality products. Our mission is to make shopping easy and enjoyable for you,
                            and we’re always here to help with any questions or concerns you may have.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-block bg-yellow-500 text-gray-900 py-2 px-6 rounded-md font-medium hover:bg-yellow-600"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <Image
                            src={AboutImage}
                            alt="About Us Image"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
