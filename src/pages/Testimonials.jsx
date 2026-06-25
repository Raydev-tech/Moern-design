import { useEffect } from "react";
import { Star, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Homeowner",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    comment:
      "The quality exceeded my expectations. Every piece feels luxurious and perfectly crafted.",
  },
  {
    id: 2,
    name: "James Chen",
    role: "Interior Designer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    comment:
      "Working with Velora Living has transformed the way I furnish client projects.",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Apartment Owner",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "Beautiful furniture, exceptional service, and surprisingly fast delivery.",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
    comment:
      "Outstanding craftsmanship and attention to detail. Worth every penny.",
  },
  {
    id: 5,
    name: "Lisa Torres",
    role: "Architect",
    image:
      "https://randomuser.me/api/portraits/women/33.jpg",
    comment:
      "A perfect combination of elegance and functionality for modern spaces.",
  },
  {
    id: 6,
    name: "David Brown",
    role: "Furniture Collector",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    comment:
      "One of the best furniture brands I've ever purchased from.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf8f5] to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover why thousands of homeowners, designers,
            and professionals trust our furniture collections.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="text-amber-500 mb-5"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-8">
                "{item.comment}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div
          data-aos="fade-up"
          className="mt-20 bg-black rounded-[40px] p-10 md:p-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold text-white">
                10K+
              </h3>
              <p className="text-gray-400 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                500+
              </h3>
              <p className="text-gray-400 mt-2">
                Premium Products
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                15+
              </h3>
              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                4.9★
              </h3>
              <p className="text-gray-400 mt-2">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}