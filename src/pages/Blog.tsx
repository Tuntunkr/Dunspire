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

  // Featured post = latest one
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog - Latest Web Development & Digital Marketing Tips"
        description="Stay updated with the latest trends in web development, SEO, digital marketing, and AI automation. Expert insights and practical tips for business growth."
      />

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>

          <motion.div
            ref={heroAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={heroAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="relative max-w-4xl mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Ideas</h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Actionable strategies, expert knowledge, and the latest trends to help your business thrive online.
            </p>
          </motion.div>
        </section>

        {/* Categories - centered */}
        <section className="py-10 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-gray-50 border-b">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div>
                <p className="text-sm text-orange-600 font-medium mb-2">Featured Post</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="text-orange-500 font-medium hover:text-orange-600 transition"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Other Posts (list style) */}
        <section className="py-12 bg-white">
          <motion.div
            ref={postsAnimation.ref}
            initial={{ opacity: 0, y: 50 }}
            animate={postsAnimation.controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="max-w-5xl mx-auto px-4 space-y-10"
          >
            {otherPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h2>
                <p className="text-gray-600">Try selecting a different category.</p>
              </div>
            ) : (
              otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col md:flex-row gap-6 border-b pb-8"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full md:w-60 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-orange-500 transition">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
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
                      className="text-orange-500 font-medium hover:text-orange-600 transition"
                    >
                      Continue Reading →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </motion.div>
        </section>
      </div>
    </>
  );
};
