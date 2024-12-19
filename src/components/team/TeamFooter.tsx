import React from 'react';
import { motion } from 'framer-motion';

const TeamFooter: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-16 text-center"
    >
      <p className="text-gray-300 italic">
        Our consultants hold a Master's degree in Innovation and Business from the Asian Institute of Management.
      </p>
    </motion.div>
  );
};

export default TeamFooter;