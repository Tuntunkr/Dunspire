import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Mobile: Main Floating Button */}
      <div className="block md:hidden">
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white p-5 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={open ? 'Close Actions' : 'Open Actions'}
        >
          {open ? '✖️' : '➕'}
        </motion.button>
        {/* Action Buttons (show when open) */}
        <div className={`flex flex-col items-end space-y-3 mt-3 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
          </motion.a>
          <motion.a
            href="tel:+919942824657"
            className="bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Call Us"
          >
            <span className="text-2xl">📞</span>
          </motion.a>
        </div>
      </div>

      {/* Desktop: Always show all buttons */}
      <div className="hidden md:flex flex-col space-y-3">
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
      </div>

      {/* Scroll to Top Button (always visible) */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-indigo-500 text-white p-4 rounded-full shadow-xl hover:bg-indigo-600 transition-all duration-300 group mt-3"
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