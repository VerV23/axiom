import React from 'react';
import { motion } from 'framer-motion';

const TeamHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Meet our exceptional team of innovation leaders and industry experts
      </p>
    </motion.div>
  );
};

export default TeamHeader;