import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSupport = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative circles for subtle effect */}
      <div className="absolute top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-blue-800 mb-4"
          >
            Contact <span className="text-blue-500">Support</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need help or have a question? Our support team is here 24/7 to assist you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <FaEnvelope className="text-blue-600 text-3xl mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800 text-lg">Email Us</h4>
                <p className="text-gray-600">support@taskflow.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <FaPhoneAlt className="text-blue-600 text-3xl mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800 text-lg">Call Us</h4>
                <p className="text-gray-600">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <FaMapMarkerAlt className="text-blue-600 text-3xl mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800 text-lg">Visit Us</h4>
                <p className="text-gray-600">Bhubaneswar, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form (White) */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-md border border-blue-100 rounded-3xl p-10 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-blue-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-blue-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-blue-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full shadow-lg font-semibold transition-all"
            >
              Send Message →
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
