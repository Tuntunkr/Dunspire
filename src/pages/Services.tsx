import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { services } from '../data/services';
import { PricingCard } from '../components/UI/PricingCard';
import { SEO } from '../components/SEO';
import { CheckCircleIcon } from 'lucide-react';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();

  const faqs = [
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on complexity and scope. Typically, websites take 2-6 weeks, while SEO campaigns show results in 3-6 months.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support packages ranging from 30 days to 1 year, depending on your chosen plan.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade your plan at any time to access additional features and services.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes, we work with startups, small businesses, and enterprises. Our services are tailored to meet your specific needs and budget.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers through our secure Razorpay integration.'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - Web Development, SEO, Digital Marketing & More"
        description="Professional web development, SEO marketing, UI/UX design, digital marketing, and AI automation services. Choose from our Basic, Advanced, or Premium plans."
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
            className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to help your business grow, from web development to AI automation.
            </p>
          </motion.div>
        </section>



        {/* Services Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedService.id === service.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Details */}
        <section className="py-16 bg-gray-50">
          <motion.div
            ref={servicesAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Service Overview */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{selectedService.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.name}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{selectedService.description}</p>
            </div>

            {/* Service Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What You Get</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {selectedService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-200"
                  >
                    <CheckCircleIcon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedService.plans.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    serviceId={selectedService.id}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <motion.div
            ref={faqAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={faqAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Get answers to common questions about our services</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Contact us today for a free consultation and custom quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-orange-500 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};