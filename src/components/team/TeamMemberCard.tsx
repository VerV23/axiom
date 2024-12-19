import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '@/types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 * (index + 1) }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all group"
    >
      <div className="mb-6 relative aspect-square overflow-hidden rounded-xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-secondary mb-2">{member.credentials}</p>
        <p className="text-lg font-semibold text-gray-300 mb-4">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;