import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Financial Services',
    description: 'Digital transformation and innovation solutions for banks, insurance, and fintech companies.',
    icon: '🏦'
  },
  {
    title: 'Healthcare',
    description: 'Technology-driven solutions for healthcare providers, pharmaceuticals, and medical devices.',
    icon: '🏥'
  },
  {
    title: 'Manufacturing',
    description: 'Industry 4.0 solutions and operational excellence for manufacturing enterprises.',
    icon: '🏭'
  },
  {
    title: 'Retail & Consumer',
    description: 'Digital commerce and customer experience solutions for retail and consumer businesses.',
    icon: '🛍️'
  }
];

export default function IndustriesPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized solutions for diverse industry challenges
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
              <p className="text-gray-300">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}