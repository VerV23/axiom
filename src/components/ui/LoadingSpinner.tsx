import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      <span className="ml-3 text-white">Loading team members...</span>
    </div>
  );
};

export default LoadingSpinner;