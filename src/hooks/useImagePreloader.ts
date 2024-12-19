import { useEffect, useState } from 'react';
import { preloadImages } from '@/utils/imageLoader';

export const useImagePreloader = (imageSrcs: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(imageSrcs);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setImagesLoaded(true); // Still set to true to not block rendering
      }
    };

    loadImages();
  }, [imageSrcs]);

  return imagesLoaded;
};