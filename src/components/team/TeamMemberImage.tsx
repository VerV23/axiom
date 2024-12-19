import React from 'react';

interface TeamMemberImageProps {
  src: string;
  alt: string;
  onLoad: () => void;
  isLoaded: boolean;
}

const TeamMemberImage: React.FC<TeamMemberImageProps> = ({
  src,
  alt,
  onLoad,
  isLoaded
}) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-800">
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={onLoad}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-secondary border-t-transparent" />
        </div>
      )}
    </div>
  );
};

export default TeamMemberImage;