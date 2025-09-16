import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TestimonialSlider } from '../components/UI/TestimonialSlider';
import { SEO } from '../components/SEO';
import { 
  Rocket, 
  Smartphone, 
  Search, 
  Shield, 
  Palette, 
  Zap,
  Globe,
  BarChart3,
  Brush,
  Bot,
  Cloud
} from 'lucide-react';

const features = [
  { icon: Rocket, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
  { icon: Smartphone, title: 'Mobile First', description: 'Perfect on all devices and screen sizes' },
  { icon: Search, title: 'SEO Optimized', description: 'Built for search engines and rankings' },
  { icon: Shield, title: 'Secure & Safe', description: 'Enterprise-level security standards' },
  { icon: Palette, title: 'Modern Design', description: 'Beautiful and intuitive user interfaces' },
  { icon: Zap, title: '24/7 Support', description: 'Round-the-clock technical assistance' }
];

const whyChooseUs = [
  { title: '200+', subtitle: 'Projects Delivered', description: 'Successfully completed projects across India' },
  { title: '99%', subtitle: 'Client Satisfaction', description: 'Exceptional satisfaction rate with ongoing support' },
  { title: '24/7', subtitle: 'Support Available', description: 'Round-the-clock support for all our clients' },
  { title: '5+', subtitle: 'Years Experience', description: 'Proven expertise in digital transformation' }
];

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies',
    link: '/services'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    link: '/services'
  },
  {
    icon: BarChart3,
    title: 'SEO & Digital Marketing',
    description: 'Boost your online presence and drive targeted traffic to your business',
    link: '/services'
  },
  {
    icon: Brush,
    title: 'UI/UX & Creative Design',
    description: 'Beautiful and intuitive designs that convert visitors into customers',
    link: '/services'
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions to streamline your business processes',
    link: '/services'
  },
  {
    icon: Cloud,
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
  title="Dunspire - Professional Digital Solutions & Web Development Services"
  description="Transform your business with Dunspire's expert web development, app development, SEO, digital marketing, UI/UX design, AI automation, and cloud solutions."
  keywords="web development, app development, SEO, digital marketing, UI/UX design, AI automation, cloud solutions, India"
 />

<div className="min-h-screen">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 mt-16 overflow-hidden">
    
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
      {/* Heading */}
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="block">Your Vision,</span>
        <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent mt-2">Our Expertise</span>
        <span className="block text-lg md:text-2xl font-medium text-gray-200 mt-6">
          We build digital solutions that grow your business.
        </span>
      </motion.h1>
      
      
      {/* CTA Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          to="/contact"
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-yellow-500/40 transform hover:scale-105 transition-all duration-300"
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

      {/* Stats */}
      <motion.div 
        className="mt-16 flex justify-center space-x-10 text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">200+</div>
          <div className="text-gray-300">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">99%</div>
          <div className="text-gray-300">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">5+</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dunspire?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results with cutting-edge technology and proven strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:bg-gradient-to-r from-yellow-400 to-orange-500"
                  whileHover={{ y: -8, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-6 text-indigo-600">
                    <feature.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

     {/* Services Section */}
<section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <motion.div
    ref={servicesAnimation.ref}
    initial={{ opacity: 0, y: 50 }}
    animate={servicesAnimation.controls}
    variants={{
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }}
    className="max-w-6xl mx-auto px-6 lg:px-12"
  >
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Transforming Ideas into <span className="text-indigo-600">Digital Success</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We don’t just build services — we craft digital experiences that scale with your business.
      </p>
    </div>

    {/* Unique Flow Style Services */}
    <div className="relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 to-indigo-600 rounded-full hidden lg:block"></div>

      <div className="space-y-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col lg:flex-row items-center lg:items-start ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon bubble */}
            <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg text-white text-4xl mb-6 lg:mb-0 lg:mx-12">
              <service.icon className="w-10 h-10" />
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center px-5 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300"
              >
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
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
        {/* <section className="py-20 bg-gray-50">
          <TestimonialSlider />
        </section> */}

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