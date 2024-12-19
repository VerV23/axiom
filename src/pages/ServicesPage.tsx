import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Innovation Strategy and Futures Thinking',
    description: "Shape your organization's future through strategic foresight and innovation frameworks that drive sustainable growth and competitive advantage.",
    icon: '🎯',
    link: '/insights/innovation-strategy'
  },
  {
    id: 2,
    title: 'Product Innovation and Business Development',
    description: 'Transform ideas into market-ready solutions with our comprehensive product innovation and business development expertise.',
    icon: '💡',
    link: '/insights/product-innovation'
  },
  {
    id: 3,
    title: 'Digital Marketing and Social Media Branding',
    description: 'Build a powerful brand presence across digital channels with strategic marketing solutions and engaging social media strategies.',
    icon: '🚀',
    link: '/insights/digital-marketing'
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description: 'Revolutionize your business with cutting-edge digital solutions and strategies that drive operational excellence.',
    icon: '⚡',
    link: '/insights/digital-transformation'
  },
  {
    id: 5,
    title: 'Strategy Consulting',
    description: 'Develop winning strategies to navigate complex business landscapes and drive sustainable growth.',
    icon: '📈',
    link: '/insights/strategy-consulting'
  },
  {
    id: 6,
    title: 'Operations Excellence',
    description: 'Optimize your operations for maximum efficiency and competitive advantage through data-driven insights.',
    icon: '⚙️',
    link: '/insights/operations-excellence'
  }
];

export default function ServicesPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to transform your business and drive innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-secondary hover:text-accent transition-colors"
              >
                Learn more
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}