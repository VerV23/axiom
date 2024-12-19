import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogSummary: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-primary-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Expert perspectives on innovation, strategy, and digital transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredPosts.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/30 hover:bg-primary-light transition-all"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSummary;