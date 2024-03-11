import React, { useState, useEffect } from "react";
import { Background } from "../pages/404Page/ErrorPage.styled";


import backgroundImageHero1x from '../img/hero-1x.jpg';
import backgroundImageHero2x from '../img/hero-2x.jpg';
import backgroundImageHeroMob2x from '../img/hero-mob-2x.jpg';
import backgroundImageHeroMob1x from '../img/hero-mob-1x.jpg';
import backgroundImageHeroTab2x from '../img/hero-tab-2x.jpg';
import backgroundImageHeroTab1x from '../img/hero-tab-1x.jpg';

const ResponsiveBackground = () => {
  const [imageSrc, setImageSrc] = useState("");

  const images = {
    desktop: backgroundImageHero1x,
    desktop2x: backgroundImageHero2x,
    tablet: backgroundImageHeroTab1x,
    tablet2x: backgroundImageHeroTab2x,
    mobile: backgroundImageHeroMob1x,
    mobile2x: backgroundImageHeroMob2x,
  };

  useEffect(() => {
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setImageSrc(pixelRatio >= 2 ? images.desktop2x : images.desktop);
      } else if (screenWidth >= 768) {
        setImageSrc(pixelRatio >= 2 ? images.tablet2x : images.tablet);
      } else {
        setImageSrc(pixelRatio >= 2 ? images.mobile2x : images.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, [images]);

  return <Background image={imageSrc} />;
};

export default ResponsiveBackground;
