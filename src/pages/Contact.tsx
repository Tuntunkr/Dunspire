import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SEO } from '../components/SEO';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
        New Contact Form Submission from Dunspire.in
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        Budget: ${formData.budget}
        Message: ${formData.message}
      `;

      // In a real implementation, you would send this to your backend
      // For now, we'll use mailto as a fallback
      const mailtoLink = `mailto:dunbillbusiness@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;

      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      description: 'Call us for immediate assistance',
      value: '+91 99428 24657',
      action: 'tel:+919942824657'
    },
    {
      icon: '✉️',
      title: 'Email',
      description: 'Send us your questions',
      value: 'dunbillbusiness@gmail.com',
      action: 'mailto:dunbillbusiness@gmail.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      value: 'WhatsApp Chat',
      action: 'https://wa.me/919942824657'
    },
    {
      icon: '📍',
      title: 'Address',
      description: 'Visit our office',
      value: 'Rohua Appuch, Mushari Rohua, Mushari Farm, Muzaffarpur, Bihar - 842002',
      action: '#'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Dunspire.in - Get Your Free Consultation Today"
        description="Contact Dunspire.in for professional web development, app development, SEO, digital marketing, and AI automation services. Get your free consultation and custom quote."
        keywords="contact dunspire, web development consultation, digital marketing services, Muzaffarpur Bihar"
      />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-800 to-purple-900 text-white py-20">
          <motion.div
            ref={heroAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today for a free consultation and discover how we can help you achieve your digital goals.
            </p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <motion.div
            ref={contactAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={contactAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-gray-600">Choose the contact method that works best for you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="text-5xl mb-6">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.action}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors break-words"
                  >
                    {method.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                ref={formAnimation.ref}
                initial={{ opacity: 0, x: -50 }}
                animate={formAnimation.controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 99428 24657"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="website-development">Website Development</option>
                        <option value="app-development">App Development</option>
                        <option value="seo-digital-marketing">SEO & Digital Marketing</option>
                        <option value="ui-ux-design">UI/UX & Creative Design</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="cloud-solutions">Cloud & Tech Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="10000-25000">₹10,000 - ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000+">₹1,00,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Office</h2>
                
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl h-64 mb-8 flex items-center justify-center border border-indigo-200">
                  <div className="text-center text-indigo-700">
                    <div className="text-5xl mb-4">🗺️</div>
                    <p className="font-semibold text-lg">Interactive Map</p>
                    <p className="text-sm mt-2 max-w-xs">
                      Rohua Appuch, Mushari Rohua, Mushari Farm, Muzaffarpur, Bihar - 842002
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Monday - Friday:</span>
                      <span className="font-semibold text-indigo-600">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Saturday:</span>
                      <span className="font-semibold text-indigo-600">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Sunday:</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <a
                    href="https://wa.me/919942824657"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="mr-3 text-xl">💬</span>
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+919942824657"
                    className="flex items-center justify-center w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span className="mr-3 text-xl">📞</span>
                    Call +91 99428 24657
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-indigo-200">
              Get a free consultation and custom quote within 24 hours.
            </p>
            <a
              href="/services"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </section>
      </div>
    </>
  );
};