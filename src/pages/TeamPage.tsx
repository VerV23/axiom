import React from 'react';
import { motion } from 'framer-motion';
import TeamHeader from '@/components/team/TeamHeader';
import TeamGrid from '@/components/team/TeamGrid';
import TeamFooter from '@/components/team/TeamFooter';

const TeamPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-gray-900 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <TeamHeader />
        <TeamGrid />
        <TeamFooter />
      </div>
    </motion.div>
  );
};

export default TeamPage;