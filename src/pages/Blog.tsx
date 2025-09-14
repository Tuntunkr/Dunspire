import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/blog';
import { SEO } from '../components/SEO';

export const Blog = () => {
  const heroAnimation = useScrollAnimation();
  const postsAnimation = useScrollAnimation();

  const categories = ['All', 'Web Development', 'SEO', 'Digital Marketing', 'Technology', 'Business'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

  return (
    <>
      <SEO 
        title="Blog - Latest Web Development & Digital Marketing Tips"
        description="Stay updated with the latest trends in web development, SEO, digital marketing, and AI automation. Expert insights and practical tips for business growth."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and trends in web development, SEO, and digital marketing.
            </p>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <motion.div
            ref={postsAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={postsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h2>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                    whileHover={{ y: -5 }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4 text-sm text-gray-600">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest updates on web development, SEO tips, and digital marketing strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};