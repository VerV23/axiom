import React from 'react';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen pt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {children}
      </div>
    </motion.div>
  );
};

export default MainLayout;