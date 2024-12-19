import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  blog: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all"
    >
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span>{blog.category}</span>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">
        <Link to={`/blog/${blog.id}`} className="hover:text-secondary transition-colors">
          {blog.title}
        </Link>
      </h3>
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
    </motion.article>
  );
};

export default BlogCard;