import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader: React.FC = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.h2
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Transform Your Business Together
      </motion.h2>
      <motion.p
        className="mt-2 text-lg leading-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Ready to take your organization to the next level? Get in touch with our experts.
      </motion.p>
    </div>
  );
};

export default ContactHeader;