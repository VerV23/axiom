import { motion } from 'framer-motion';

export default function CareersPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
        <div className="prose prose-lg max-w-none">
          <p>Content for Careers page will go here...</p>
        </div>
      </div>
    </motion.main>
  );
}