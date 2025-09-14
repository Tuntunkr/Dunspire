import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TestimonialSlider } from '../components/UI/TestimonialSlider';
import { SEO } from '../components/SEO';

const features = [
  { icon: '🚀', title: 'Lightning Fast', description: 'Optimized for speed and performance' },
  { icon: '📱', title: 'Mobile First', description: 'Perfect on all devices and screen sizes' },
  { icon: '🔍', title: 'SEO Optimized', description: 'Built for search engines and rankings' },
  { icon: '🛡️', title: 'Secure & Safe', description: 'Enterprise-level security standards' },
  { icon: '🎨', title: 'Modern Design', description: 'Beautiful and intuitive user interfaces' },
  { icon: '⚡', title: '24/7 Support', description: 'Round-the-clock technical assistance' }
];

const whyChooseUs = [
  { title: '200+', subtitle: 'Projects Delivered', description: 'Successfully completed projects across India' },
  { title: '99%', subtitle: 'Client Satisfaction', description: 'Exceptional satisfaction rate with ongoing support' },
  { title: '24/7', subtitle: 'Support Available', description: 'Round-the-clock support for all our clients' },
  { title: '5+', subtitle: 'Years Experience', description: 'Proven expertise in digital transformation' }
];

const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies',
    link: '/services'
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    link: '/services'
  },
  {
    icon: '📈',
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence and drive targeted traffic to your business',
    link: '/services'
  },
  {
    icon: '🎨',
    title: 'UI/UX & Creative Design',
    description: 'Beautiful and intuitive designs that convert visitors into customers',
    link: '/services'
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Intelligent automation solutions to streamline your business processes',
    link: '/services'
  },
  {
    icon: '☁️',
    title: 'Cloud & Tech Solutions',
    description: 'Scalable cloud infrastructure and modern technology solutions',
    link: '/services'
  }
];

export const Home = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const whyChooseAnimation = useScrollAnimation();

  return (
    <>
      <SEO 
        title="Dunspire.in - Professional Digital Solutions & Web Development Services"
        description="Transform your business with Dunspire.in's expert web development, app development, SEO, digital marketing, UI/UX design, AI automation, and cloud solutions. Based in Muzaffarpur, Bihar."
        keywords="web development, app development, SEO, digital marketing, UI/UX design, AI automation, cloud solutions, Muzaffarpur, Bihar, India"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 mt-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">
                Dunspire.in
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert digital solutions including web development, mobile apps, SEO, UI/UX design, AI automation, and cloud services to help your business thrive in the digital age.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Our Services
              </Link>
            </motion.div>

            <motion.div 
              className="mt-12 flex justify-center space-x-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">200+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">99%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">5+</div>
                <div className="text-gray-300">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <motion.div
            ref={featuresAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={featuresAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dunspire.in?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results with cutting-edge technology and proven strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <motion.div
            ref={servicesAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions to help your business grow and succeed online
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:translate-x-2 transform duration-300"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-800 to-purple-900 text-white">
          <motion.div
            ref={whyChooseAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={whyChooseAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                We're committed to delivering exceptional results and building long-term partnerships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">{item.title}</div>
                  <div className="text-xl font-semibold mb-3">{item.subtitle}</div>
                  <p className="text-indigo-200 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <TestimonialSlider />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-800">
              Get a free consultation and discover how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+919942824657"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Call +91 99428 24657
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};