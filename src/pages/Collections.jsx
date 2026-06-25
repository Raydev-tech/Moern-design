import { useEffect } from 'react';
import {
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: 1,
    name: 'Avondale Wood Sofa',
    category: 'Living Room',
    price: '$180',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Zuma Lounge Chair',
    category: 'Chair',
    price: '$280',
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200',
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'Pershing Leather Chair',
    category: 'Luxury',
    price: '$290',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Powell Accent Chair',
    category: 'Modern',
    price: '$220',
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200',
    badge: 'Trending',
  },
  {
    id: 5,
    name: 'Infiniti Swivel Chair',
    category: 'Office',
    price: '$250',
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200',
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Modern Luxury Sofa',
    category: 'Luxury',
    price: '$320',
    rating: '5.0',
    image:
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200',
    badge: 'New',
  },
];

export default function Collections() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="collection" className="py-24 bg-gradient-to-b from-[#faf8f5] to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-amber-600 font-semibold uppercase tracking-[4px] text-sm">
            Premium Collection
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Crafted For Modern Living
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Discover luxury furniture pieces designed to elevate
            your home with timeless elegance, exceptional comfort,
            and premium craftsmanship.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[320px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                  {product.badge}
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:bg-black hover:text-white transition">
                  <Heart size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-3">
                  <Star
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-sm text-gray-600">
                    {product.rating} Rating
                  </span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <h4 className="text-2xl font-bold text-amber-600">
                    {product.price}
                  </h4>

                  <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition duration-300">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          data-aos="fade-up"
          className="flex justify-center mt-16"
        >
          <button className="group cursor-pointer bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-amber-600 transition-all duration-300">
            View All Collections

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </div>
      </div>
    </section>
  );
}