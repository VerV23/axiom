import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BlogArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find(post => post.id === Number(id));

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24"
    >
      <div className="max-w-4xl mx-auto px-6 py-16 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{blog.category}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">{blog.title}</h1>
            <p className="text-xl text-gray-300">{blog.excerpt}</p>
          </div>
          <div className="prose prose-lg prose-invert">
            <div className="whitespace-pre-line">{blog.content}</div>
          </div>
        </motion.article>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-white shadow-lg hover:bg-primary-light transition-all"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogArticlePage;