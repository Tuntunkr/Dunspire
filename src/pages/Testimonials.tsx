import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/testimonials';
import { TestimonialSlider } from '../components/UI/TestimonialSlider';
import { SEO } from '../components/SEO';

const clientLogos = [
  'Tech Innovations Inc.',
  'Digital Solutions Ltd.',
  'Creative Agency Pro',
  'E-commerce Plus',
  'Marketing Masters',
  'Startup Hub',
  'Business Growth Co.',
  'Web Solutions Pro'
];

export const Testimonials = () => {
  const heroAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const logosAnimation = useScrollAnimation();

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <>
      <SEO
        title="Client Testimonials & Reviews - Professional Service Company"
        description="Read what our satisfied clients say about our web development, SEO, digital marketing, and AI automation services. Real reviews from real businesses."
      />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 overflow-hidden">

          {/* Overlay for depth */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Animated background accents */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-2xl animate-ping"></div>
          </div>

          <motion.div
            ref={heroAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients who have transformed their businesses with our services.
            </p>
          </motion.div>
        </section>



        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="py-16 bg-gray-50">
          <TestimonialSlider />
        </section>

        {/* Individual Testimonials Grid */}
        <section className="py-16 bg-white">
          <motion.div
            ref={testimonialsAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients, Our Pride</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real feedback from real businesses that have experienced success with our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.comment}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Client Logos Section */}
        <section className="py-16 bg-gray-50">
          <motion.div
            ref={logosAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={logosAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leading Companies</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We’re proud to partner with forward-thinking businesses across diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clientLogos.map((company, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 flex items-center justify-center h-28 cursor-pointer overflow-hidden"
                >
                  <span className="text-gray-800 font-semibold tracking-wide group-hover:text-indigo-600 transition-colors duration-300">
                    {company}
                  </span>

                  {/* Gradient overlay animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 text-blue-200">
              Let us help you achieve the same amazing results that our clients have experienced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg"
              >
                Start Your Success Story
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};