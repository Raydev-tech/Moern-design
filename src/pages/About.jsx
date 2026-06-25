import { useEffect } from "react";
import { Award, Sofa, Users, Truck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Happy Customers",
    },
    {
      icon: Sofa,
      number: "500+",
      label: "Furniture Designs",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: Truck,
      number: "100%",
      label: "Fast Delivery",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#faf8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            About Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Crafting Comfort,
            <span className="block text-amber-600">
              Inspiring Spaces
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At Velora Living, we believe furniture is more than
            decoration. It is about creating beautiful spaces
            where memories are made, families gather, and life
            happens.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              alt="Luxury Furniture"
              className="w-full h-[600px] object-cover rounded-[40px]"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-amber-600">
                15+
              </h3>

              <p className="text-gray-600">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Bringing Timeless Elegance To Modern Homes
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Since our founding, Velora Living has been
              dedicated to creating furniture that blends
              functionality, comfort, and sophisticated design.
              Every piece is carefully selected and crafted to
              transform ordinary spaces into extraordinary
              experiences.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              From luxurious sofas and elegant dining sets to
              modern office furniture, we help homeowners and
              interior designers create spaces that reflect
              their unique style and personality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-5 py-3 rounded-full bg-white shadow-md">
                Premium Quality
              </span>

              <span className="px-5 py-3 rounded-full bg-white shadow-md">
                Sustainable Materials
              </span>

              <span className="px-5 py-3 rounded-full bg-white shadow-md">
                Fast Delivery
              </span>

              <span className="px-5 py-3 rounded-full bg-white shadow-md">
                Modern Design
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center mb-5">
                  <Icon
                    size={30}
                    className="text-amber-600"
                  />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.number}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}