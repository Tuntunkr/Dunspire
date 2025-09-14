import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { team } from '../data/team';
import { SEO } from '../components/SEO';

export const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, supporting their growth every step of the way.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace the latest technologies and innovative approaches to solve complex challenges.'
    },
    {
      icon: '⚡',
      title: 'Efficiency',
      description: 'We deliver projects on time and within budget while maintaining the highest quality standards.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - Professional Service Company"
        description="Learn about our team of experts specializing in web development, SEO, digital marketing, and AI automation. Discover our mission, values, and commitment to excellence."
      />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
          <motion.div
            ref={heroAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ProServices</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We're a team of passionate professionals dedicated to helping businesses thrive in the digital world through innovative solutions and exceptional service.
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <motion.div
            ref={storyAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={storyAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2019, ProServices started as a small team of developers and designers with a big vision: to make professional digital services accessible to businesses of all sizes. What began as a passion project has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey has been marked by continuous learning, adaptation, and growth. We've helped hundreds of businesses establish their online presence, improve their search rankings, and streamline their operations through innovative technology solutions.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be a trusted partner for businesses looking to leverage the power of the internet to achieve their goals. Our commitment to excellence and client satisfaction remains at the heart of everything we do.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Team working together"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <motion.div
            ref={valuesAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={valuesAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to our clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <motion.div
            ref={teamAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={teamAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our talented team of professionals brings together diverse skills and expertise to deliver exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="text-xl mb-8 text-blue-200">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-200 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-blue-800 transition-all duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};