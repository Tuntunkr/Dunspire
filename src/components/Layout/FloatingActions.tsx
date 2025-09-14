import React from 'react';
import { motion } from 'framer-motion';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919942824657"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919942824657"
        className="bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Call Us"
      >
        <span className="text-2xl">📞</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Call +91 99428 24657
        </div>
      </motion.a>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-indigo-500 text-white p-4 rounded-full shadow-xl hover:bg-indigo-600 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Back to Top"
      >
        <span className="text-2xl">⬆️</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back to Top
        </div>
      </motion.button>
    </div>
  );
};