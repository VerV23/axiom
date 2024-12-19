import React from 'react';

interface TeamMemberInfoProps {
  name: string;
  credentials: string;
  role: string;
  description: string;
}

const TeamMemberInfo: React.FC<TeamMemberInfoProps> = ({
  name,
  credentials,
  role,
  description
}) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-secondary mb-2">{credentials}</p>
      <p className="text-lg font-semibold text-gray-300 mb-4">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TeamMemberInfo;