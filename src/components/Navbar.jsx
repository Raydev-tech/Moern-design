import { useState, useEffect } from "react";
import {
  Menu,
  Search,
  ShoppingBag,
  Sofa,
  X,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Collection", href: "#collection" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl rounded-full">
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo */}
            <a href="#home">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
                  <Sofa size={20} />
                </div>

                <div>
                  <h1 className="font-bold text-lg">
                    Velora Living
                  </h1>

                  <p className="text-xs text-gray-500">
                    Crafted for Comfort
                  </p>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="w-11 h-11 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center">
                <Search size={18} />
              </button>

              {/* Cart */}
              <button className="w-11 h-11 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center relative">
                <ShoppingBag size={18} />

                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-11 h-11 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {isMenuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav className="px-6 pb-6 pt-2 flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 rounded-xl border border-gray-200 hover:bg-black hover:text-white transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}