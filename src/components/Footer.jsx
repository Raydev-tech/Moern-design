import {
  Sofa,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Newsletter */}
        <div className="py-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-amber-500 uppercase tracking-[4px] text-sm font-semibold">
              Newsletter
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Stay Inspired With Modern Living
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Subscribe to receive exclusive furniture collections,
              design inspiration, special discounts, and updates.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 px-6 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 outline-none"
              />

              <button className="h-14 px-8 bg-amber-500 hover:bg-amber-600 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                <Sofa size={22} />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Velora Living
                </h3>
                <p className="text-sm text-gray-400">
                  Crafted for Comfort
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Premium furniture crafted to transform your home
              with comfort, luxury, and timeless elegance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="/" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-amber-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-amber-500 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#collections" className="hover:text-amber-500 transition">
                  Collections
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-amber-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Custom Furniture</li>
              <li>Interior Design</li>
              <li>Free Delivery</li>
              <li>Easy Returns</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-500 mt-1" />
                <span>
                  123 Luxury Avenue,
                  <br />
                  New York, USA
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500" />
                <span>+1 (234) 567-8900</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500" />
                <span>support@veloraliving.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Velora Living. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-amber-500 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}