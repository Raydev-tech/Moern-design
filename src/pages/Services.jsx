import { useEffect } from "react";
import {
  Truck,
  RotateCcw,
  Gift,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    icon: Gift,
    title: "Custom Furniture",
    description:
      "Personalize every detail to create furniture that perfectly matches your style and space.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Free Delivery",
    description:
      "Enjoy fast and secure shipping with complimentary delivery on selected orders.",
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Shop with confidence thanks to our simple 30-day return and exchange policy.",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            Premium Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            What We Can Offer You
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Experience exceptional service and premium support
            designed to make every furniture purchase seamless,
            comfortable, and enjoyable.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-500">
                  <Icon
                    size={36}
                    className="text-amber-600 group-hover:text-white transition-all duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <button className="group/btn flex items-center gap-2 text-black font-semibold">
                  Learn More

                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition"
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          data-aos="fade-up"
          className="mt-20 bg-black rounded-[40px] p-10 md:p-14 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Transform Your Home Today
          </h3>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover furniture collections crafted with elegance,
            comfort, and timeless beauty for modern living.
          </p>

          <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}