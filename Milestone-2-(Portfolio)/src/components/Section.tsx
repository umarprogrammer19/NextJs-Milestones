import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    text: string;
    buttonText?: string;
    buttonLink?: string;
    reverse?: boolean;
    marginTop?: boolean;
    isCircular?: boolean;
}

const Section: React.FC<SectionProps> = ({
    imageSrc,
    imageAlt,
    heading,
    text,
    marginTop,
    buttonText,
    buttonLink,
    reverse = false,
    isCircular = false,
}) => {
    return (
        <section className="py-20 bg-gray-100">
            <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center ${marginTop && "mt-24"}`}>
                {/* Image */}
                <div className={`md:w-1/2 flex justify-center mb-8 md:mb-0 ${isCircular ? 'w-64 h-64' : ''}`}>
                    <div className={`relative ${isCircular ? 'rounded-full overflow-hidden' : ''}`}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover"
                            width={isCircular ? 256 : 600}
                            height={isCircular ? 256 : 400}
                        />
                    </div>
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h2>
                    <p className="text-lg text-gray-600 mb-6">{text}</p>
                    {buttonText && buttonLink && (
                        <Link href={buttonLink} className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
                            {buttonText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Section;
