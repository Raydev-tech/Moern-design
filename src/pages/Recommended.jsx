import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const recommendations = [
  {
    id: 1,
    title: "Bedroom Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    id: 2,
    title: "Living Room Furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
  },
  {
    id: 3,
    title: "Dining Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  },
  {
    id: 4,
    title: "Office Furniture",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
  },
];

export default function Recommended() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id='products' className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            Recommended Categories
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Furniture Designed For Every Space
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Explore our carefully curated furniture collections
            crafted to bring comfort, style, and sophistication
            into every corner of your home.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group relative h-[350px] md:h-[420px] rounded-[32px] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <button className="cursor-pointer group/btn inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:bg-amber-500 hover:text-white transition-all duration-300">
                    View Products

                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          className="flex justify-center mt-16"
        >
          <button className="bg-black cursor-pointer hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
            Explore All Categories
          </button>
        </div>
      </div>
    </section>
  );
}