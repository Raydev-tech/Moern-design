import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqItems = [
  {
    id: 1,
    question: "What is the estimated delivery time?",
    answer:
      "Most orders arrive within 5–7 business days. Custom furniture may require additional production time depending on the design.",
  },
  {
    id: 2,
    question: "Can I customize my furniture?",
    answer:
      "Yes. We offer customization options including fabrics, colors, finishes, and dimensions to suit your space.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, PayPal, bank transfers, and flexible installment payment options.",
  },
  {
    id: 4,
    question: "Do you provide furniture assembly?",
    answer:
      "Yes. Professional assembly services are available for selected products during checkout.",
  },
  {
    id: 5,
    question: "How do I track my order?",
    answer:
      "After shipment, you'll receive a tracking number via email to monitor your delivery in real time.",
  },
  {
    id: 6,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for eligible products. Items must be returned in their original condition.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span className="text-amber-600 uppercase tracking-[4px] text-sm font-semibold">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Everything you need to know about our furniture,
            delivery process, customization options, and support.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full px-7 py-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {item.question}
                </span>

                <div
                  className={`w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center transition-all duration-300 ${
                    openId === item.id
                      ? "rotate-180 bg-amber-500 text-white"
                      : ""
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openId === item.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          className="mt-16 bg-black rounded-[35px] p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="text-gray-300 mt-4">
            Our furniture experts are ready to help you find
            the perfect pieces for your home.
          </p>

          <button className="mt-8 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}