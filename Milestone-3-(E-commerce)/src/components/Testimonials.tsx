import Image from 'next/image';
import T1 from "@/images/T1.webp";
import T2 from "@/images/T2.jpg";
import T3 from "@/images/T3.jpg";

const testimonials = [
  {
    name: 'Customer 1',
    role: 'Verified Buyer',
    quote: 'UF-Store has an amazing selection of products and their customer service is top-notch!',
    image: T1,
  },
  {
    name: 'Customer 2',
    role: 'Regular Customer',
    quote: 'I love shopping at UF-Store. The site is user-friendly and the delivery is always prompt.',
    image: T2,
  },
  {
    name: 'Customer 3',
    role: 'Happy Shopper',
    quote: 'Fantastic experience! The product quality is excellent and the prices are unbeatable.',
    image: T3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">What Our Customers Say</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-zinc-950">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
