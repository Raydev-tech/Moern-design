import { useEffect } from 'react';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Collections from './Collections';
import Recommended from './Recommended';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import About from './About';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Furniture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm mb-6"
          >
            <Star size={14} fill="currentColor" />
            Trusted by 10,000+ Homeowners
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Design a Home
            <span className="block text-amber-300">
              You'll Love Living In
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            Discover premium furniture crafted for comfort,
            elegance, and modern living. Create a beautiful
            space that reflects your personality.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="cursor-pointer bg-amber-400 hover:bg-amber-300 text-black px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300">
              Shop Collection
              <ArrowRight size={18} />
            </button>

            <button className="cursor-pointer border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black px-7 py-3 rounded-full font-semibold transition-all duration-300">
              Explore Designs
            </button>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">10K+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Happy Customers
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Premium Products
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-gray-300 text-sm mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <ChevronDown
            size={32}
            className="text-white animate-bounce"
          />
        </div>
      </div>
    </section>
    <Collections />
    <Recommended />
    <Services />
    <About />
    <Testimonials />
    <FAQ />
    </>
  );
};

export default Hero;