import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import TeamMemberCard from './TeamMemberCard';

const TeamGrid: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={member.name} 
          member={member} 
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default TeamGrid;