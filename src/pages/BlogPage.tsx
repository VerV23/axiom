import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Latest Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert perspectives on innovation, strategy, and digital transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  <Link to={`/blog/${blog.id}`} className="hover:text-secondary transition-colors">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-300 mb-6">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center text-secondary hover:text-accent transition-colors"
                >
                  Read more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;