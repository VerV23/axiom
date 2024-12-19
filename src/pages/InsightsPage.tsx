import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'The Complete Guide to Digital Transformation in 2024',
    excerpt: 'Discover how leading organizations are leveraging digital technologies to transform their operations and create new value propositions.',
    category: 'Digital Transformation',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: '/blog/digital-transformation.jpg'
  },
  {
    id: 2,
    title: 'Innovation Management: Building a Culture of Continuous Improvement',
    excerpt: 'Learn the key principles and frameworks for fostering innovation within your organization and driving sustainable growth.',
    category: 'Innovation',
    date: 'Jan 12, 2024',
    readTime: '6 min read',
    image: '/blog/innovation-management.jpg'
  },
  {
    id: 3,
    title: 'Strategic Consulting: Navigating Business Complexity',
    excerpt: 'Explore how strategic consulting can help organizations identify opportunities, mitigate risks, and achieve competitive advantages.',
    category: 'Strategy',
    date: 'Jan 8, 2024',
    readTime: '7 min read',
    image: '/blog/strategic-consulting.jpg'
  },
  {
    id: 4,
    title: 'Operational Excellence: From Theory to Practice',
    excerpt: 'Discover practical approaches to optimize operations, reduce costs, and improve quality through data-driven methodologies.',
    category: 'Operations',
    date: 'Jan 5, 2024',
    readTime: '5 min read',
    image: '/blog/operational-excellence.jpg'
  }
];

export default function InsightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-gray-900 pt-24"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4">
                  <Link to={`/insights/${blog.id}`} className="hover:text-secondary transition-colors">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-300 mb-6">{blog.excerpt}</p>
                <Link
                  to={`/insights/${blog.id}`}
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
}