import { useState, useEffect } from 'react';
import { Backgrounds } from './ExercisesImg.styled';

const ResponsiveBackground = ({ images }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024 && screenWidth < 1440) {
        setImageSrc(pixelRatio >= 2 ? images.desktop2x : images.desktop);
      } else {
        setImageSrc('');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  return <Backgrounds image={imageSrc} />;
};

export default ResponsiveBackground;
