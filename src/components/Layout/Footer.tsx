import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">dunspire</span>
                <span className="text-xs text-gray-400">Digital Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. From web development to AI automation, we transform ideas into reality.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-indigo-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-indigo-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-indigo-400">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">SEO & Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">AI & Automation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-indigo-400">Contact Details</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:dunbillbusiness@gmail.com" className="hover:text-indigo-400 transition-colors">
                    dunbillbusiness@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919942824657" className="hover:text-indigo-400 transition-colors">
                    +91 99428 24657
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm leading-relaxed">
                    Rohua Appuch, Mushari Rohua,<br />
                    Mushari Farm, Muzaffarpur,<br />
                    Bihar, India - 842002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold mb-2 text-indigo-400">Subscribe to our newsletter</h3>
              <p className="text-gray-300 text-sm mb-4 md:mb-0">
                Get the latest updates on technology trends, digital marketing tips, and exclusive offers.
              </p>
            </div>
            <div className="md:ml-8">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 flex-1"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Policy Pages */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link to="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                Refund & Cancellation Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 dunspire. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};